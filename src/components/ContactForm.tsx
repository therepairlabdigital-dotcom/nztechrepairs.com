'use client';
import React, { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';

const ACCESS_KEY = 'c050f5b941ba45cd9fc7ab2ea0677215';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    const data = new FormData(form);
    data.set('access_key', ACCESS_KEY);
    data.set('subject', 'New enquiry from NZ Tech Repairs website');

    try {
      const res = await fetch('https://splitforms.com/api/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <h4>Message sent!</h4>
        <p>Thanks — we&rsquo;ll be in touch shortly. Need us urgently? Call 027-827-0002.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.inputGroup}>
        <label htmlFor="cf-name" className={styles.srOnly}>Your name</label>
        <input id="cf-name" name="name" type="text" placeholder="Your Name" required className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="cf-email" className={styles.srOnly}>Your email</label>
        <input id="cf-email" name="email" type="email" placeholder="Your Email" required className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="cf-message" className={styles.srOnly}>Your message</label>
        <textarea id="cf-message" name="message" rows={5} placeholder="How can we help?" required className={styles.input}></textarea>
      </div>

      <button type="submit" className={`btn ${styles.submitBtn}`} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className={styles.formError} role="alert">
          Something went wrong. Please try again, or call us on 027-827-0002.
        </p>
      )}

      <p className={styles.terms}>
        By submitting you agree to our <a href="#">Terms &amp; Conditions</a>.
      </p>
    </form>
  );
}
