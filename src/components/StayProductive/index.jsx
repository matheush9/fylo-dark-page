import styles from "./stayproductive.module.scss";
import Image from "next/image";

export default function StayProductive() {
  return (
    <div className={styles.component}>
      <div className={styles.stayImage}>
        <img src="/images/illustration-stay-productive.png" alt="" />
      </div>

      <div className={styles.stayText}>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when acessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, familly and colleagues
          for live collaborations. No email attachments required.
        </p>

        <div className={styles.seeHow}>
          <div>
            <h4>See how Fylo works</h4>
            <div className={styles.wrapper}></div>
          </div>
          <div className={styles.arrow}>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
