import Image from "next/image";

export default function Home() {
	return (
		<main className="p-8 w-3xl mx-auto space-y-16">
			<section className="mt-10">
				<Image
					src="/profile.jpg"
					alt="Sohan Kancherla"
					height={72}
					width={72}
					className="size-18 rounded-md object-cover"
				/>
				<div>
					<h1 className="header-1 mt-4">Sohan Kancherla</h1>
					<p className="text-base text-muted-foreground font-medium">
						Software Engineer
					</p>
				</div>
			</section>

			<section>
				<h2 className="header-2 mb-1">About</h2>
				<p className="text-base text-muted-foreground leading-relaxed">
					I'm a Founding Software Engineer at Penciled (YC W24). I build
					applications that prioritize user experience, performance, and
					thoughtful design.
				</p>
			</section>

			<section>
				<h2 className="header-2 mb-1">Projects</h2>
				<p className="text-base text-muted-foreground">Coming soon.</p>
			</section>
		</main>
	);
}
