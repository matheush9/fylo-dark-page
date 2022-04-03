import styles from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className={styles.intro}>
        <img src="/images/illustration-intro.png" alt="" />
      </div>

      <div className={styles.allYourText}>
        <h1>All your files in one secure location, acessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Acess them wherever you need, share and collaborate with friends family, and co-workers</p>
        <button>Get Started</button>
      </div>
      

    </div>
  );
}