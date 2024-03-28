import React from "react";
import { FaLinkedinIn, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

function Footer() {
	return (
		<footer className="footer">
			<div className="social">
				<a href="#">
					<FaLinkedinIn />
				</a>
				<a href="#">
					<FaGithub />
				</a>
				<a href="#">
					<FaDiscord />
				</a>
				<a href="#">
					<FaTwitter />
				</a>
			</div>

			<ul className="list">
				<li>
					<a href="#">FAQ</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">About Me</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<a href="#">Testimonials</a>
				</li>
			</ul>
			<p className="copyright">© Srinjoy Sengupta | All Rights Reserved</p>
		</footer>
	);
}

export default Footer;
