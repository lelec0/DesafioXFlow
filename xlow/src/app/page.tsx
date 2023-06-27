"use client";

import { Cards } from "@/components/cards";
import { MiddleBar } from "@/components/middle-bar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MiddleBar />
      <Cards />
    </main>
  );
}
