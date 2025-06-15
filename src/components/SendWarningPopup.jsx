import { useState, useEffect } from 'react';
import '../styles/popup.css';

function SendWarningPopup({ open, onClose, onConfirm }) {
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (open) {
      setChecked(false);
      setShowError(false);
    }
  }, [open]);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!checked) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onConfirm();
  };

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box figma-popup-box" dir="rtl">
        <div className="popup-svg-icon">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="18" fill="#695EF7"/>
            <path d="M28 18V32" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="28" cy="38" r="2" fill="#fff"/>
          </svg>
        </div>
        <div className="popup-title figma-popup-title">
          تنبيه هام
        </div>
        <div className="popup-desc figma-popup-desc">
          يرجى العلم أن منصة "حمامه" غير مسؤولة عن محتوى الرسائل المرسلة عبر الخدمة.
          استخدام المنصة يجب أن يكون وفق السياسات والأنظمة المعمول بها في المملكة العربية السعودية وأي استخدام مخالف يعرض صاحبه للمساءلة القانونية
        </div>
        <label className="popup-terms-label figma-popup-terms-label">
          <input
            type="checkbox"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
          <span className="custom-checkbox figma-custom-checkbox"></span>
          <span>أوافق على السياسات والأحكام</span>
        </label>
        {showError && (
          <div className="popup-error figma-popup-error">
            يجب الموافقة على السياسات للمتابعة
          </div>
        )}
        <div className="popup-actions figma-popup-actions">
          <button className="popup-cancel figma-popup-cancel" onClick={onClose}>
            إلغاء
          </button>
          <button className="popup-confirm figma-popup-confirm" onClick={handleConfirm}>
            متابعة الإرسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendWarningPopup;
