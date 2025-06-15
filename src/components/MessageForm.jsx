import { useState, useEffect } from 'react';
import '../styles/form.css';
import SendWarningPopup from './SendWarningPopup';

function MessageForm() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('اكتب محتوى رسالتك هنا..');
  const [isTyping, setIsTyping] = useState(false);

  const typingTexts = ['إمدح ..', 'عاتب..', 'إنصح..', 'طقطق ..', 'بس لاتجيب العيد'];
  let typingIndex = 0;

  useEffect(() => {
    const typeEffect = () => {
      setIsTyping(true);
      let charIndex = 0;
      const interval = setInterval(() => {
        setPlaceholderText((prev) => typingTexts[typingIndex].slice(0, charIndex));
        charIndex++;
        if (charIndex > typingTexts[typingIndex].length) {
          clearInterval(interval);
          setTimeout(() => {
            typingIndex = (typingIndex + 1) % typingTexts.length;
            typeEffect();
          }, 500); // تقليل وقت الانتظار بين النصوص
        }
      }, 100); // تقليل وقت الكتابة لكل حرف
    };

    typeEffect();

    return () => clearInterval();
  }, []);

  // تشغيل أول ثانية واحدة فقط من صوت الحمامة
  const playDoveSound = () => {
    const audio = new Audio('/assets/dove-sound.mp3');
    audio.play();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupOpen(true);
  };

  const handleClosePopup = () => setPopupOpen(false);
  const handleConfirmSend = () => {
    setPopupOpen(false);
    playDoveSound();
    // هنا يمكنك تنفيذ منطق الإرسال الفعلي لاحقاً
  };

  return (
    <section className="message-form-section">
      <form className="message-form" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="message" className="form-label">محتوى الرسالة</label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder={isTyping ? placeholderText : 'اكتب محتوى رسالتك هنا..'}
          rows={5}
          maxLength={500}
          required
          dir="rtl"
          style={{textAlign: 'right'}}
          onFocus={() => setIsTyping(false)}
        ></textarea>

        <label htmlFor="recipient" className="form-label">رقم جوال المستلم (واتساب)</label>
        <input
          id="recipient"
          className="form-input"
          type="tel"
          placeholder="مثال: 05XXXXXXXX"
          pattern="05[0-9]{8}"
          required
          dir="rtl"
          style={{textAlign: 'right'}}
        />

        <button type="submit" className="form-submit">
          ارسل حمامتك بـ 99 هلله
        </button>
        <div className="form-note">يشمل ضريبة القيمة المضافة</div>
      </form>
      <SendWarningPopup open={popupOpen} onClose={handleClosePopup} onConfirm={handleConfirmSend} />
    </section>
  );
}

export default MessageForm;
