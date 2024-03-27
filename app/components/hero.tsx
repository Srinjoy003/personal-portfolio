/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
					purus at eros vestibulum mattis id nec eros. Nulla facilisi. Fusce sed
					ipsum non dolor fermentum tincidunt. Sed laoreet, magna id pretium
					eleifend, urna magna ultricies purus.
				</p>
				<div className="social-icons">
					<a href="#">
						<FaLinkedinIn />
					</a>
					<a href="#">
						<FaGithub />
					</a>
					<a href="#">
						<FaDiscord />
					</a>
					<a href="#"><FaTwitter /></a>
				</div>

				<div className="btn-group">
					<a href="#" className="btn">
						Hire
					</a>
					<a href="#contact" className="btn">
						Contact
					</a>
				</div>
			</div>
			<div className="home-img">
				<img src="/images/mainImage.jpeg" alt="" />
			</div>
		</section>
	);
}

export default Hero;
