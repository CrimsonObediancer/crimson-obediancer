import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Application() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://script.google.com/macros/s/AKfycbyRCuNw4w5gqJnKFD8N1wVWjTyZPjSJ8ywZ2j1uqD40P_Bq6AiG65PIdHCD4cg_n6A8-Q/exec", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setStatus("Submission successful. The Obediancer has received your truth.");
      e.target.reset();
    } else {
      setStatus("Submission failed. Try again, or kneel harder.");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Tell The Crimson Obediancer About You</title>
        <meta name="description" content="Reveal your desires, limits, and devotion." />
      </Head>

      <form onSubmit={handleSubmit} style={{ maxWidth: '750px', margin: '0 auto', color: '#ffcccc' }}>
        <h1 style={{ textAlign: 'center', color: '#990000' }}>Crimson Submission Form</h1>

        <label>
          Name:
          <input type="text" name="Name" required />
        </label><br /><br />

        <label>
          Preferred Name:
          <input type="text" name="PreferredName" required />
        </label><br /><br />

        <label>
          Email:
          <input type="email" name="Email" required />
        </label><br /><br />

        <label>
          What does domination mean to you?
          <textarea name="Meaning" required />
        </label><br /><br />

        <label>
          Desires:
          <textarea name="Desires" required />
        </label><br /><br />

        <label>
          Limits:
          <textarea name="Limits" required />
        </label><br /><br />

        <label>
          Comfort Level:
          <select name="Comfort" required>
            <option value="">Select</option>
            <option value="Light">Light</option>
            <option value="Moderate">Moderate</option>
            <option value="Intense">Intense</option>
          </select>
        </label><br /><br />

        <label>
          Device Ownership:
          <select name="DeviceOwnership" required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label><br /><br />

        <label>
          Other Notes:
          <textarea name="Other" />
        </label><br /><br />

        <button type="submit">Submit to the Obediancer</button>
        <p>{status}</p>
      </form>
    </Layout>
  );
}
