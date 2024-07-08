import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLink from "./Navlink";

const navLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Courses",
		path: "/#courses",
	},
	{
		title: "Testimonial",
		path: "/#testimonial",
	},
	{
		title: "Mentor",
		path: "/#mentor",
	},
];

function Navbar() {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center bg-white px-4 shadow xl:px-0">
			{/* Small screen */}
			<div className="w-full md:hidden">
				<div className="flex w-full shrink items-center justify-between">
					<h1 className="text-2xl font-semibold">
						Brain<span className="text-primary">Fuzz</span>
					</h1>
					<Sheet>
						<SheetTrigger>
							<Menu />
						</SheetTrigger>
						<SheetContent side="top" className="h-full">
							<SheetDescription className="flex h-full w-full flex-col items-center justify-center">
								<nav className="flex grow items-center">
									<ul className="flex flex-col gap-6 text-center">
										{navLinks.map((link, index) => (
											<li key={index}>
												<NavLink
													href={link.path}
													title={link.title}
												/>
											</li>
										))}
									</ul>
								</nav>
								<div className="flex shrink gap-4">
									<Button size="sm" variant="outline">
										Sign in
									</Button>
									<Button size="sm">Sign up</Button>
								</div>
							</SheetDescription>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			{/* Large Screen */}
			<div className="hidden w-full max-w-6xl shrink items-center justify-between py-6 md:flex">
				<h1 className="text-2xl font-semibold">
					Brain<span className="text-primary">Fuzz</span>
				</h1>
				<nav>
					<ul className="flex gap-6">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
									id={link.id}
								/>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex shrink gap-4">
					<Button size="sm" variant="outline">
						Sign in
					</Button>
					<Button size="sm">Sign up</Button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
