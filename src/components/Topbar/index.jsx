import styles from "./topbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className={styles.navbar}>
        <p>
          <Link href="#features">
          <a>Features</a>
          </Link>
        </p>
        <p>
        <Link href="#testemonials">
          <a>Team</a>
          </Link>
        </p>
        <p>
        <Link href="#earlyacess">
          <a>Sign In</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
