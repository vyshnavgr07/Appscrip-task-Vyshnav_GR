import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/home/title/Title";

export default function Home() {
  return (
    <div className={styles.page}>
     <div className={styles.titleContainer}>
     <Title/>
     </div>
     </div>
  );
}
