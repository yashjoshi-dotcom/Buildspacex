"use client";
import LevelBox from "@/components/LevelBox";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CoursePage = () => {
	const [topics, setTopics] = React.useState([
		{ href: "/topic1", title: "Basics", index: 1, isDone: true },
		{ href: "/topic2", title: "Beginner 1", index: 2, isDone: true },
		{ href: "/topic3", title: "Beginner 2", index: 3, isDone: false },
		{ href: "/topic4", title: "Intermediate 1", index: 4, isDone: false },
		{ href: "/topic5", title: "Intermediate 2", index: 5, isDone: false },
		{ href: "/topic6", title: "Advanced 1", index: 6, isDone: false },
		{ href: "/topic7", title: "Advanced 2", index: 7, isDone: false },
		{ href: "/topic8", title: "Expert", index: 8, isDone: false },
		{ href: "/topic9", title: "Master", index: 9, isDone: false },
		{ href: "/topic10", title: "Grandmaster", index: 10, isDone: false },
	]);

	const changeDoneStatus = React.useCallback((index: number) => {
		setTopics((prevTopics) =>
			prevTopics.map((topic, i) =>
				i === index ? { ...topic, isDone: true } : topic,
			),
		);
	}, []);



	return (
		<main>
			<div className="fixed flex flex-col">
				<Navbar />
				<div className="mt-16 flex h-screen flex-col px-4 py-8 lg:flex-row">
					<div className="flex flex-col px-4 py-8 lg:w-1/2">
						<div className="mb-5 rounded-md bg-gray-300 px-4 py-8 shadow-xl lg:mt-48">
							<h2 className="mb-8 text-center text-6xl lg:text-left">
								Course Name
							</h2>

							<p className="mr-4 text-center text-xl lg:text-left">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Sed, suscipit debitis! Error
								vero animi tenetur rerum, nam voluptatibus fuga
								dolor?
							</p>
						</div>
						<button
							onClick={() => changeDoneStatus(2)}
							className="cursor-pointer rounded bg-primary px-4 py-2 text-white"
						>
							Click to Mark Topic 3 as Done
						</button>


					</div>
					<div className="flex h-full flex-1 items-center justify-center px-4 lg:w-1/2">
						<div className="h-full w-96 overflow-y-auto py-24 lg:py-48">
							{topics.map((topic, index) => (
								<LevelBox
									key={index}
									href={topic.href}
									title={topic.title}
									index={topic.index}
									isDone={topic.isDone}
									isLastIndex={index === topics.length - 1}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CoursePage;
