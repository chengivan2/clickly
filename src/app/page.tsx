import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>

        <h2>Welcome to Clickly</h2>
        <div className="auth-links">
          <Link href="./sign-up">Sign Up</Link>
        </div>

      </main>
  );
}
