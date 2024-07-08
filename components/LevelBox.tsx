import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const LevelBox = ({
	href,
	title,
	index,
	isLastIndex,
	isDone,
}: {
	href: string;
	title: string;
	index: number;
	isLastIndex: boolean;
	isDone: boolean;
}) => {
	const img = index % 2 === 0 ? "/assets/left.png" : "/assets/right.png";
	const direction = index % 2 === 0 ? "right" : "left";
	const doneColor = isDone ? "primary" : "gray-400";
	const doneTextColor = isDone ? "white" : "black";
	const [showHoverContent, setShowHoverContent] = useState(false);

	return (
		<>
			<div
				className={`float-${direction} mx-auto mt-0 flex h-20 w-40 items-center justify-center bg-${doneColor} rounded-md px-4 py-2`}
				onMouseEnter={() => setShowHoverContent(true)}
				onMouseLeave={() => setShowHoverContent(false)}
				style={{ position: "relative" }}
			>
				<span className={`text-center text-${doneTextColor} `}>
					<Link href="/courses/topics">
						{" "}
						Topic {index}
						<br />
						{title}
					</Link>
				</span>
				{showHoverContent && (
					<div
						className={`hover-content absolute top-0 bg-gray-300 ${direction}-40 z-10 mx-2 flex h-20 w-52 items-center justify-center rounded p-4`}
						style={{ zIndex: 10 }}
					>
						This content will for the Description of the Topic div.
					</div>
				)}
			</div>

			{!isLastIndex && (
				<div
					className={`float-${direction} mx-auto mt-8 flex items-center justify-center`}
				>
					<Image src={img} alt="arrow" width="154" height="154" />
				</div>
			)}

			<div style={{ clear: "both" }}></div>
		</>
	);
};

export default LevelBox;
