import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function HomeSection() {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-4 pt-8 md:pt-12">
			<div className="flex max-w-6xl flex-col gap-4 md:flex-row md:gap-0">
				<div className="flex w-full flex-col gap-4 text-center md:max-w-[60%] md:justify-center md:gap-6 md:text-left">
					<div className="px-4 text-4xl font-semibold leading-tight md:px-0 md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
						<h1>
							<span className="text-primary underline underline-offset-8">
								Improve
							</span>{" "}
							your Skill with Different Way
						</h1>
					</div>
					<p className="w-full px-4 md:w-10/12 md:px-0">
						Let&apos;s take an online course to improve your skills in a
						different way, you can set your own study time according
						to your learning speed. So you san study comfortable and
						absorb tge material easily.
					</p>
					<div className="space-x-4">
						<Button size="lg">Get Started</Button>
						<Button size="lg" variant="outline">
							Watch video
						</Button>
					</div>
				</div>
				<div className="flex w-full items-center justify-center md:w-auto md:shrink-0">
					<img
						className="h-auto w-[20rem] md:w-96 lg:w-[30rem]"
						src="/images/home-hero.jpg"
						alt=""
					/>
				</div>
			</div>
			<Card className="w-full max-w-6xl border-none shadow-xl">
				<CardContent className="flex w-full items-center justify-around gap-4 text-nowrap px-0 py-8">
					<div className="flex flex-col items-center gap-4">
						<p className="text-4xl font-bold text-primary">10k+</p>
						<p className="font-semibold text-muted-foreground">
							Student
						</p>
					</div>
					<div className="flex flex-col items-center gap-4">
						<p className="text-4xl font-bold text-primary">20+</p>
						<p className="font-semibold text-muted-foreground">
							Courses
						</p>
					</div>
					<div className="flex flex-col items-center gap-4">
						<p className="text-4xl font-bold text-primary">10+</p>
						<p className="font-semibold text-muted-foreground">
							Experienced Mentors
						</p>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}

export default HomeSection;
