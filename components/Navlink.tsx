"use client";
import Link from "next/link";

const NavLink = ({ href, title }: { href: string; title: string }) => {
	return (
		<>
			<Link
				href={href}
				className="font-semibold hover:underline hover:decoration-primary hover:underline-offset-4"
			>
				{title}
			</Link>
		</>
	);
};

export default NavLink;
