
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

      <form onSubmit={handleSubmit} style={{ maxWidth: '750px', margin: '0 auto', color: '#ffcccc' }}>
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
</form>

    </Layout>
  );
}
