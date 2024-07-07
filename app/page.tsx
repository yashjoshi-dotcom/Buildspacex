import Navbar from "@/components/Navbar";
import HomeSection from "./_components/HomeSection";

export default function Home() {
	return (
		<main className="min-h-screen">
			<div className="mt-12 px-4 xl:px-0">
				<Navbar />
				<HomeSection />
			</div>
		</main>
	);
}
