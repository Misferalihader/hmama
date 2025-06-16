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

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className={`hmama-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-content">
        <img src="/assets/hmama-logo.svg" alt="Hmama Logo" className="hmama-logo" />
        <div className="header-spacer" />
        {/* زر البرقر منيو يظهر فقط إذا القائمة الجانبية مغلقة */}
        {!menuOpen && (
          <button className="burger-menu" aria-label="فتح القائمة" onClick={handleMenuToggle}>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </button>
        )}
      </div>
      {/* القائمة الجانبية للهامبرقر منيو */}
      <div className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`} onClick={handleCloseMenu}></div>
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="close-menu" onClick={handleCloseMenu}>&times;</button>
        {/* لا توجد روابط */}
      </nav>
    </header>
  );
}

export default Header;

