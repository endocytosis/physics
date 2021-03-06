import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Mechanics() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mechanics</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Mechanics Simulations</a>
        </h1>
        <p>Kinematics</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://stackblitz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by StackBlitz{' '}
          <img
            src="https://c.staticblitz.com/assets/favicon-7453cf0c12d349fb64b7aa2b69cc69c026f083a27f139f0839b1f4948bed6811.png"
            width="20"
            height="20"
          />
        </a>
      </footer>
    </div>
  );
}
