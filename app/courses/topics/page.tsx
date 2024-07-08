"use client";
import LevelBox from "@/components/LevelBox";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const TopicPage = () => {
	return (
		<main>
			<div className="fixed flex flex-col">
				<Navbar />
				<div className="mt-16 flex h-screen flex-col px-4 py-8 lg:flex-row">
					<div className="flex flex-col px-4 py-8 lg:w-1/2">
						<div className="mb-5 rounded-md bg-gray-300 px-4 py-8 shadow-xl lg:mt-48">
							<h2 className="mb-8 text-center text-6xl lg:text-left">
								Topic Name
							</h2>

							<p className="mr-4 text-center text-xl lg:text-left">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Sed, suscipit debitis! Error
								vero animi tenetur rerum, nam voluptatibus fuga
								dolor?
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default TopicPage;
