import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqs from "../data/faqs";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-16 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#111315]">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-500 mt-3 text-sm">
            Everything you need to know about my work and services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-xl bg-white shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-[#111315]">{item.q}</span>

                <ChevronDown
                  className={`transition-transform duration-300 text-zinc-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 pb-4 text-sm text-zinc-600 text-left leading-relaxed transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
