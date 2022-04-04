import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.firstC}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <img src="/images/logo.svg" alt="" />
            </div>
          </div>

          <div className={styles.location}>
            <div className={styles.locationIcon}>
              <img src="/images/icon-location.svg" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus impedit ea aperiam illo, velit odit!
            </p>
          </div>
        </div>
        <div className={styles.contato}>
          <div>
            <div className={styles.phoneIcon}>
              <img src="/images/icon-phone.svg" alt="" />
            </div>
            <p>+1-543-123-4567</p>
          </div>

          <div>
            <div className={styles.emailIcon}>
              <img src="/images/icon-email.svg" alt="" />
            </div>
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className={styles.aboutus}>
          <div>
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
