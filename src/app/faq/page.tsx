"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What can I create with Lume Studios?",
        answer:
          "Lume Studios helps you create various types of content including blog posts, social media content, marketing copy, email newsletters, product descriptions, and more. Our AI understands context and tone, ensuring each piece of content matches your brand voice.",
      },
      {
        question: "How does the AI content generation work?",
        answer:
          "Our AI analyzes your input (topic, keywords, and tone) and generates unique, engaging content using advanced language models. You can then edit and refine the generated content to match your exact needs. The AI learns from context and can adapt to different writing styles and industries.",
      },
      {
        question: "Do I need technical knowledge to use the platform?",
        answer:
          "Not at all! We've designed Lume Studios to be user-friendly and intuitive. Simply input your topic, select your content type, and let our AI do the heavy lifting. Our interface guides you through each step of the content creation process.",
      },
    ],
  },
  {
    category: "Content & Customization",
    questions: [
      {
        question: "Can I customize the tone and style of the content?",
        answer:
          "Yes! You can specify the tone (professional, casual, friendly, formal, or persuasive) and provide keywords to ensure the content matches your brand voice. You can also edit and refine the generated content using our built-in editor.",
      },
      {
        question: "How unique is the generated content?",
        answer:
          "Each piece of content is uniquely generated based on your specific inputs. Our AI creates original content rather than copying existing text. However, we recommend reviewing and personalizing the content to add your unique perspective and ensure it perfectly matches your needs.",
      },
      {
        question: "Can I save and organize my generated content?",
        answer:
          "Yes! All generated content is automatically saved to your dashboard. You can organize content by type, date, or create custom categories. You can also export your content in various formats for easy integration with your existing workflows.",
      },
    ],
  },
  {
    category: "Plans & Pricing",
    questions: [
      {
        question: "What's included in the free plan?",
        answer:
          "The free plan includes 5 AI generations per month, basic templates, and standard support. It's perfect for trying out the platform and understanding how it can help your content creation process.",
      },
      {
        question: "How does the Premium plan differ from the free plan?",
        answer:
          "The Premium plan includes unlimited AI generations, advanced templates, priority support, and analytics tools. You also get access to custom branding features and advanced editing tools.",
      },
      {
        question: "Can I upgrade or downgrade my plan at any time?",
        answer:
          "Yes! You can upgrade or downgrade your plan at any time through your account settings. Changes take effect immediately, and we'll prorate any charges or credits accordingly.",
      },
    ],
  },
  {
    category: "Technical & Security",
    questions: [
      {
        question: "Is my content secure and private?",
        answer:
          "Absolutely. We use industry-standard encryption and security measures to protect your data. Your content is private and only accessible to you unless you explicitly choose to share it.",
      },
      {
        question: "Can I integrate Lume Studios with my existing tools?",
        answer:
          "Yes! Our Enterprise plan includes API access for custom integrations. We also offer direct integrations with popular platforms like WordPress, Shopify, and major social media platforms.",
      },
      {
        question: "What happens if I need help or support?",
        answer:
          "We offer multiple support channels including email support, documentation, and video tutorials. Premium and Enterprise users get priority support with faster response times and dedicated account managers.",
      },
    ],
  },
  {
    category: "Content Quality & Best Practices",
    questions: [
      {
        question: "How can I ensure the best results from the AI?",
        answer:
          "For best results, provide clear topics, relevant keywords, and specify your desired tone. The more context you provide, the better the AI can understand your needs. We also recommend reviewing and editing the generated content to add your personal touch.",
      },
      {
        question: "Can I use the generated content for commercial purposes?",
        answer:
          "Yes! All content generated through Lume Studios is yours to use as you wish, including for commercial purposes. We recommend reviewing and personalizing the content to ensure it perfectly matches your brand voice and requirements.",
      },
      {
        question: "How often is the AI model updated?",
        answer:
          "We regularly update our AI models to improve quality and keep up with the latest developments in language technology. Updates are automatic and don't require any action from your side.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2c] to-gray-900">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Everything you need to know about Lume Studios and AI-powered
            content creation.
          </p>

          <div className="space-y-8">
            {faqs.map((category) => (
              <div key={category.category} className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <Disclosure key={faq.question}>
                      {({ open }) => (
                        <div className="bg-gray-800/50 rounded-lg backdrop-blur-sm">
                          <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-white hover:bg-gray-700/50 transition-colors rounded-lg focus:outline-none">
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 ${
                                open ? "transform rotate-180" : ""
                              }`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-6 py-4 text-gray-300">
                            {faq.answer}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
