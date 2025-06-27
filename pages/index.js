
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://northerstar-online.com/wp-json/wp/v2/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Crimson Obediancer</title>
        <meta name="description" content="A dark, seductive WordPress-powered site using React and a crimson theme." />
      </Head>

      <nav className={styles.navbar}>
        <a className={styles.navlink} href="/">Home</a>
        <a className={styles.navlink} href="/about">About</a>
      </nav>

      <main className={styles.main}>
  <h1 className={styles.title}>Enter The Realm Of Obedience</h1>

  <p style={{ textAlign: 'center', color: '#ffcccc' }}>
    This is not a place for the curious.<br /><br />
    It is a sanctuary for the surrendered.<br /><br />
    Enter a sanctum of silence, strength and scarlet surrender.<br /><br />

    Step forward, if you are called.<br /><br />
      Kneel, if you are chosen.<br /><br />
    The Crimson Obediancer awaits not worship, but obedience.
  </p></p>

  <div style={{ textAlign: 'center' }}>
     <p><a href="/about" className={styles.navlink}>Learn</a> &nbsp;&nbsp;
    <a href="/application" className={styles.navlink}>Submit</a> &nbsp;&nbsp;
    <a href="/subscribe" className={styles.navlink}>Commit</a>
      </p>
</main>

    </div>
  );
}
