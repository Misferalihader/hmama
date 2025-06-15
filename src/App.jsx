import Header from './components/Header';
import Hero from './components/Hero';
import MessageForm from './components/MessageForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MessageForm />
      <Faq />
      <Footer />
      {/* محتوى إضافي لتطويل الصفحة واختبار ثبات الهيدر */}
      <div style={{height: '1800px'}}></div>
    </>
  );
}

export default App;

