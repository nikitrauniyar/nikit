/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation'; // Rename to your file name for custom animation
import nikitResume from './assets/images/nikit_resume.pdf';

// Splash Screen

const splashScreen = {
	enabled: false, // set false to disable splash screen
	animation: splashAnimation,
	duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
	animated: true // Set to false to use static SVG
};

const greeting = {
	username: 'Nikit Rauniyar',
	title: "Hi all, I'm Nikit",
	subTitle: emoji('Full Stack Software Developer 👨🏼‍💻'),
	resumeLink: nikitResume,
	// Set to empty to hide the button
	displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: 'https://github.com/nikitrauniyar',
	linkedin: 'https://www.linkedin.com/in/nikitrauniyar/',
	gmail: 'rauniyarnikit@gmail.com',
	medium: 'https://medium.com/@nikitrauniyar',
	// Instagram, Twitter and Kaggle are also supported in the links!
	// To customize icons and social links, tweak src/components/SocialMedia
	display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: 'What I do',
	subTitle: 'BUILDING WEB APPS WITH MODERN TECHNOLOGIES',
	skills: [
		emoji(
			'⚡ Developing scalable and reusable front-end components with React.js'
		),
		emoji('⚡ OAuth 2.0 Configurations using Microsoft and Google'),
		emoji(
			'⚡ Data handling and API calls to back-end with Node.js, Java or Python'
		),
		emoji('⚡ Data processing and storing in databases using SQL or NoSQL')
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
	softwareSkills: [
		{
			skillName: 'React.js',
			classname: 'logos:react'
			// style: {
			// 	color: '#61DAFB'
			// }
		},
		{
			skillName: 'Node.js',
			classname: 'vscode-icons:file-type-node',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'TypeScript',
			classname: 'logos:typescript-icon',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'MongoDB',
			classname: 'skill-icons:mongodb',
			style: {
				color: '#3FA037'
			}
		},
		{
			skillName: 'Mailchimp',
			classname: 'logos:mailchimp-freddie',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'Auth0',
			classname: 'logos:auth0-icon',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'Java',
			classname: 'logos:java',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'Python',
			classname: 'logos:python',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'git',
			classname: 'logos:git-icon',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'MySQL',
			classname: 'logos:mysql',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'PostgreSQL',
			classname: 'logos:postgresql',
			style: {
				backgroundColor: 'transparent'
			}
		},
		{
			skillName: 'AWS',
			classname: 'skill-icons:aws-dark'
		},
		{
			skillName: 'Docker',
			classname: 'skill-icons:docker'
		},
		{
			skillName: 'Stripe',
			classname: 'logos:stripe',
			style: {
				width: '100px',
				height: '41.8px'
			}
		}
	],
	// };
	// softwareSkills: [
	// 	{
	// 		skillName: 'React.js',
	// 		fontAwesomeClassname: 'fab fa-react',
	// 		style: {
	// 			color: '#61DAFB'
	// 		}
	// 	},
	// 	{
	// 		skillName: 'JavaScript',
	// 		fontAwesomeClassname: 'fab fa-js',
	// 		style: {
	// 			color: 'yellow'
	// 		}
	// 	},
	// 	{
	// 		skillName: 'nodejs',
	// 		fontAwesomeClassname: 'fab fa-node'
	// 	},
	// 	{
	// 		skillName: 'sql-database',
	// 		fontAwesomeClassname: 'fas fa-database'
	// 	},
	// 	{
	// 		skillName: 'aws',
	// 		fontAwesomeClassname: 'fab fa-aws'
	// 	},
	// 	{
	// 		skillName: 'python',
	// 		fontAwesomeClassname: 'fab fa-python'
	// 	},
	// 	{
	// 		skillName: 'docker',
	// 		fontAwesomeClassname: 'fab fa-docker'
	// 	},
	// 	{
	// 		skillName: 'git',
	// 		classname: 'logos:git-icon',
	// 		style: {
	// 			backgroundColor: 'transparent'
	// 		}
	// 	},
	// 	{
	// 		skillName: 'MySQL',
	// 		classname: 'logos:mysql',
	// 		style: {
	// 			backgroundColor: 'transparent'
	// 		}
	// 	},
	// 	{
	// 		skillName: 'PostgreSQL',
	// 		classname: 'logos:postgresql',
	// 		style: {
	// 			backgroundColor: 'transparent'
	// 		}
	// 	},
	// 	{
	// 		skillName: 'MongoDB',
	// 		classname: 'simple-icons:mongodb',
	// 		style: {
	// 			color: '#3FA037'
	// 		}
	// 	}
	// ],
	display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'Melbourne Polytechnic',
			logo: require('./assets/images/mp.jpeg'),
			subHeader: 'Bachelor of Information Technology (Software Development)',
			duration: 'Feb 2019 - Dec 2021',
			desc: 'Took courses about Software Engineering, Web Security, Operating Systems.',
			descBullets: [
				'Excelled in software development and programming coursework.',
				'Received 20% merit-based international student scholarship.',
				'Obtained 3.83 CGPA (Out of 4).'
			]
		},
		{
			schoolName: 'New Horizon College',
			logo: require('./assets/images/nhc.png'),
			subHeader:
				'Year 12 - Physcial Science (Physics, Chemistry & Mathematics)',
			duration: 'April 2016 - April 2018',
			desc: 'Ranked first in the program.',
			descBullets: [
				'Studied physics, chemistry, mathematics.',
				'Rewarded with 100% merit-based scholarship.',
				'Obtained 3.71 CGPA (Out of 4).'
			]
		}
	]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: 'Frontend/Design', //Insert stack or technology you have experience in
			progressPercentage: '75%' //Insert relative proficiency in percentage
		},
		{
			Stack: 'Backend',
			progressPercentage: '90%'
		},
		{
			Stack: 'Database',
			progressPercentage: '90%'
		},
		{
			Stack: 'API Integrations',
			progressPercentage: '95%'
		},
		{
			Stack: 'DevOps',
			progressPercentage: '60%'
		}
	],
	displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: 'Software Analyst and Engineer',
			company: 'Booop',
			companylogo: require('./assets/images/booop.png'),
			date: 'May 2022 – Present',
			desc: 'A company revolutionising physical and online shopping experience.',
			descBullets: [
				'Designing technical requirements, system plans, flow charts, and API documents.',
				'Coding logics, algorithms, and APIs in using Express.js, Node.js.',
				'Writing unit tests to meet quality standards.',
				'Designing, developing codes for database services like MongoDB.',
				'Integrating external APIs, like Stripe (Payment Processor), Auth0 (Authentication Provider), SendInBlue (Email Server).',
				'Deploying applications in AWS using Docker, ECR & Fargate.'
			]
		},
		{
			role: 'Software Developer',
			company: 'BrandoPC Solutions',
			companylogo: require('./assets/images/bpc.jpeg'),
			date: 'May 2017 – May 2018',
			desc: 'A company providing IT services.',
			descBullets: [
				'Building web applications using React.js including OAuth.',
				'Using Python (Django) and PostgreSQL in backend and database.',
				'Working in a team using git and version controlling tools.',
				"Implementing agile methodologies to meet client's needs.",
				'Updating codes to latest standards and security practices.'
			]
		}
		// {
		//   role: "Software Engineer Intern",
		//   company: "Airbnb",
		//   companylogo: require("./assets/images/airbnbLogo.png"),
		//   date: "Jan 2015 – Sep 2015",
		//   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		// }
	]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
	display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: 'Professional Projects',
	subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
	projects: [
		{
			image: require('./assets/images/booop.png'),
			projectName: 'Consumer Web App',
			projectDesc:
				"A consumer facing app's backend and database design as well as configurations.",
			footerLink: [
				{
					name: 'Visit Website',
					url: 'https://app.booop.it/'
				}
				//  you can add extra buttons here.
			]
		},
		{
			image: require('./assets/images/booop.png'),
			projectName: 'Retailer Web App',
			projectDesc:
				"A consumer facing app's backend and database design as well as configurations.",
			footerLink: [
				{
					name: 'Visit Website',
					url: 'https://retailer.booop.it'
				}
			]
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji('Certifications'),
	subtitle:
		'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

	achievementsCards: [
		{
			title: 'AWS Certified Cloud Practitioner',
			subtitle:
				'First level certification from a leading cloud infrastructure provider',
			image: require('./assets/images/aws_ccp.png'),
			imageAlt: 'AWS CCP Logo',
			footerLink: [
				{
					name: 'View Certification',
					url: 'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing'
				}
			]
		},
		{
			title: 'AI in Fintech',
			subtitle: '- University of Helsinki & Reaktor',
			image: require('./assets/images/elements-of-ai.png'),
			imageAlt: 'Aiinfintech',
			footerLink: [
				{
					name: 'View Certification',
					url: 'https://certificates.mooc.fi/validate/wbqds5be8c'
				}
			]
		}
	],
	display: true
};

// Blogs Section

const blogSection = {
	title: 'Blogs',
	subtitle:
		'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
	displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
	blogs: [
		{
			url: 'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
			title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
			description:
				'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?'
		},
		{
			url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
			title: 'Why REACT is The Best?',
			description:
				'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.'
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: false // Set false to hide this section, defaults to true
// };

// Podcast Section

const podcastSection = {
	title: emoji('Podcast 🎙️'),
	subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

	// Please Provide with Your Podcast embeded Link
	podcast: [
		'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo'
	],
	display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji('Contact Me ☎️'),
	subtitle:
		'Think I am a good fit for your team or just want to say hi? My Inbox is open for all.',
	number: '+61-450092919',
	email_address: 'rauniyarnikit@gmail.com'
};

// Twitter Section

const twitterDetails = {
	userName: 'nikitrauniyar', //Replace "twitter" with your twitter username without @
	display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
	illustration,
	greeting,
	socialMediaLinks,
	splashScreen,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	// talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	isHireable
};
