import { useState, useEffect } from 'react';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ منع التمرير عند فتح القائمة الجانبية
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className={`hmama-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-content">
        <img src="./assets/hmama-logo.svg" alt="Hmama Logo" className="hmama-logo" />
        <div className="header-spacer" />
        {!menuOpen && (
          <button className="burger-menu" aria-label="فتح القائمة" onClick={handleMenuToggle}>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </button>
        )}
      </div>

      {menuOpen && <div className="mobile-menu-overlay open" onClick={handleCloseMenu}></div>}
      {menuOpen && (
        <nav className="mobile-menu open">
          <button className="close-menu" onClick={handleCloseMenu}>&times;</button>
          {/* يمكنك إضافة روابط هنا لاحقًا */}
        </nav>
      )}
    </header>
  );
}

export default Header;
