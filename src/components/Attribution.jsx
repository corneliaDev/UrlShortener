import styles from "./Attribution.module.css";

function Attribution() {
  return (
    <div className={styles.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="#">CMDev</a>.
    </div>
  );
}

export default Attribution;
