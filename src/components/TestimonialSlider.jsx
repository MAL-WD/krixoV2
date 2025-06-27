import { useEffect, useState } from "react";
import quote from "../assets/quote.svg";
import star from "../assets/star.svg";
import left from "../assets/left.svg";
import gradient from "../assets/gradient.svg";
import RevealX from "./RevealX";

const testimonials = [
  {
    text: `"كنت قلقًا بشأن عملية نقل الأثاث من منزلي القديم، لكن فريق Krixo تجاوز كل توقعاتي... بالتأكيد سأختارهم مرة أخرى!"`,
    name: "ربيع كريم",
    rating: 5,
  },
  {
    text: `"خدمة رائعة وسريعة، تم نقل أغراضي دون أي خدوش. فريق محترف!"`,
    name: "سارة حسن",
    rating: 4,
  },
  {
    text: `"التعامل كان ممتاز والأسعار مناسبة. أوصي بخدماتهم بشدة!"`,
    name: "علي محمود",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="Testimonials" className="my-16 sm:my-32 md:my-64 relative">
      <RevealX leftM={true}>
        <img
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-0 md:-right-10 rotate-180 w-1/4 sm:w-1/5 h-[150px] sm:h-[200px] md:h-[300px]"
          src={gradient}
          alt=""
          aria-hidden="true"
        />
      </RevealX>
      <div className="container w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto p-4 sm:p-6 md:p-8 relative">
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute top-2 sm:top-4 right-2 sm:right-4 rotate-180"
          src={quote}
          alt=""
          aria-hidden="true"
        />
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute bottom-2 sm:bottom-4 left-2 sm:left-4"
          src={quote}
          alt=""
          aria-hidden="true"
        />
        <h2 className="flex mx-auto items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-yellow-300 text-lg sm:text-xl md:text-2xl font-bold shadow-lg">
          آراء عملائنا
        </h2>

        <div className="comment grid text-center justify-center">
          <p className="my-6 sm:my-10 font-medium text-2xl sm:text-3xl md:text-4xl px-4">
            {testimonials[current].text}
          </p>
          <div className="commenter flex gap-2 flex-col">
            <p className="text-lg sm:text-xl md:text-2xl">{testimonials[current].name}</p>
            <div className="flex gap-1 justify-center">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <img
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  src={star}
                  alt="Star rating"
                />
              ))}
            </div>
          </div>
          <div className="buttons mt-6 flex items-center justify-center gap-6 sm:gap-8 md:gap-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 cursor-pointer text-blue-600 hover:text-blue-800"
              aria-label="Previous testimonial"
            >
              <img className="rotate-180" src={left} alt="" aria-hidden="true" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 cursor-pointer text-blue-600 hover:text-blue-800"
              aria-label="Next testimonial"
            >
              <img src={left} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}