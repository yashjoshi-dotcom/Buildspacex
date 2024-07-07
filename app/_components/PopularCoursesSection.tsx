import CourseCardCarousel from "@/components/cards/CourseCardCarousel";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

function PopularCoursesSection() {
	return (
		<div className="my-12 border bg-muted py-16">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-12 p-2 xl:flex-row xl:justify-between">
				<div>
					<h1 className="text-center text-5xl font-semibold leading-normal xl:w-min xl:text-left">
						Most Popular Courses
					</h1>
				</div>
				<Carousel
					opts={{
						align: "center",
						loop: true,
					}}
					className="grid w-full place-content-center"
				>
					<CarouselContent className="py-4">
						<CourseCardCarousel
							courseImage="/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg"
							courseName="Modern React with MUI and Redux"
							coursePrice={3000}
							starRating={4}
						/>
						<CourseCardCarousel
							courseImage="/images/courses/stillness-inmotion-YSCCnRGrD-4-unsplash.jpg"
							courseName="Ethical Hacking Bootcamp Zero to mastery"
							coursePrice={2000}
							starRating={5}
						/>
						<CourseCardCarousel
							courseImage="/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg"
							courseName="Modern React with MUI and Redux"
							coursePrice={4000}
							starRating={4}
						/>
						<CourseCardCarousel
							courseImage="/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg"
							courseName="The Complete guide to docker and kubernetes"
							coursePrice={2500}
							starRating={4}
						/>
						<CourseCardCarousel
							courseImage="/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg"
							courseName="NextJS complete guide from zero to hero"
							coursePrice={4500}
							starRating={4}
						/>
					</CarouselContent>
					<CarouselPrevious className="left-auto right-12 top-[105%] shadow-lg" />
					<CarouselNext className="right-0 top-[105%] shadow-lg" />
				</Carousel>
			</div>
		</div>
	);
}

export default PopularCoursesSection;
