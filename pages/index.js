
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
        <title>Crimson WP Blog</title>
        <meta name="description" content="A dark, seductive WordPress-powered site using React and a crimson theme." />
      </Head>

      <nav className={styles.navbar}>
        <a className={styles.navlink} href="/">Home</a>
        <a className={styles.navlink} href="/about">About</a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Crimson WP Blog</h1>
        {posts.length > 0 ? posts.map(post => (
          <div key={post.id} className={styles.post}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        )) : <p>Loading or no posts found...</p>}
      </main>
    </div>
  );
}
