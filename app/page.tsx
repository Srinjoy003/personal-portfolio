"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import Hero from "./components/hero";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function Home() {
	// const navbar = document.querySelector('.navbar')
	// const sections = document.querySelectorAll('.section')
	// const navLinks = document.querySelectorAll('.header nav a')

	// window.onscroll = () => {
	// 	sections.forEach((sec) => {
	// 		const top = window.scrollY;
	// 		const offset = sec.offsetTop - 150;
	// 		const height = sec.offsetHeight;
	// 		const id = sec.getAttribute;

	// 		if(top >= offset && top < offset + height){
	// 			navLinks.forEach(links => {
	// 				links.classList.remove('active')
	// 				document.querySelector('header nav a[href*=' + id + ' ]')?.classList.add('active')
	// 			})
	// 		}
	// 	})
	// }

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 	  const sections = document.querySelectorAll('.section');

	// 	  sections.forEach(sec => {
	// 		const top = window.scrollY;
	// 		const offset = sec.offsetTop - 150;
	// 		const height = sec.offsetHeight;
	// 		const id = sec.getAttribute('id');

	// 		if (top >= offset && top < offset + height) {
	// 		  setActiveSection(id);
	// 		}
	// 	  });
	// 	};

	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 	  window.removeEventListener('scroll', handleScroll);
	// 	};
	//   }, []);
	return (
		<>
			<Header />
			<Hero />
			<Timeline />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
