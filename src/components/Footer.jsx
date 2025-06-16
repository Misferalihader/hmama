import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/assets/hmama-logo.svg" alt="Hmama Logo" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#">عن حمامة</a></li>
            <li><a href="#">الخدمات</a></li>
            <li><a href="#">تواصل معنا</a></li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="#" className="social-link">
            <img src="/assets/twitter-icon.svg" alt="Twitter" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/tiktok-icon.svg" alt="TikTok" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/youtube-icon.svg" alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 حمامه. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
