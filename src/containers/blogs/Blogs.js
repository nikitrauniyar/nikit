import React, { useState, useEffect, useContext } from 'react';
import './Blog.scss';
import BlogCard from '../../components/blogCard/BlogCard';
import { blogSection } from '../../portfolio';
import { Fade } from 'react-reveal';
import StyleContext from '../../contexts/StyleContext';

export default function Blogs() {
	const { isDark } = useContext(StyleContext);
	const [mediumBlogs, setMediumBlogs] = useState([]);
	function setMediumBlogsFunction(array) {
		setMediumBlogs(array);
	}
	//Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
	function extractTextContent(html) {
		return typeof html === 'string'
			? html
					.split('p>')
					.filter(el => !el.includes('>'))
					.map(el => el.replace('</', '.').replace('<', ''))
					.join(' ')
					.split('.')[0] + '.'
			: NaN;
	}
	useEffect(() => {
		if (blogSection.displayMediumBlogs) {
			const getMediumBlogs = async () => {
				try {
					const response = await fetch(
						`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nikitrauniyar`
					);
					const mediumData = await response.json();
					setMediumBlogs(mediumData.items);
				} catch (error) {
					console.error(error);
					setMediumBlogsFunction('Error');
					blogSection.displayMediumBlogs = 'false';
				}
			};
			getMediumBlogs();
		}
	}, []);

	if (!blogSection.display) {
		return null;
	}

	return (
		<Fade bottom duration={1000} distance="20px">
			<div className="main" id="blogs">
				<div className="blog-header">
					<h1 className="blog-header-text">{blogSection.title}</h1>
					{/* <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p> */}
				</div>
				<div className="blog-main-div">
					<div className="blog-text-div">
						{!blogSection.displayMediumBlogs || mediumBlogs === 'Error'
							? blogSection.blogs.map((blog, i) => (
									<BlogCard
										key={i}
										isDark={isDark}
										blog={{
											url: blog.url,
											image: blog.image,
											title: blog.title,
											description: blog.description
										}}
									/>
							  ))
							: mediumBlogs.map((blog, i) => (
									<BlogCard
										key={i}
										isDark={isDark}
										blog={{
											url: blog.link,
											title: blog.title,
											description: extractTextContent(blog.content)
										}}
									/>
							  ))}
					</div>
				</div>
			</div>
		</Fade>
	);
}
