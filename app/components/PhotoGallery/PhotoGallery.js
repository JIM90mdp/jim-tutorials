"use client";

import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

const galleryThumbnails = [
	{
		id: 1,
		src: "/gallery/thumbnails/thumbnail-1.jpg",
		club: "Agostina, 23 years old.",
		city: "ECEM (drum classroom)",
		date: "April 22, 2024",
		slides: [{ src: "/gallery/thumbnails/thumbnail-1.jpg" }],
	},
	{
		id: 2,
		src: "/gallery/thumbnails/thumbnail-2.jpg",
		club: "Catalina, 6 years old.",
		city: "Her home ",
		date: "May 19, 2019",
		slides: [{ src: "/gallery/thumbnails/thumbnail-2.jpg" }],
	},
	{
		id: 3,
		src: "/gallery/thumbnails/thumbnail-3.jpg",
		club: "Camilo, 15 years old.",
		city: "ECEM (piano classroom)",
		date: "July 12, 2021",
		slides: [{ src: "/gallery/thumbnails/thumbnail-3.jpg" }],
	},
	{
		id: 4,
		src: "/gallery/thumbnails/thumbnail-4.jpg",
		club: "Music class at school - 11 years.",
		city: "San Alberto School",
		date: "September 20, 2016",
		slides: [{ src: "/gallery/thumbnails/thumbnail-4.jpg" }],
	},
	// {
	// 	id: 5,
	// 	src: "/gallery/thumbnails/thumbnail-5.jpg",
	// 	club: "The Super Cat.",
	// 	city: "Rome",
	// 	date: "03/03/2018",
	// 	slides: [{ src: "/gallery/slider-images/slider-13.jpg" }, { src: "/gallery/slider-images/slider-14.jpg" }, { src: "/gallery/slider-images/slider-15.jpg" }],
	// },
	// {
	// 	id: 6,
	// 	src: "/gallery/thumbnails/thumbnail-6.jpg",
	// 	club: "The Brave Salmon.",
	// 	city: "Berlin",
	// 	date: "25/12/2017",
	// 	slides: [{ src: "/gallery/slider-images/slider-16.jpg" }, { src: "/gallery/slider-images/slider-17.jpg" }, { src: "/gallery/slider-images/slider-18.jpg" }],
	// },
];

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.2,
};

export default function PhotoGallery() {
	const [openGallery, setOpenGallery] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	const clickHandler = (index) => {
		setOpenGallery(true);
		setGalleryIndex(index);
	};

	return (
		<section id="photo-gallery" className={`w-full mt-16 pb-14 lg:mt-56 lg:pb-56 lg:mb-[22.5rem] reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container>
				<h2 className="font-bold text-6xl pb-6">Gallery</h2>
				<p>Students</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
					{galleryThumbnails.map((item, index) => {
						return (
							<div className="flex flex-col mb-5 leading-none" key={item.id}>
								<div className="w-full h-auto rounded-lg bg-white transition-all">
									<Image className="rounded-lg cursor-pointer hover:opacity-60 transition-all" src={item.src} width={400} height={400} alt="Gallery gig thumbnail" onClick={() => clickHandler(index)} />
								</div>
								<h5 className="text-sm md:text-lg xl:text-xl font-medium">{item.club}</h5>
								<span className="flex">
									<MapMapper />
									<h5 className="ml-2 text-sm md:text-lg">{item.city}</h5>
								</span>
								<span className="flex">
									<Calendar />
									<h5 className="ml-2 text-sm md:text-lg">{item.date}</h5>
								</span>
							</div>
						);
					})}
					<Lightbox open={openGallery} close={() => setOpenGallery(false)} slides={galleryThumbnails[galleryIndex].slides} />
				</div>
			</Container>
		</section>
	);
}
