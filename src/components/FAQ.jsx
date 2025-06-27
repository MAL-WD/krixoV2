import React from "react";
import "../App.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={
        "rounded-3xl px-6 py-4 sm:px-10 md:px-14 md:py-6 faq duration-300 cursor-pointer " +
        (faq.open ? "open bg-blue" : "")
      }
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-semibold text-base sm:text-lg md:text-xl py-2 sm:py-3">
        {faq.question}
      </div>
      {faq.open && <hr className="border-white opacity-25 my-3" />}
      <div className="faq-answer text-sm sm:text-base text-white">
        {faq.answer}
      </div>
    </div>
  );
};

export default FAQ;
