import { useState } from 'react';
import '../styles/faq.css';

function Faq() {
  const faqs = [
    { question: 'ما هي خدمة حمامة؟', answer: 'هذا نص تجريبي هذا نص تجريبي.' },
    { question: 'كيف يمكنني إرسال رسالة؟', answer: 'هذا نص تجريبي هذا نص تجريبي.' },
    { question: 'هل يمكنني إرسال رسالة مجهولة؟', answer: 'هذا نص تجريبي هذا نص تجريبي.' },
    { question: 'ما هي تكلفة الخدمة؟', answer: 'هذا نص تجريبي هذا نص تجريبي.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">الأسئلة الشائعة</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-header">
              <h3 className="faq-question">{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
