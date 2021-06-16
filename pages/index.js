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
          Welcome to <a href="#">Physics Equations</a>
        </h1>


        <div className={styles.grid}>
          <a href="/mechanics" className={styles.card}>
            <h3>Mechanics</h3>
            <p>
              Kinematics, Newton's Laws of Motion, Work, Rotational Motion,
              Oscillations
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Electricity and Magnetism</h3>
            <p>Electrostatics, Circuits, Fields, Electromagnetism</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Modern</h3>
            <p>Atomic Theory, Single and Double Slit Diffraction</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Optics</h3>
            <p>Mirrors, Lenses, Thin-Film Interference</p>
          </a>
        </div>



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
