
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About the Crimson Obediancer</title>
        <meta name="description" content="The story and presence of the Crimson Obediancer." />
      </Head>

      <nav className={styles.navbar}>
        <a className={styles.navlink} href="/">Home</a>
        <a className={styles.navlink} href="/about">About</a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>The Crimson Obediancer</h1>
        <p style={{ lineHeight: '1.7em', marginTop: '1.5rem', color: '#ffcccc' }}>
          Cloaked in shadows, bound by ancient rites, the Crimson Obediancer is neither ruler nor rebel—
          but the line between the two.<br /><br />
          Born of silence and forged through submission, his power isn't declared... it's obeyed.
          His robe glows with the memory of devotion; his presence bends the will of those who kneel.
          Some say he's a myth. Others know he watches.<br /><br />
          This page is dedicated to his design, his story, and the forces that gave him shape.
        </p>
      </main>
    </div>
  );
}
