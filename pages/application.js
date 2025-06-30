import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout'; // 👈 NEW

export default function Application() {
  const [status, setStatus] = useState('');

  // ...rest of your handleSubmit and form code

  return (
    <Layout>
      <Head>
        <title>Tell The Crimson Obediancer About You</title>
        <meta name="description" content="Reveal your desires, limits, and devotion." />
      </Head>

      {/* your <form> content here */}
    </Layout>
  );
}
.whisper {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: rgba(26, 0, 0, 0.9);
  color: #ffcccc;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 12px #660000;
  font-style: italic;
  font-size: 1rem;
  z-index: 999;
  animation: fadein 2s ease-in-out;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
