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
				<blockquote className={styles.text}>
					Front-end developer and avid reader.
				</blockquote>
			</section>
			<footer className={styles.footer}>
				<Link
					href="https://www.github.com"
					className={styles.link}
					target="_blank"
				>
					GitHub
				</Link>
				<Link
					href="https://www.frontendmentor.com"
					className={styles.link}
					target="_blank"
				>
					Frontend Mentor
				</Link>
				<Link
					href="https://www.linkedin.com"
					className={styles.link}
					target="_blank"
				>
					LinkedIn
				</Link>
				<Link
					href="https://www.x.com"
					className={styles.link}
					target="_blank"
				>
					Twitter
				</Link>
				<Link
					href="https://www.instagram.com"
					className={styles.link}
					target="_blank"
				>
					Instagram
				</Link>
			</footer>
		</main>
	);
}
