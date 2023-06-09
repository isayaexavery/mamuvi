"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
//import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Movies",
    url: "/movies",
  },
  {
    id: 2,
    title: "Trending",
    url: "/trending",
  },
  {
    id: 3,
    title: "TV Series",
    url: "/series",
  },
  {
    id: 4,
    title: "Search",
    url: "/search",
  },
];

const Navbar = () => {
  // const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Mamuvi
      </Link>
      <div className={styles.links}>
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
