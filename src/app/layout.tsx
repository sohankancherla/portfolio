import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	metadataBase: new URL("https://sohankancherla.com"),
	title: "Sohan Kancherla",
	description:
		"Hi, I'm Sohan Kancherla, I build fast, intuitive apps with a clean and thoughtful design.",
	keywords: ["Sohan Kancherla"],
	authors: [{ name: "Sohan Kancherla" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className="h-full antialiased font-sans"
		>
			<body className="min-h-full flex flex-col">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
