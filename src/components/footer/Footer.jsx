import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div>©2023 Mamayo. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook Account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
