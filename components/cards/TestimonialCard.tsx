import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

type Props = {
	testimonialHeading: string;
	personName: string;
	personTestimonial: string;
	personImg: string;
	personJobRole: string;
};

function TestimonialCard({
	testimonialHeading,
	personName,
	personImg,
	personJobRole,
	personTestimonial,
}: Props) {
	return (
		<CarouselItem className="basis-full">
			<div className="space-y-4">
				<CardTitle className="capitalize">
					{testimonialHeading}
				</CardTitle>
				<p>{personTestimonial}</p>
				<div className="flex gap-4">
					<div className="aspect-square w-12 overflow-hidden rounded-full">
						<img src={personImg} alt="avatar" />
					</div>
					<div className="text-sm">
						<p className="font-semibold capitalize">{personName}</p>
						<p className="capitalize text-muted-foreground">
							{personJobRole}
						</p>
					</div>
				</div>
			</div>
		</CarouselItem>
	);
}

export default TestimonialCard;
