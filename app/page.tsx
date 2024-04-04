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
