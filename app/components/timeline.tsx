import React from "react";

function Timeline() {
	return (
		<section className="education" id="education">
			<h2 className="heading">Education</h2>

			<div className="timeline-items">
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-date">2016</div>
					<div className="timeline-content">
						<h3>High School</h3>
						<p>
							I proudly graduated from Delhi Public School,Ruby Park, Kolkata,
							where I excelled academically and actively participated in
							extracurricular activities. These formative years laid the
							groundwork for my academic achievements and personal growth.
						</p>
					</div>
				</div>

				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-date">2021</div>
					<div className="timeline-content">
						<h3>University</h3>
						<p>
							I graduated from Heritage Institute of Technology with B.Tech. in
							Computer Science and Engineering. My time there was a period of
							immense growth, both academically and personally. I engaged deeply
							with my field of study and actively contributed to the university
							community through various initiatives and projects.
						</p>
					</div>
				</div>

				{/* <div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-date">2023</div>
					<div className="timeline-content">
						<h3>Internship</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
							magni explicabo doloremque error quibusdam recusandae accusantium
							porro molestias odit, ut harum dicta vel corporis doloribus
							dolore! Eius veritatis tempora provident.
						</p>
					</div>
				</div>

				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-date">2024</div>
					<div className="timeline-content">
						<h3>Job 1</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
							magni explicabo doloremque error quibusdam recusandae accusantium
							porro molestias odit, ut harum dicta vel corporis doloribus
							dolore! Eius veritatis tempora provident.
						</p>
					</div>
				</div> */}
			</div>
		</section>
	);
}

export default Timeline;
