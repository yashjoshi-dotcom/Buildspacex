const FooterSection = () => {
	return (
		<footer className="flex flex-col justify-center gap-16 bg-primary p-16 text-primary-foreground md:flex-row">
			<div className="max-w-96 space-y-4">
				<h3 className="text-xl font-semibold">BrainFuzz</h3>
				<p>
					BrainFuzz is an online learning platform that has been
					operating since 2024 until now.
				</p>
			</div>
			<div className="flex flex-col items-start justify-normal gap-12 md:flex-row">
				<div className="space-y-4">
					<p className="font-semibold">Course</p>
					<ul className="space-y-2">
						<li>React</li>
						<li>NextJS</li>
						<li>Ethical Hacking</li>
						<li>Docker and Kubernetes</li>
					</ul>
				</div>
				<div className="space-y-4">
					<p className="font-semibold">Menu</p>
					<ul className="space-y-2">
						<li>Home</li>
						<li>Courses</li>
						<li>Testimonials</li>
						<li>Mentor</li>
					</ul>
				</div>
				<div className="space-y-4">
					<p className="font-semibold">About</p>
					<ul className="space-y-2">
						<li>Contact us</li>
						<li>Privacy policy</li>
						<li>Terms & conditions</li>
						<li>FAQ</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
