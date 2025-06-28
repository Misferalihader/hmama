import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MessageForm from './components/MessageForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [headerHeight, setHeaderHeight] = useState(64); // قيمة افتراضية

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector('.hmama-header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: `${headerHeight}px` }} /> {/* spacer لتفادي التراكب */}
      <Hero />
      <MessageForm />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
