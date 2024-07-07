import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

type Props = {
	courseImage: string;
	courseName: string;
	starRating: number;
	coursePrice: number;
};

function CourseCardCarousel({
	courseImage,
	courseName,
	starRating,
	coursePrice,
}: Props) {
	return (
		<CarouselItem className="basis-10/12 sm:basis-1/2 lg:basis-1/3">
			<Card className="group w-full max-w-80 hover:shadow-lg">
				<CardHeader className="p-4">
					<div className="aspect-square w-full overflow-hidden rounded">
						<img src={courseImage} alt="course image" />
					</div>
					<CardTitle className="line-clamp-2 text-lg capitalize">
						{courseName}
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<div className="flex gap-1">
						{Array.from({ length: starRating }).map((_, index) => (
							<Star
								key={index}
								className="fill-primary text-primary"
							/>
						))}
					</div>
					<div className="flex items-center justify-between">
						<div>
							<p className="flex items-center font-semibold">
								<span className="text-primary">
									₹ {coursePrice}
								</span>
								/<span>course</span>
							</p>
						</div>
						<Button
							size="icon"
							className="rounded-full bg-white text-primary group-hover:bg-primary group-hover:text-white"
						>
							<ArrowRight />
						</Button>
					</div>
				</CardContent>
			</Card>
		</CarouselItem>
	);
}

export default CourseCardCarousel;
