import styles from "./topbar.module.scss";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className={styles.navbar}>
        <p>Features</p>
        <p>Team</p>
        <p>Sign In</p>
      </div>
    </div>
  );
}