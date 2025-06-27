import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import logo from '../assets/Logo.png'

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-gradient-to-b from-[#1a1f24] to-[#0f1216] rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden border border-yellow-400/20"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-[#0143B1]/10 to-[#FAD513]/10">
            <h2 className="text-2xl font-bold text-yellow-400">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[70vh] text-white">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Terms Content Component
const TermsContent = () => (
  <div className="space-y-6 text-right">
    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">1. التعريفات:</h3>
      <ul className="space-y-2 text-gray-300">
        <li><strong className="text-white">المنصة:</strong> تشير إلى تطبيق أو موقع KRIXO الإلكتروني.</li>
        <li><strong className="text-white">المستخدم:</strong> أي شخص يستخدم المنصة سواء كعميل أو كسائق شاحنة.</li>
        <li><strong className="text-white">العميل:</strong> الشخص الذي يطلب خدمة نقل من خلال المنصة.</li>
        <li><strong className="text-white">السائق:</strong> الشخص الذي يقدم خدمة النقل عبر شاحنته، والمسجّل في المنصة.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">2. شروط التسجيل والاستخدام:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• يجب أن يكون عمر المستخدم 18 سنة فما فوق.</li>
        <li>• يجب تقديم معلومات صحيحة وكاملة أثناء التسجيل.</li>
        <li>• يلتزم المستخدم بالحفاظ على سرية بيانات الدخول وعدم مشاركتها مع الغير.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">3. التزامات السائق:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• الالتزام بالمواعيد المحددة والاتفاقات مع العملاء.</li>
        <li>• المحافظة على البضائع المنقولة وتوخي الحذر.</li>
        <li>• التقيّد بالقوانين المرورية وسلوكيات القيادة الآمنة.</li>
        <li>• عدم فرض أي رسوم إضافية على العميل بدون اتفاق مسبق.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">4. التزامات العميل:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• توفير معلومات دقيقة حول العنوان، نوع الحمولة، والتوقيت.</li>
        <li>• الالتزام بالدفع حسب الاتفاق.</li>
        <li>• التعامل باحترام مع السائق وعدم التأخير دون مبرر.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">5. الأسعار والدفع:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• يتم تحديد السعر وفقًا للمسافة، نوع الخدمة.</li>
        <li>• KRIXO يحتفظ بنسبة عمولة من قيمة كل عملية نقل.</li>
        <li>• يمكن الدفع نقدًا أو عبر وسائل الدفع المتاحة (حسب التطوير المستقبلي).</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">6. الإلغاء والاسترجاع:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• يمكن إلغاء الطلب قبل انطلاق السائق دون رسوم.</li>
        <li>• في حال الإلغاء بعد انطلاق السائق، قد يتم فرض رسوم تعويضية.</li>
        <li>• المنصة غير مسؤولة عن استرجاع الأموال المدفوعة مباشرة للسائق خارج التطبيق.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">7. المسؤولية:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• KRIXO تعمل كوسيط فقط بين العميل والسائق.</li>
        <li>• المنصة غير مسؤولة عن أية أضرار تحدث أثناء النقل، ما لم يكن هناك إهمال واضح.</li>
        <li>• المستخدمون يتحملون كامل المسؤولية عن التعاملات بينهم.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">8. التقييمات والمراجعات:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• يحق للمستخدمين تقييم بعضهم البعض بعد كل عملية.</li>
        <li>• KRIXO يحتفظ بالحق في حذف أو تعديل التقييمات المخالفة لسياسة الاستخدام.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">9. التعديلات على الشروط:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• KRIXO تحتفظ بالحق في تعديل هذه الشروط في أي وقت.</li>
        <li>• يُنصح المستخدمون بمراجعة الشروط بصفة دورية.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">10. القانون المعمول به:</h3>
      <p className="text-gray-300">تخضع هذه الشروط للقوانين المعمول بها في الدولة التي تعمل بها المنصة.</p>
    </div>
  </div>
);

// Privacy Policy Content Component
const PrivacyContent = () => (
  <div className="space-y-6 text-right">
    <div>
      <p className="text-gray-300 mb-4">
        تلتزم منصة KRIXO بحماية خصوصية جميع مستخدميها، سواء كانوا عملاء أو سائقي شاحنات. تهدف هذه السياسة إلى شرح كيفية جمع واستخدام وحماية المعلومات الشخصية.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">1. المعلومات التي نقوم بجمعها:</h3>
      <p className="text-gray-300 mb-3">عند استخدامك لمنصتنا، قد نقوم بجمع المعلومات التالية:</p>
      <ul className="space-y-2 text-gray-300">
        <li>• <strong className="text-white">المعلومات الشخصية:</strong> مثل الاسم، رقم الهاتف، البريد الإلكتروني، العنوان.</li>
        <li>• <strong className="text-white">معلومات المركبة (بالنسبة للسائقين):</strong> نوع الشاحنة، رقم التسجيل، الصور، رخصة القيادة.</li>
        <li>• <strong className="text-white">بيانات الموقع الجغرافي:</strong> لمتابعة الرحلات وتحسين الخدمة.</li>
        <li>• <strong className="text-white">معلومات الاستخدام:</strong> مثل التقييمات، الطلبات السابقة، ونمط الاستخدام.</li>
        <li>• <strong className="text-white">بيانات الدفع</strong> (عند توفر وسائل الدفع الإلكترونية).</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">2. كيف نستخدم هذه المعلومات؟</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• لربط العملاء بالسائقين بطريقة فعالة وسريعة.</li>
        <li>• لتحسين تجربة المستخدم وتقديم دعم فني فعّال.</li>
        <li>• لإرسال إشعارات تتعلق بالطلبات والعروض.</li>
        <li>• لأغراض أمنية وتحليلية وتحسين الخدمات.</li>
        <li>• للامتثال للمتطلبات القانونية عند الضرورة.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">3. مشاركة المعلومات:</h3>
      <p className="text-gray-300 mb-3">KRIXO لا تبيع أو تؤجر معلومات المستخدمين لأي طرف ثالث.</p>
      <p className="text-gray-300 mb-3">ومع ذلك، يمكن مشاركة بعض البيانات في الحالات التالية:</p>
      <ul className="space-y-2 text-gray-300">
        <li>• مع السائق أو العميل لغرض إتمام الخدمة.</li>
        <li>• مع السلطات الرسمية في حال وجود طلب قانوني.</li>
        <li>• مع مزودي الخدمات الذين يساعدوننا في تشغيل المنصة (تحت التزام السرية).</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">4. حماية المعلومات:</h3>
      <p className="text-gray-300">نستخدم إجراءات أمان تقنية وتنظيمية لحماية معلوماتك من الوصول أو التعديل أو الكشف أو التدمير غير المصرّح به.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">5. حقوق المستخدم:</h3>
      <ul className="space-y-2 text-gray-300">
        <li>• يمكنك تحديث أو تصحيح معلوماتك الشخصية من داخل التطبيق.</li>
        <li>• يمكنك طلب حذف حسابك أو بياناتك في أي وقت عبر خدمة الدعم.</li>
        <li>• لديك الحق في معرفة كيف نستخدم بياناتك.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">6. ملفات تعريف الارتباط (Cookies):</h3>
      <p className="text-gray-300">قد تستخدم المنصة ملفات تعريف الارتباط لتحسين الأداء وتجربة المستخدم، ويمكنك تعطيلها من إعدادات المتصفح الخاص بك.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">7. التعديلات على سياسة الخصوصية:</h3>
      <p className="text-gray-300">قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم إشعار المستخدمين بأي تغييرات جوهرية داخل التطبيق أو عبر البريد الإلكتروني.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-3">8. التواصل معنا:</h3>
      <p className="text-gray-300">
        لأي استفسار بخصوص سياسة الخصوصية، يرجى التواصل مع فريق الدعم عبر التطبيق أو على البريد الإلكتروني:
        <br />
        <a href="mailto:lloualiabdelkarimuniv@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
          lloualiabdelkarimuniv@gmail.com
        </a>
      </p>
    </div>
  </div>
);

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Hover animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      color: '#FFD700', // Brighter yellow on hover
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className=" relative">
      {/* Upper section with headings */}
            <Reveal >


      <div className="container mx-auto px-4">
        <div className="contact flex flex-col md:flex-row justify-between items-center gap-8 md:gap-42">
          <Link to="/contact">
            <motion.h3
              className="font-bold font-seriff text-4xl md:text-8xl text-yellow border-b-1 py-8 md:py-20 text-center md:text-right cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
            >
              تواصل معنا
            </motion.h3>
          </Link>
          <p className="w-full md:w-[400px] text-center self-center md:self-end text-yellow-300">
            نحن هنا للإجابة عن استفساراتك وتقديم المساعدة في أي وقت. سواء كنت بحاجة لمزيد من المعلومات حول خدماتنا أو تريد الاستفسار عن حالة طلبك، لا تتردد في التواصل معنا.
          </p>
        </div>
        <div className="contact flex flex-col md:flex-row justify-between gap-8 md:gap-42 mt-12">
          <Link to="/HireUs">
            <motion.h3
              className="font-bold font-seriff text-4xl md:text-8xl text-white border-b-1 py-8 md:py-20 text-center md:text-right cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
            >
              انضم لفريقنا
            </motion.h3>
          </Link>
          <p className="w-full md:w-[400px] text-center self-center md:self-end text-gray-300">
            هل تمتلك الخبرة في مجال النقل، أو ترتيب العتاد؟ نحن نبحث دائمًا عن عمال موثوقين وملتزمين للانضمام إلى فريق KRIXO. انضم إلينا وابدأ في استقبال الطلبات وتحقيق دخل مستقر من خلال منصة موثوقة وسهلة الاستخدام.
          </p>
        </div>
      </div>
            </ Reveal>

      {/* Lower footer with columns */}
      <div className="w-full bg-gradient-to-b from-[#1a1f24] to-[#0f1216] text-white pt-16 px-6 mt-16 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-right">
            {/* Column 1: Contact Info */}
            <div className="mb-8">
              <h4 className="text-yellow-400 text-xl font-bold mb-6">تواصل معنا</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-left justify-end gap-3">
                  <span dir='ltr' >+213 659 21 02 65</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>lloualiabdelkarimuniv@gmail.com</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>الجزائر , بشار</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="grid justify-center font-bold text-3xl">
                  <img className="w-24 h-24" src={logo} alt="" />
                  <span className="bg-gradient-to-r from-[#0143B1] to-[#FAD513] bg-clip-text text-transparent">
                    KRIXO
                  </span>
                </li>

              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="mb-8">
              <h4 className="text-yellow-400 text-xl font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/#Home" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="/#About" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="/#Services" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="/HireUs" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    انضم كسائق
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="/worker-profile" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    ملف العامل
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="mb-8">
              <h4 className="text-yellow-400 text-xl font-bold mb-6">خدماتنا</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    نقل المنازل
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    نقل الأثاث
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    نقل المكاتب
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    توصيل الأجهزة
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                    عمالة فقط
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className="mb-8">
              <h4 className="text-yellow-400 text-xl font-bold mb-6">تابعنا</h4>
              <div className="flex justify-end gap-4 mb-8">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/krixo_services?igsh=Zzhpb3ZlMjAxdTRt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1LgjwCKFoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@kr_ixo?_t=ZM-8wd2xT2O1Zw&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                {/* Whatsapp */}
                <a
                  href="https://wa.me/message/UOX3SU33SSFXM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#27B43E] flex items-center justify-center hover:bg-[#5BD066] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 32 32" fill="none">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"/> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#5BD066"/> <stop offset="1" stop-color="#27B43E"/> </linearGradient> </defs> </g>

                    </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:lloualiabdelkarimuniv@gmail.com"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="none"/>
                  <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"/>
                  <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"/>
                  <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"/>
                  <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"/>
                  <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"/>
                  <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"/>
                  <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"/>
                  </svg>
                </a>
              </div>

              {/* Download App Buttons (placeholder) */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg py-2 px-4"
                >
                  <span className="ml-2">تطبيق KRIXO متوفر قريبًا</span>
                </a>
              </div>
            </div>
          </div>

          {/* Terms and Copyright */}
          <div className="py-8 mt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">© 2025 KRIXO. جميع الحقوق محفوظة.</div>
              <div className="flex gap-6 text-sm">
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  الشروط والأحكام
                </button>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  سياسة الخصوصية
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="الشروط والأحكام"
      >
        <TermsContent />
      </Modal>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="سياسة الخصوصية"
      >
        <PrivacyContent />
      </Modal>
    </footer>
  );
}