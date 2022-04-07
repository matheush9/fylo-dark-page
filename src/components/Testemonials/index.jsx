import styles from "./testemonials.module.scss";
import Image from "next/image";

export default function Testemonials() {
  return (
    <div id="testemonials" className={styles.component}>
      <div className={styles.quotes}>
        <img src="/images/bg-quotes.png" alt="" />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.comment}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className={styles.container}>
            <div className={styles.profile}>
              <img src="/images/profile-1.jpg" alt="" />
            </div>

            <div className={styles.founder}>
              <p>Satish Patel</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className={styles.comment}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className={styles.container}>
            <div className={styles.profile}>
              <img src="/images/profile-2.jpg" alt="" />
            </div>

            <div className={styles.founder}>
              <p>Bruce McKenzie</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className={styles.comment}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className={styles.container}>
            <div className={styles.profile}>
              <img src="/images/profile-3.jpg" alt="" />
            </div>

            <div className={styles.founder}>
              <p>Iva Boyd</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
