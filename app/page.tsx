import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
			<Navbar />
			<p>Hello World</p>
			<Button size="lg">Hey</Button>
		</main>
	);
}
