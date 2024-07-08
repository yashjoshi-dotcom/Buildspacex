import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/cards/TestimonialCard";

function TestimonialsSection() {
	
	return (
		<section id="testimonial" className="mx-auto my-4 flex w-full max-w-6xl px-4 py-16 md:my-0">
			<div className="flex flex-col items-center justify-start gap-16 md:items-start">
				<h1 className="text-center text-4xl font-semibold capitalize leading-tight md:text-left md:text-5xl">
					Testimonial What our{" "}
					<span className="underline decoration-primary underline-offset-4">
						Students
					</span>{" "}
					say
				</h1>
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full max-w-xs md:max-w-sm"
				>
					<CarouselContent>
						<TestimonialCard
							personImg="/images/avatars/1.jpg"
							personJobRole="Full stack developer"
							personName="Elder"
							testimonialHeading="Great Quality"
							personTestimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Assumenda iure nulla perspiciatis natus minus. Eius
												doloribus sunt, non exercitationem neque dolores laborum
												dolorum?"
						/>
						<TestimonialCard
							personImg="/images/avatars/2.jpg"
							personJobRole="Frontend developer"
							personName="Yuvraj"
							testimonialHeading="Value for money"
							personTestimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												doloribus sunt, non exercitationem neque dolores laborum
												architecto sequi, sed suscipit repudiandae tempore quaerat
												dolorum?"
						/>
						<TestimonialCard
							personImg="/images/avatars/3.jpg"
							personJobRole="Backend Engineer"
							personName="Yash"
							testimonialHeading="Best website for learning"
							personTestimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Assumenda iure nulla perspiciatis natus minus. Eius
												doloribus sunt, non exercitationem neque dolores laborum
												dolorum?"
						/>
					</CarouselContent>
					<CarouselPrevious className="left-auto right-12 top-[110%]" />
					<CarouselNext className="right-0 top-[110%]" />
				</Carousel>
			</div>
			<div className="hidden basis-2/3 md:block">
				<img
					src="/images/home-testimonial.png"
					alt="student placeholder image"
				/>
			</div>
		</section>

	);
}

export default TestimonialsSection;
