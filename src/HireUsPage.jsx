import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import gradient from "./assets/gradient.svg";
import Now from "./assets/Now.svg";
import './App.css';
import van4 from './assets/Van_Mockup_4.png'

import Header from './components/Header';
import emailjs from '@emailjs/browser';
import Reveal from './components/Reveal';
import Footer from './components/Footer';

function HireUsPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    position: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    setErrors(prev => ({ ...prev, [name]: '' }));
    
    if (type === 'file') {
      setForm(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = 'الرجاء إدخال الاسم واللقب';
    } else if (form.name.trim().length < 3) {
      newErrors.name = 'الاسم قصير جدًا';
    }
    
    // Phone validation - Algerian phone number format
    const phoneRegex = /^(0)(5|6|7)[0-9]{8}$/;
    if (!form.phone) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف';
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = 'رقم هاتف غير صالح';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }
    
    // Position validation
    if (!form.position) {
      newErrors.position = 'الرجاء اختيار المنصب';
    }
    
    // Experience validation
    if (!form.experience.trim()) {
      newErrors.experience = 'الرجاء إدخال تفاصيل الخبرة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('يرجى تصحيح الأخطاء في النموذج');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      
      const templateParams = {
        name: form.name,
        phone: form.phone,
        email: form.email,
        position: form.position,
        experience: form.experience,
        message: form.message || 'لا يوجد',
      };

      await emailjs.send(
        'service_w2rjkio',
        'template_m4je6dq',
        templateParams,
        'u78EYyDgHj3kkBcVv'
      );

      toast.success('تم إرسال طلبك بنجاح، سنتصل بك قريبًا');
      
      // Reset form
      setForm({
        name: '',
        phone: '',
        email: '',
        experience: '',
        position: '',
        cv: null,
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('حدث خطأ أثناء إرسال النموذج، يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            fontFamily: 'Cairo, sans-serif',
            direction: 'rtl',
            background: '#fff',
            color: '#333',
            border: '1px solid #ddd',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#0066FF',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#f44336',
              secondary: '#fff',
            },
          },
        }}
      />
      <Header />
      <main>
        <section id='Recruitment' className="landing-page min-h-screen w-full flex items-center pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
              <Reveal style={"flex-[70%]"}>
                <h1 className="font-extrabold text-5xl md:text-7xl lg:text-9xl text-white leading-tight md:leading-tight text-center md:text-right">
                  <span className='text-blue'> انضم</span> إلينا  <br />
                  <div className="flex gap-4 md:gap-10 items-center justify-left md:justify-left mt-4"> 
                    ألآن ! 
                    <img className='w-24 md:w-42 inline' src={Now} alt="الآن" /> 
                  </div>
                </h1>
              </Reveal>
              <Reveal delay={0.5} style={"flex-[40%]"}>
            <img className='w-full  mt-8' src={van4} alt="" />
              </Reveal>
               
            </div>

           <form onSubmit={handleSubmit} className="bg-white w-full max-w-[700px] p-4 sm:p-6 md:p-8 rounded-xl shadow-xl mx-auto mt-4 sm:mt-8 text-right" dir="rtl">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-500 text-center">طلب توظيف</h2>

        {/* الاسم واللقب */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">الاسم واللقب <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="أدخل اسمك الكامل" 
            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} 
            required 
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* رقم الهاتف */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">رقم الهاتف <span className="text-red-500">*</span></label>
          <input 
            type="tel" 
            name="phone" 
            value={form.phone} 
            onChange={handleChange} 
            placeholder="05xxxxxxxx" 
            className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} 
            required 
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* البريد الإلكتروني */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">البريد الإلكتروني <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="أدخل بريدك الإلكتروني" 
            className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} 
            required 
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* المنصب المطلوب */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">المنصب المطلوب <span className="text-red-500">*</span></label>
          <select 
            name="position" 
            value={form.position} 
            onChange={handleChange} 
            className={`w-full border ${errors.position ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          >
            <option value="">اختر المنصب</option>
            <option value="عامل نقل">عامل نقل</option>
            <option value="منظم وترتيب">منظم وترتيب</option>
            <option value="سائق">سائق</option>
            <option value="أخرى">أخرى</option>
          </select>
          {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
        </div>

        {/* الخبرة المهنية */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">الخبرة المهنية <span className="text-red-500">*</span></label>
          <textarea 
            name="experience" 
            value={form.experience} 
            onChange={handleChange} 
            placeholder="صف خبراتك السابقة (الوظائف، المدة، المهام)" 
            className={`w-full border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} 
            rows={4}
            required
          ></textarea>
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
        </div>

        {/* رسالة إضافية */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">رسالة إضافية (اختياري)</label>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="أدخل ملاحظات أو تفاصيل إضافية" 
            className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
            rows={4}
          ></textarea>
        </div>

        {/* زر الإرسال */}
        <div className="flex justify-center mt-6">
          <button 
            type="submit" 
            className={`bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition min-w-[150px] flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري الإرسال...
              </>
            ) : 'إرسال الطلب'}
          </button>
        </div>
</form>

          </div>
        </section>
        {/* Footer Section */}
            <Footer/>
      
      </main>
    </>
  );
}

export default HireUsPage;