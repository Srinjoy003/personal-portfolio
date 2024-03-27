import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import Hero from "./components/hero";
import Timeline from "./components/timeline";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Timeline />
		</>
	);
}
