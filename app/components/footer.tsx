import React from "react";
import { FaLinkedinIn, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
	return (
		<footer className="footer">
				<div className="social">
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

			<ul className="list">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#education">Education</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<p className="copyright">© Srinjoy Sengupta | All Rights Reserved</p>
		</footer>
	);
}

export default Footer;
