import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Header from "@/components/header/Header";
import Trending from "./trending/page";

export default function Home() {
  return (
    <div>
      <Trending />
    </div>
  );
}
