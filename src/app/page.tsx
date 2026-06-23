import Github from "@thesvg/react/github";
import Linkedin from "@thesvg/react/linkedin";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
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
			<footer className="max-w-3xl mx-auto mt-auto flex p-8 justify-between items-center w-full">
				<div className="flex gap-4">
					<Link
						href="https://github.com/sohankancherla"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="size-4.5 text-muted-foreground/80 hover:text-primary [&_path]:fill-current" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/sohan-kancherla/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="size-4.5 text-muted-foreground/80 hover:text-primary [&_path]:fill-current" />
					</Link>
				</div>
				<p className="text-sm text-muted-foreground/60">
					© 2026 Sohan Kancherla. All rights reserved.
				</p>
			</footer>
		</>
	);
}
