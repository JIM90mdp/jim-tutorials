"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
    {
		id: 1,
        price: "150$",
		tutorialName: "Ultimate Guitar Guide I, II & III",
		concepts: "Techniques, theory & repertoire",
		dificulty: "Beginner",
	},
	{
		id: 2,
		price: "100$",
		tutorialName: "Music Theory I, II & III",
		concepts: "Notation, Harmony & Rhythm",
		dificulty: "Beginner",
	},
	{
		id: 3,
		price: "300$",
		tutorialName: "Musica composition I, II  & III",
		concepts: "Pop, Funk & Jazz",
		dificulty: "Intermediate & Advanced",
	},
	{
		id: 4,
        price: "300$",
		tutorialName: "Improvisation for all instruments I, II, III & IV",
		concepts: "Techniques, Practice Method & Strategies",
		dificulty: "Intermediate & Advanced",
	},
    {
		id: 5,
		price: "100$",
		tutorialName: "Private Lessons",
		concepts: "Individual growth",
		dificulty: "All-level",
	},

];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);
	return (
		<div className={`flex flex-col justify-center items-center reveal lg:justify-end lg:items-end${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl relative right-[-90px] top-[20px] lg:top-0] lg:right-0">🌀 Tutorials 🌀</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li key={gig.id} className="flex items-center my-10 justify-between text-sm md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<div className="flex flex-col justify-center items-center date w-[3.7rem] h-[3.7rem] p-2 bg-fluo-green mr-4 text-sm rounded-md border-8 border-white md:mr-12 lg:w-[4.5rem] lg:h-[4.5rem]">
								<p className="font-bold text-sm text-[#6f705f] leading-none text-center uppercase lg:text-xl">{gig.price}</p>
							</div>
							<div className="text-white text-right leading-none md:mr-12">
								<p>{gig.tutorialName}</p>
								<p>{gig.concepts}</p>
								<div className="flex justify-end md:hidden">
									<MapMapper extraClasses="fill-[#0d9eaf] mr-2" />
									<p>{gig.dificulty}</p>
								</div>
							</div>
							<div className="hidden text-right text-white leading-none md:flex">
								<MapMapper extraClasses="fill-[#0d9eaf] mr-2" />
								<p>{gig.dificulty}</p>
							</div>
						</li>
					);
				})}
			</ul>
			{/* <div className="hidden gap-x-3 lg:flex">
				<a href="https://github.com/stefanogali/panic-panini-next" target="_blank" rel="noreferrer">
					<ButtonPrimary customClasses="flex gap-x-1 ">
						<Github extraClasses="w-5 fill-white" />
						Github Repo
					</ButtonPrimary>
				</a>
				<ScrollTo toId="shows" duration={1500}>
					<ButtonPrimary>Find out more</ButtonPrimary>
				</ScrollTo>
			</div> */}
		</div>
	);
}
