import type { Metadata } from "next";

import "./globals.css";

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
		<html lang="en" className="h-full antialiased font-sans">
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
