/* eslint-disable @next/next/no-img-element */

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
	return (
		<section className="testimonials" id="projects">
			<div className="testimonials-box">
				<h2 className="heading">Projects</h2>
				<div className="wrapper">
					<div className="testimonial-item">
						<img src="/images/key-ninja.png" alt=""></img>
						<h2>Key Ninja</h2>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							perferendis vero magni nihil nemo ipsam non. Sapiente nisi ab ad
							praesentium. Vitae quisquam saepe consequuntur dolor modi qui
							nostrum perferendis!
						</p>

						<div className="project-link">
							<a href="https://github.com/Srinjoy003/touch-typing">
								<FaGithub />
							</a>
							<a href="https://key-ninja.vercel.app/">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>

					<div className="testimonial-item">
						<img src="/images/chess-eclipse.png" alt=""></img>
						<h2>Chess Eclipse</h2>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							perferendis vero magni nihil nemo ipsam non. Sapiente nisi ab ad
							praesentium. Vitae quisquam saepe consequuntur dolor modi qui
							nostrum perferendis!
						</p>
						<div className="project-link">
							<a href="https://github.com/Srinjoy003/chess">
								<FaGithub />
							</a>
							<a>
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>

					<div className="testimonial-item">
						<img src="/images/blundermaster.png" alt=""></img>
						<h2>Blunder Master</h2>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							perferendis vero magni nihil nemo ipsam non. Sapiente nisi ab ad
							praesentium. Vitae quisquam saepe consequuntur dolor modi qui
							nostrum perferendis!
						</p>
						<div className="project-link">
							<a href="https://github.com/Srinjoy003/BlunderMaster-Chess-Engine">
								<FaGithub />
							</a>
							<a>
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
