/* eslint-disable @next/next/no-img-element */

import React from "react";
import { FaStar } from "react-icons/fa";

function Projects() {
	return (
		<section className="testimonials" id="testimonials">
			<div className="testimonials-box">
				<h2 className="heading">Projects</h2>
				<div className="wrapper">
					<div className="testimonial-item">
						<img src="" alt=""></img>
						<h2>Key Ninja</h2>
						<div className="rating">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							perferendis vero magni nihil nemo ipsam non. Sapiente nisi ab ad
							praesentium. Vitae quisquam saepe consequuntur dolor modi qui
							nostrum perferendis!
						</p>
					</div>

					<div className="testimonial-item">
						<img src="" alt=""></img>
						<h2>Chess Eclipse</h2>
						<div className="rating">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							perferendis vero magni nihil nemo ipsam non. Sapiente nisi ab ad
							praesentium. Vitae quisquam saepe consequuntur dolor modi qui
							nostrum perferendis!
						</p>
					</div>
 
					<div className="testimonial-item">
						<img src="" alt=""></img>
						<h2>Blunder Master</h2>
						<div className="rating">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							perferendis vero magni nihil nemo ipsam non. Sapiente nisi ab ad
							praesentium. Vitae quisquam saepe consequuntur dolor modi qui
							nostrum perferendis!
						</p>
					</div>

				</div>
			</div>
		</section>
	);
}

export default Projects;
