import {useState} from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'What is the difference between bull driven mill oil and so called Cold/Wood pressed oils?',
      answer: 'Answer to question 1 goes here.',
    },
    {
      question: 'Which oil suits me?',
      answer: 'Answer to question 2 goes here.',
    },
    {
      question: 'Why should we use different oils?',
      answer: 'Answer to question 3 goes here.',
    },
    {
      question: 'How often should I change my oil?',
      answer: 'Answer to question 4 goes here.',
    },
    {
      question: 'How can I differentiate between good oil and bad oil?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Which oil is good for deep frying?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Which oil has high smoking?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Are Suryagram oils organic?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Why dark brown colour glass bottles?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Why oil is not sold in Kilograms?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'What is the shelf life of Suryagram Oils?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'How should I store oil in kitchen?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Can we reuse oil which was used for deep frying?',
      answer: 'Answer to question 5 goes here.',
    },
    {
      question: 'Which is oil is best for cooking?',
      answer: 'Answer to question 5 goes here.',
    },
  ];

  return (
    <div id='FAQ'>
      <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto p-5">
        {faqData.map((item, index) => (
          <div key={index} className="border-b py-4">
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}>
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <span className="transform transition-transform">
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4.293 7.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M3.293 6.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
