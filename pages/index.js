import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physics Equations and Simulations</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Physics Simulations</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://stackblitz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by StackBlitz &#128498;
        </a>
      </footer>
    </div>
  );
}
