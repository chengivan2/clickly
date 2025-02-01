import styles from "./page.module.css";
import HeroSection from "./homecomponents/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
