import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Application() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyRCuNw4w5gqJnKFD8N1wVWjTyZPjSJ8ywZ2j1uqD40P_Bq6AiG65PIdHCD4cg_n6A8-Q/exec',
      {
        method: 'POST',
        body: new URLSearchParams(data),
      }
    );

    if (response.ok) {
      setStatus('Submission successful. The Obediancer has received your truth.');
      e.target.reset();
    } else {
      setStatus('Submission failed. Try again, or kneel harder.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tell The Crimson Obediancer About You</title>
        <meta name="description" content="Reveal your desires, limits, and devotion." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tell The Crimson Obediancer About Your Likes, Dislikes and Fantasies</h1>

        <form
  onSubmit={handleSubmit}
  style={{
    maxWidth: '750px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#1a0000',
    borderRadius: '8px',
    boxShadow: '0 0 12px #660000',
    color: '#ffcccc'
  }}
>
          <label>Preferred Form You Wish To Be Addressed <span>*</span><br />
            <input type="text" name="PreferredTitle" required placeholder='e.g., "sub", "slave"' />
          </label><br /><br />

          <label>Email <span>*</span><br />
            <input type="email" name="Email" required />
          </label><br /><br />

          <label>Preferred Delivery Method <span>*</span><br />
            <label><input type="radio" name="Delivery" value="Email" required /> Email</label><br />
            <label><input type="radio" name="Delivery" value="Text" /> Text</label><br />
            <label><input type="radio" name="Delivery" value="Instant Messaging" /> Instant Messaging</label><br />
            <label><input type="radio" name="Delivery" value="Other" /> Other</label>
          </label><br /><br />

          <label>Describe What You Want Done To You <span>*</span><br />
            <textarea name="Desires" rows="4" required placeholder="Detail your fantasies, needs and desires." />
          </label><br /><br />

          <label>What Emotional Themes Intensify Your Experience?<br />
            <label><input type="checkbox" name="Themes" value="Devotion" /> Devotion</label><br />
            <label><input type="checkbox" name="Themes" value="Shame" /> Shame</label><br />
            <label><input type="checkbox" name="Themes" value="Praise" /> Praise</label><br />
            <label><input type="checkbox" name="Themes" value="Fear" /> Fear</label><br />
            <label><input type="checkbox" name="Themes" value="Humiliation" /> Humiliation</label><br />
            <label><input type="checkbox" name="Themes" value="Pain" /> Pain</label>
          </label><br /><br />

          <label>Are There Roles Or Dynamics You Wish To Explore?<br />
            <label><input type="checkbox" name="Dynamics" value="Strict" /> Strict</label><br />
            <label><input type="checkbox" name="Dynamics" value="Demanding" /> Demanding</label><br />
            <label><input type="checkbox" name="Dynamics" value="Ritualistic" /> Ritualistic</label><br />
            <label><input type="checkbox" name="Dynamics" value="Playful" /> Playful</label><br />
            <label><input type="checkbox" name="Dynamics" value="Romantic" /> Romantic</label><br />
            <label><input type="checkbox" name="Dynamics" value="Naughty" /> Naughty</label>
          </label><br /><br />

          <label>Hard Limits (lines not to cross) <span>*</span><br />
            <textarea name="Limits" rows="3" required placeholder="State clearly what's unacceptable." />
          </label><br /><br />

          <label>Triggers Or Sensitivities The Crimson Obediancer Needs To Be Aware Of <span>*</span><br />
            <textarea name="Triggers" rows="3" required />
          </label><br /><br />

          <label>Safe Word Or Signal <span>*</span><br />
            <input type="text" name="SafeWord" required />
          </label><br /><br />

          <label>Intensity Level Desired <span>*</span><br />
            <label><input type="radio" name="Intensity" value="Light" required /> Light</label><br />
            <label><input type="radio" name="Intensity" value="Moderate" /> Moderate</label><br />
            <label><input type="radio" name="Intensity" value="Intense" /> Intense</label><br />
            <label><input type="radio" name="Intensity" value="Unrelenting" /> Unrelenting</label>
          </label><br /><br />

          <label>How Do You Feel About Aftercare?<br />
            <select name="Aftercare">
              <option value="">-- Select --</option>
              <option value="Essential">Essential</option>
              <option value="Optional">Optional</option>
              <option value="None needed">None needed</option>
            </select>
          </label><br /><br />

          <label>What Kind Of Aftercare Do You Prefer?<br />
            <textarea name="PreferredAftercare" rows="3" placeholder="Affirmation, Silence, Guidance, Release..." />
          </label><br /><br />

          <label>Do You Currently Own A Spanking Or Impact Device? <span>*</span><br />
            <select name="DeviceOwnership" required>
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="I'm considering">I'm considering purchasing one</option>
            </select>
          </label><br /><br />

          <label>Is Your Spanking Machine Capable Of Being Remotely Operated?<br />
            <select name="RemoteCapable">
              <option value="">-- Select --</option>
              <option value="Yes – I have remote access configured">Yes – I have remote access configured</option>
              <option value="No – not compatible">No – not compatible</option>
              <option value="Unsure">Unsure</option>
            </select>
          </label><br /><br />

          <label>Would You Consent To Remote Activation Under Negotiated Circumstances?<br />
            <select name="RemoteConsent">
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="Maybe">Maybe</option>
              <option value="No">No</option>
            </select>
          </label><br /><br />

          <button type="submit" style={{
            backgroundColor: '#990000',
            color: '#fff',
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            Submit to the Crimson Obediancer
          </button>

          <p style={{ marginTop: '1rem' }}>{status}</p>
        </form>
      </main>
    </div>
  );
}
