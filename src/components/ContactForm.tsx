'use client';
import React, { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';

const ACCESS_KEY = 'c050f5b941ba45cd9fc7ab2ea0677215';

const DEVICES = ['iPhone', 'iPad', 'MacBook', 'Samsung / Android phone', 'Laptop / PC', 'Apple Watch', 'TV', 'Other'];
const SERVICES = ['Screen repair', 'Battery replacement', 'Water damage', 'Charging issue', 'Data recovery', 'Software / unlocking', 'Free diagnostics', 'Other'];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    const data = new FormData(form);
    data.set('access_key', ACCESS_KEY);
    data.set('subject', 'New repair enquiry from NZ Tech Repairs website');

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
        <h4>Thanks — request received!</h4>
        <p>We&rsquo;ll be in touch shortly with a quote. Need us urgently? Call 027-827-0002.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-name">Name <span className={styles.req}>*</span></label>
          <input id="cf-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="027 123 4567" autoComplete="tel" className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-email">Email <span className={styles.req}>*</span></label>
        <input id="cf-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required className={styles.input} />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-device">Device <span className={styles.req}>*</span></label>
          <select id="cf-device" name="device" defaultValue="" required className={`${styles.input} ${styles.select}`}>
            <option value="" disabled>Select device…</option>
            {DEVICES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-service">Service needed</label>
          <select id="cf-service" name="service" defaultValue="" className={`${styles.input} ${styles.select}`}>
            <option value="" disabled>Select service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message">How can we help? <span className={styles.req}>*</span></label>
        <textarea id="cf-message" name="message" rows={4} placeholder="Tell us what's wrong with your device, the model, and anything else useful…" required className={styles.input}></textarea>
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
        By submitting you agree to our <a href="#">Terms &amp; Conditions</a>. We&rsquo;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
