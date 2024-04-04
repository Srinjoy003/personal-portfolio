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
							A full stack web app to practise and test typing speed. Built
							using <span>NextJS</span> and <span>Tailwind</span>.
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
							A multiplayer chess game built using <span>NextJS</span>,{" "}
							<span>WebSockets</span>, <span>ExpressJS</span> and{" "}
							<span>Tailwind</span>.
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
							A chess engine crafted using algorithms including Minimax,
							Alpha-Beta Pruning, Iterative Deepening DFS, Quiescence Search and
							Move ordering. Built using <span>Typescript</span> and integrated into <span>Chess Eclipse</span>.
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
