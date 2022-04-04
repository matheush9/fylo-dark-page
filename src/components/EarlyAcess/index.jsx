import styles from "./earlyacess.module.scss";

export default function EarlyAcess() {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <h2>Get early acess today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you
        </p>
        <div className={styles.form}>
          <input placeholder="email@example.com" type="email" name="" id="" />
          <button>Get Started For Free</button>
        </div>
      </div>
    </div>
  );
}
