"use client"

import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Accounts() {
	const router = useRouter()
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<h1>Accounts</h1>
			</div>
			<Link href="/">Back to Home</Link>
			{/* <button type="button" onClick={() => router.push("/name/address")}>
				Back to Home
			</button> */}
		</main>
	)
}
