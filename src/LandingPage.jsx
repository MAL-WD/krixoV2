import { useState } from 'react'
import gradient from "./assets/gradient.svg";
import road from "./assets/road.svg";
import './App.css'
import Header from './components/Header'
import van1 from './assets/Van_Mockup_1.png'
import van5 from './assets/Van_Mockup_5.png'
import home from './assets/home.svg'
import cleaning from './assets/cleaning.svg'
import boxing from './assets/boxing.svg'
import sofa from './assets/sofa.svg'
import hands from './assets/hands.svg'
import delivery from './assets/delivery.svg'
import office from './assets/office.svg'
import worker from './assets/worker.svg'
import map from './assets/map.png'
import devices from './assets/devices.svg'
import van2 from './assets/Van_Mockup_2.png'
import Button from './components/Button'
import Gallery from './components/Gallery';
import Reveal from './components/Reveal';
import FAQ from './components/FAQ';
import RevealX from './components/RevealX';
import TestimonialSlider from './components/TestimonialSlider';
import { Link } from 'react-router';
import Footer from './components/Footer';

function LandingPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "هل الشحن مؤمن؟",
      answer: "تقدم KRIXO ضمانًا على نقل المحمولة.",
      open: true
    },
    {
      question: "ماذا يحدث إذا تأخر السائق أو ألغى المهمة؟",
      answer: "تضمن المنصة استبدال السائق في أقرب وقت ممكن كما يُعاد المبلغ في حال عدم تنفيذ الخدمة.",
      open: false
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "حاليًا، الدفع يكون نقدًا عند إتمام الخدمة.",
      open: false
    },
    {
      question: "هل تقدمون خدمة تحميل وتنزيل الأثاث والبضائع؟",
      answer: "نعم؛ يمكنك تحديد عدد اليد العاملة التي قد تحتاجها عند ملء الطلب.",
      open: false
    },
    {
      question: "هل يمكن نقل أشياء حساسة أو قابلة للكسر؟",
      answer: "نعم؛ ولكن من الأفضل تحديد ذلك في الطلب لاختيار سائق لديه تقييمات جيدة في هذا النوع من النقل.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <Header/>
      <main>
        {/* Hero Section */}
        <section id='Home' className="landing-page min-h-screen w-full flex items-center pt-20 md:pt-32 lg:pt-56">
          <div className="container mx-auto px-4 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
              <Reveal>
                <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl xl:text-9xl text-white leading-tight text-center lg:text-right">
                  <span className='text-blue'> ننقل</span> لك  <br /> 
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center lg:justify-start">  
                    <span className='text-yellow'>الراحة</span> 
                    والامان 
                    <img className='w-16 md:w-24 lg:w-32 xl:w-42 inline' src={hands} alt="" />
                  </div>
                </h1>
              </Reveal>
              <Reveal delay={0.5} style={'self-center'}>
                <p className='font-normal text-center max-w-full lg:max-w-[400px] text-base md:text-lg self-end mt-6 lg:mt-0'>
                  احجز خدمتك بضغطة زر. نربطك بأفضل النقالة والفرق المتخصصة وترتيب ونقل عتاد منزلك في أي وقت وأي مكان. بسرعة، أمان، وبسعر مناسب.
                </p>
              </Reveal>
            </div>
            <RevealX leftM={true}>
              <img className='w-full mt-8' src={van1} alt="" />
            </RevealX>
          </div>
        </section>

        {/* About Section */}
        <section id='About' className='relative mt-32 lg:mt-64 mb-16 lg:mb-24'>
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 container mx-auto px-4 pt-20 lg:pt-42">
            <Reveal right={true}>
              <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight text-center lg:text-right">
                منصة واحدة <span className='bg-yellow'> لكل </span>
                من خدمات المنزل — ترحيل، ترتيب ونقل البضائع والمعدات
              </h2>
            </Reveal>
            <Reveal left={true}>
              <div className='pt-8 lg:pt-76 self-center lg:self-end'>
                <p className="text-white text-base md:text-lg max-w-xl text-center lg:text-right">
                  كل ما تحتاجه في مكان واحد. اختر الخدمة، أدخل تفاصيلك، ودع فريقنا يهتم بالباقي — بدون تعقيدات، بدون تأخير.
                </p>
                <div className="flex mt-2 p-3 justify-center lg:justify-start">
                  <Button/>
                </div>
              </div>
            </Reveal>
            <img className='absolute top-0 left-0 lg:-left-10 w-1/4 lg:w-3xs h-[300px] lg:h-[600px]' src={gradient} alt="" />
            <img className='absolute -z-2 top-0 right-1/2 translate-x-1/2 w-full lg:w-[70%]' src={road} alt="" />
          </div>
        </section>

        {/* Services Section with Van */}
        <section className='relative mt-16 lg:mt-24'>
          <div className="container mx-auto px-4">
            <RevealX leftM={true}>
              <img className='w-full mt-8' src={van2} alt="" />
            </RevealX>

            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 pt-16 lg:pt-42">
              <Reveal left={true}>
                <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-white leading-tight text-center lg:text-right">
                  <span className='text-yellow text-4xl md:text-6xl lg:text-8xl block mb-2'> 95%+ </span>
                  تقييمات إيجابية
                </h2>
              </Reveal>
              <Reveal right={true}>
                <div className='pt-8 lg:pt-76 max-w-full lg:max-w-[400px] self-center lg:self-end'>
                  <p className='font-light font-normal text-base md:text-lg mb-6 text-center lg:text-right'>
                    من خلال منصة <span className='text-yellow'>KRIXO</span>، نعيد تعريف تجربة الحصول على خدمات المنزل. نربط بين احترافية مقدمي الخدمة وراحة العميل، لنخلق منظومة ذكية وسريعة وآمنة لكل بيت.
                  </p>
                  <div className="flex mt-2 p-3 justify-center lg:justify-start">
                    <Button/>
                  </div>
                </div>
              </Reveal>
              <img className='absolute top-0 right-0 lg:-right-10 rotate-180 w-1/4 lg:w-3xs h-[300px] lg:h-[600px]' src={gradient} alt="" />
              <img className='absolute bottom-0 left-0 lg:-left-10 w-1/4 lg:w-3xs h-[300px] lg:h-[600px]' src={gradient} alt="" />
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id='Services' className='my-32 lg:my-64'>
          <Reveal>
            <div className="container mx-auto px-4 text-center">
              <h2 className='flex mx-auto items-center justify-center w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-yellow-300 text-lg md:text-xl lg:text-2xl font-bold shadow-lg'>خدماتنا</h2>
              <p className='my-6 text-center px-4 text-sm md:text-base'>
                مع منصة KRIXO، نقدم لك كل ما تحتاجه في مكان واحد — سواء كنت تنتقل إلى منزل جديد، تحتاج شامل، أو ترغب بترتيب منزلك بطريقة عملية ومرتبة.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-4 md:gap-6 lg:gap-7">
                <Reveal>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center bg-[#323b42] hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={home} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>نقل المنازل</h3>
                      <p className='text-white text-sm md:text-base'>نقوم بنقل أثاث منزلك بسرعة وأمان داخل أو خارج المدينة.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={0.5}>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={cleaning} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>ترتيب المنازل</h3>
                      <p className='text-white text-sm md:text-base'>نقدّم خدمات ترتيب شاملة للمنازل بعد الترحيل أو قبل السكن.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={0.75}>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={boxing} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>نقل التخزين</h3>
                      <p className='text-white text-sm md:text-base'>نقل صناديق أو معدات أو أثاث إلى أو من أماكن التخزين.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={1}>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={office} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>نقل المكاتب</h3>
                      <p className='text-white text-sm md:text-base'>خدمة احترافية لنقل مكاتب الشركات أو المكاتب المنزلية بكفاءة.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={1.25}>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={sofa} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>نقل الأثاث</h3>
                      <p className='text-white text-sm md:text-base'>نقل قطع الأثاث الكبيرة والثقيلة بأمان باستخدام أدوات متخصصة.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={1.5}>
                  <Link to={'/contact'}>
                    <div className="service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={delivery} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>توصيل الأثاث</h3>
                      <p className='text-white text-sm md:text-base'>استلام وتوصيل الأثاث من المتاجر إلى باب منزلك بكل سهولة.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={1.75}>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-12 h-12 md:w-14 md:h-14 p-2 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={devices} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>توصيل الأجهزة</h3>
                      <p className='text-white text-sm md:text-base'>نقل وتوصيل الأجهزة الكهربائية مثل الغسالات والثلاجات بأمان.</p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={2}>
                  <Link to={'/contact'}>
                    <div className="box service min-h-60 md:min-h-72 rounded-3xl md:rounded-4xl p-4 md:p-5 text-center hover:bg-[#3a434a] transition-colors">
                      <img className='w-10 h-10 md:w-12 md:h-12 mx-auto relative rounded-full bg-yellow/25 flex items-center' src={worker} alt="" />
                      <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-2 mt-3 md:mt-5'>عمالة فقط</h3>
                      <p className='text-white text-sm md:text-base'>وفر عمال للمساعدة في الترتيب أو التحميل فقط دون شاحنة.</p>
                    </div>
                  </Link>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Gallery Section */}
        <section className='my-32 lg:my-64 py-16'>
          <div className="container mx-auto px-4 relative">
            <div 
              style={{
                WebkitTextStroke: '2px #FAD513'
              }} 
              className='text-4xl md:text-8xl lg:text-[12rem] xl:text-[20rem] left-1/2 -translate-x-1/2 font-bold uppercase -top-12 md:-top-32 lg:-top-72 -z-1 absolute text-transparent'
            >
              KRIXO
            </div>
            <Gallery/>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSlider/>

        {/* FAQ Section */}
        <section className='relative'>
          <div className="container mx-auto px-4">
            <img className='absolute top-0 left-0 lg:-left-10 w-1/4 lg:w-3xs h-[300px] lg:h-[600px]' src={gradient} alt="" />
            <RevealX leftM={true}>
              <img className='w-full my-8' src={van5} alt="" />
            </RevealX>
            
            <h2 className="flex mx-auto mt-20 items-center justify-center w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-yellow-300 text-lg md:text-xl lg:text-2xl font-bold shadow-lg">
              FAQ
            </h2>
            <p className="mt-6 text-center max-w-2xl mx-auto text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed px-4">
              تجد هنا إجابات لأكثر الأسئلة التي نُسأل عنها باستمرار، سواء كنت زبونًا تبحث عن نقل موثوق أو ناقل شاحنة مهتم بالانضمام إلينا.
            </p>
            <div className="faqs mx-auto my-10 px-4">
              {faqs.map((faq, index) => (
                <FAQ faq={faq} index={index} toggleFAQ={toggleFAQ} key={index} />
              ))}
              <img className="absolute bottom-10 right-0 lg:-right-10 rotate-180 w-1/4 lg:w-3xs h-[300px] lg:h-[600px]" alt="" src={gradient}></img>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id='Contact' className='my-24 lg:my-54'>
          <div className="container grid justify-center gap-12 md:gap-16 lg:gap-20 mx-auto px-4">
            <Reveal>
              <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-white leading-tight text-center">
                اين ما كنت ووقت ماشئت
                <div className='bg-yellow text-black w-fit rounded-2xl md:rounded-3xl mx-auto flex-inline p-3 md:p-4 px-4 md:px-6 mt-3 md:mt-4 text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                  ماذا تنتظر
                </div>
              </h2>
            </Reveal>
            <Reveal delay={.6}>
              <div className="map rounded-2xl md:rounded-3xl overflow-hidden">
                <img className='rounded-2xl md:rounded-3xl w-full h-auto' src={map} alt="" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Footer Section */}
        <Footer/>
      </main>
    </>
  )
}

export default LandingPage