/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLinkedinIn, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import HeroSVG from "./heroSVG";
import { MdEmail } from "react-icons/md";

function Hero() {


	return (
		<section className="home" id="home">
			<div className="home-content">
				<h1>
					Hi, It's <span>Srinjoy</span>
				</h1>
				<h3 className="text-animation">
					I'm a <span></span>
				</h3>
				<p>
					I'm a skilled software developer with expertise in frameworks like
					React and NextJS as well as server side technologies such as Node.js.
					I'm highly proficient in python and also experienced in object
					oriented programming languages like Java and C++. I am currently
					pursuing my Bachelor's degree in Computer Science at Heritage
					Institute of Technology.
				</p>
				<div className="social-icons">
					<a href="https://linkedin.com/in/srinjoy-sengupta-b28565302">
						<FaLinkedinIn />
					</a>
					<a href="https://github.com/Srinjoy003">
						<FaGithub />
					</a>
					<a href="#">
						<FaTwitter />
					</a>
					<a href="mailto:srinjoy003@gmail.com">
						<MdEmail />
					</a>
				</div>

				<div className="btn-group">
					<a href="https://raw.githubusercontent.com/Srinjoy003/Resume/master/resume.pdf" className="btn" >
						Resume
					</a>
					<a href="#contact" className="btn">
						Contact
					</a>
				</div>
			</div>
			<HeroSVG />
		</section>
	);
}

export default Hero;
