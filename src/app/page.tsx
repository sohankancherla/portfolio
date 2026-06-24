import Github from "@thesvg/react/github";
import Linkedin from "@thesvg/react/linkedin";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="p-6 sm:p-8 sm:w-3xl mx-auto space-y-16">
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
						<p className="text-base text-accent-foreground font-medium">
							Software Engineer
						</p>
					</div>
				</section>

				<section>
					<h2 className="header-2 mb-1">About</h2>
					<p className="text-base text-accent-foreground leading-relaxed">
						I'm a Founding Software Engineer at{" "}
						<Link
							href="https://penciled.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline font-medium"
						>
							Penciled (YC W24)
						</Link>
						. I love building apps and think deeply about performance, user
						experience, and tasteful design.
					</p>
				</section>

				<section>
					<h2 className="header-2 mb-1">Projects</h2>
					<p className="text-base text-accent-foreground">Coming soon.</p>
				</section>
			</main>

			<footer className="max-w-3xl mx-auto mt-auto flex flex-col sm:flex-row p-6 sm:p-8 justify-between sm:items-center w-full gap-4">
				<div className="flex gap-4">
					<Link
						href="https://github.com/sohankancherla"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="size-4.5 text-muted-foreground hover:text-primary [&_path]:fill-current" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/sohan-kancherla/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="size-4.5 text-muted-foreground hover:text-primary [&_path]:fill-current" />
					</Link>
				</div>
				<p className="text-sm text-muted-foreground/80">
					&copy; 2026 Sohan Kancherla. All rights reserved.
				</p>
			</footer>
		</>
	);
}
