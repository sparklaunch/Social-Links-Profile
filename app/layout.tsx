import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={inter.className}>
			<body>{children}</body>
		</html>
	);
}
