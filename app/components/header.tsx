"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MouseEventHandler } from "react";
import { useState, useRef } from "react";

function Header() {
	const [open, setOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	const handleClick: MouseEventHandler<SVGElement> = (event) => {
		setOpen((currentOpen) => !currentOpen);
		if (navRef.current) {
			navRef.current.classList.toggle("active");
		}
	};

	return (
		<header className="header">
			<Link className="logo" href="/">
				Srinjoy <span className="">Sengupta</span>
			</Link>

			{!open ? (
				<AiOutlineMenu className="menu-icon" onClick={handleClick} />
			) : (
				<IoMdClose className="menu-icon" onClick={handleClick} />
			)}

			<nav className="navbar" ref={navRef}>
				<a href="#home">Home</a>
				<a href="#education">Education</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</nav>
		</header>
	);
}

export default Header;
