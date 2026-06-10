import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <span className="eyebrow">Customer Reviews</span>

        <div className={styles.card}>
          <div className={styles.quoteMark}>&ldquo;</div>
          <div className={styles.stars} role="img" aria-label="Rated 5 out of 5 stars">★★★★★</div>
          <p className={styles.quoteText}>
            I recently brought my iPhone to NZ Tech Repairs, and I couldn&apos;t be happier with
            the service I received. The staff were incredibly friendly and knowledgeable. They
            managed to fix my phone in just 30 minutes, as promised, and it works perfectly now.
            The whole experience was smooth and professional. Their satisfaction warranty gave me
            extra peace of mind. I highly recommend NZ Tech Repairs to anyone in need of tech
            repairs!
          </p>
          <div className={styles.author}>
            <Image src="/images/original/testimonial-jaime.png" alt="Jaime Toroa" width={56} height={56} className={styles.avatar} />
            <div>
              <strong>Jaime Toroa</strong>
              <span>Verified Customer · 5/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
