import styles from "./items.module.scss";
import Image from "next/image";

export default function Items() {
  return (
    <div className={styles.component}>
      <div className={styles.items}>
        <div className={styles.item}>
          <div>
            <img src="/images/icon-access-anywhere.svg" alt="" />
          </div>
          <h3>Acess your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet, or computer to acess your
            account means your files follow you everywhere
          </p>
        </div>

        <div className={styles.item}>
          <div>
            <img src="/images/icon-security.svg" alt="" />
          </div>
          <h3>Security you can trust</h3>
          <p>
           2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div className={styles.item}>
          <div>
            <img src="/images/icon-collaboration.svg" alt="" />
          </div>
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
        </div>

        <div className={styles.item}>
          <div>
            <img src="/images/icon-any-file.svg" alt="" />
          </div>
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing hollidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
          </p>
        </div>
      </div>
    </div>
  );
}
