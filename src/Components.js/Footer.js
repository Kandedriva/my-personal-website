import React from 'react';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Kande. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:you@example.com">Email</a>
          <a href="https://www.instagram.com/thestories_teller?igsh=MTJwOWt4dmRoMnVzeg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@the.stories.telle0?_t=ZP-8xoux90OYZy&_r=1" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.facebook.com/share/16X8B2XbW2/?mibextid=wwXIfr">facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
