import React from 'react';

/**
 * Near-black canvas, fine fading grid, warm bloom and a vignette.
 * Paint-only — nothing here downloads an image, so it never costs LCP.
 */
export default function HeroBackdrop() {
  return (
    <div className="hero-canvas" aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div className="hero-grid" style={{ position: 'absolute', inset: 0 }} />
      <div className="hero-bloom" style={{ position: 'absolute', inset: 0 }} />
      <div className="hero-vignette" style={{ position: 'absolute', inset: 0 }} />
    </div>
  );
}
