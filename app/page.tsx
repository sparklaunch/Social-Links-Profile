import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import avatar from "./assets/images/avatar.jpg";

export default function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<Image
					src={avatar}
					alt="Jessica Randall"
					className={styles.avatar}
				/>
				<h1 className={styles.name}>Jessica Randall</h1>
				<p className={styles.location}>London, United Kingdom</p>
			</header>
			<section>
				<h2 className={styles.text}>
					&quot;Front-end developer and avid reader.&quot;
				</h2>
			</section>
			<footer className={styles.footer}>
				<Link href="https://www.github.com" className={styles.link}>
					GitHub
				</Link>
				<Link
					href="https://www.frontendmentor.com"
					className={styles.link}
				>
					Frontend Mentor
				</Link>
				<Link href="https://www.linkedin.com" className={styles.link}>
					LinkedIn
				</Link>
				<Link href="https://www.x.com" className={styles.link}>
					Twitter
				</Link>
				<Link href="https://www.instagram.com" className={styles.link}>
					Instagram
				</Link>
			</footer>
		</main>
	);
}
