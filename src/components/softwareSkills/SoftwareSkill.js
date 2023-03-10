import React from 'react';
import './SoftwareSkill.scss';
import { skillsSection } from '../../portfolio';

export default function SoftwareSkill() {
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons">
					{skillsSection.softwareSkills.map((skills, index) => (
						<li
							key={index}
							className="software-skill-inline"
							name={skills.skillName}
						>
							<span
								className="iconify"
								data-icon={skills.classname}
								// style={skills.style}
								// data-inline="false"
							></span>
							<p>{skills.skillName}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
