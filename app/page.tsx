import Navbar from "@/components/Navbar";
import HomeSection from "./_components/HomeSection";
import PopularCoursesSection from "./_components/PopularCoursesSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import FooterSection from "./_components/FooterSection";

export default function Home() {
	return (
		<main className="min-h-screen">
			<div className="mt-12">
				<Navbar />
				<HomeSection />
				<PopularCoursesSection />
				<TestimonialsSection />
				<FooterSection />
			</div>
		</main>
	);
}
