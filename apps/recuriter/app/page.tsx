// app/page.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  // Sample plans/pricing data
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for startups and small teams hiring occasionally.",
      features: [
        "5 active job postings",
        "20 candidate applications",
        "Basic candidate filtering",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: 2,
      name: "Growth",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies with regular hiring needs.",
      features: [
        "15 active job postings",
        "Unlimited applications",
        "Advanced candidate matching",
        "Resume parsing & ranking",
        "Priority support",
      ],
      cta: "Start 14-day Trial",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "For large organizations with high-volume recruitment needs.",
      features: [
        "Unlimited job postings",
        "Custom recruitment pipeline",
        "ATS integration",
        "Dedicated account manager",
        "Custom reporting & analytics",
        "Bulk recruiting tools",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  // Key benefits data
  const benefits = [
    {
      id: 1,
      title: "Access Top Tech Talent",
      description:
        "Connect with pre-vetted developers from our pool of 10,000+ skilled professionals.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "AI-Powered Matching",
      description:
        "Our algorithm identifies the most qualified candidates for your specific requirements.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Faster Time-to-Hire",
      description:
        "Reduce your hiring cycle by up to 70% with streamlined processes and qualified candidates.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Custom Recruitment Pipeline",
      description:
        "Tailor your hiring workflow to match your company's unique needs and culture.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
  ];

  // Success metrics
  const metrics = [
    { id: 1, value: "87%", label: "Successful placements" },
    { id: 2, value: "12 days", label: "Average time to hire" },
    { id: 3, value: "92%", label: "Client retention" },
    { id: 4, value: "98%", label: "Candidate match rate" },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header/Navigation */}
    

      {/* Hero Section */}
      <main>
        <div className="relative bg-gradient-to-r from-indigo-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6 xl:col-span-5">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Hire the best</span>
                  <span className="block text-indigo-600">
                    tech talent faster
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-500">
                  Let's Code Recruiter helps tech companies find and hire elite
                  developers without the traditional recruitment hassle. Post
                  your job in minutes, not hours.
                </p>
                <div className="mt-10 sm:flex sm:justify-start lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Post a Job
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="#pricing"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      View Plans
                    </Link>
                  </div>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-1 overflow-hidden">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-indigo-100 flex items-center justify-center text-xs text-indigo-600 font-medium"
                      >
                        {["AB", "TC", "MS", "JD", "KP"][item - 1]}
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-500">
                    Trusted by 500+ tech companies worldwide
                  </span>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg lg:mt-0 lg:col-span-6 xl:col-span-7">
                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-lg shadow-xl">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <h2 className="text-center text-2xl font-bold text-gray-900">
                        Start hiring tech talent today
                      </h2>
                      <p className="mt-2 text-center text-sm text-gray-600">
                        Try free for 14 days. No credit card required.
                      </p>
                    </div>
                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="company" className="sr-only">
                            Company name
                          </label>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            placeholder="Company name"
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="work-email" className="sr-only">
                            Work email
                          </label>
                          <input
                            type="email"
                            name="work-email"
                            id="work-email"
                            placeholder="Work email"
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="hiring" className="sr-only">
                            What are you hiring for?
                          </label>
                          <select
                            id="hiring"
                            name="hiring"
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          >
                            <option>What are you hiring for?</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Full Stack Developer</option>
                            <option>DevOps Engineer</option>
                            <option>Mobile Developer</option>
                            <option>Other tech role</option>
                          </select>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Start Your Free Trial
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{" "}
                      <Link
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Section */}
        <div className="bg-indigo-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Recruitment that delivers results
              </h2>
              <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                Our metrics speak for themselves
              </p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
              {metrics.map((metric) => (
                <div key={metric.id} className="flex flex-col">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                    {metric.label}
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Features/Benefits Section */}
        <div id="features" className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why tech companies choose us
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                Let's Code Recruiter combines technology and expertise to make
                tech hiring simpler, faster, and more effective.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto rounded-lg shadow-lg"
                  src="/api/placeholder/800/600"
                  alt="Dashboard screenshot"
                />
              </div>
              <div className="relative">
                <div className="space-y-10">
                  {benefits.slice(0, 2).map((item) => (
                    <div key={item.id} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-indigo-600">
                          {item.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <div className="space-y-10">
                    {benefits.slice(2).map((item) => (
                      <div key={item.id} className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-indigo-600">
                            {item.icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-base text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto rounded-lg shadow-lg"
                    src="/api/placeholder/800/600"
                    alt="Analytics screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="bg-indigo-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Testimonials
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hear from our happy clients
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                        <span className="text-xl font-medium text-indigo-800">
                          SD
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Sarah Davis
                      </h4>
                      <p className="text-md text-gray-500">CTO @ TechNova</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      "Let's Code Recruiter transformed our engineering hiring
                      process. We cut our time-to-hire from 45 days to just 10
                      days, and the quality of candidates is exceptional. Worth
                      every penny!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                        <span className="text-xl font-medium text-indigo-800">
                          MJ
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Mark Johnson
                      </h4>
                      <p className="text-md text-gray-500">
                        Founder @ DevStack
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      "As a startup founder, I don't have time for lengthy
                      recruitment processes. Let's Code Recruiter provided us
                      with pre-vetted candidates that perfectly matched our tech
                      stack and company culture."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                        <span className="text-xl font-medium text-indigo-800">
                          AP
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Alex Patel
                      </h4>
                      <p className="text-md text-gray-500">
                        HR Director @ CloudSolutions
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      "Our company was struggling to find qualified engineers in
                      a competitive market. Let's Code Recruiter gave us access
                      to talent we couldn't find elsewhere. Their AI matching is
                      remarkably accurate!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Pricing plans for teams of all sizes
              </h2>
              <p className="mt-5 text-xl text-gray-500 text-center max-w-3xl mx-auto">
                Choose the perfect plan for your hiring needs. All plans include
                a 14-day free trial.
              </p>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-lg shadow-lg divide-y divide-gray-200 ${plan.popular ? "border-2 border-indigo-500" : "border border-gray-200"}`}
                >
                  {plan.popular && (
                    <div className="bg-indigo-500 rounded-t-lg py-2 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-white">
                        Most Popular
                      </p>
                    </div>
                  )}
                  <div
                    className={`p-6 ${plan.popular && !plan.popular ? "rounded-t-lg" : ""}`}
                  >
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="mt-4">
                      <span className="text-4xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-base font-medium text-gray-500">
                        {plan.period}
                      </span>
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                      {plan.description}
                    </p>
                    <a
                      href="#"
                      className={`mt-8 block w-full py-3 px-6 rounded-md shadow text-center text-sm font-medium ${
                        plan.popular
                          ? "text-white bg-indigo-600 hover:bg-indigo-700"
                          : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                  <div className="pt-6 pb-8 px-6">
                    <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                      What's included
                    </h4>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex">
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-3 text-base text-gray-500">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact/Form Section */}
        <div
          id="contact"
          className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="max-w-xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ready to transform your tech hiring?
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Schedule a demo with our team or start your free trial today.
              </p>
            </div>
            <div className="mt-12">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tell us about your hiring needs
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">
                        By selecting this, you agree to receive recruitment
                        insights and updates. You can unsubscribe anytime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Schedule a Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Frequently asked questions
            </h2>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How does Let's Code Recruiter work?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Once you sign up, you can create detailed job postings that
                    our AI will match with pre-vetted developers in our network.
                    You'll receive a curated list of candidates who match your
                    requirements within 48 hours.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What makes your platform different from traditional
                    recruiters?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Unlike traditional recruiters, we combine AI-powered
                    matching with human expertise. Our tech-focused approach
                    means we understand the skills you need and can match you
                    with developers who have the right technical capabilities.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How long does it take to find suitable candidates?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Most clients receive their first batch of matched candidates
                    within 48 hours of posting a job. Our average time-to-hire
                    is just 12 days, compared to the industry average of 30-45
                    days.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Do you offer a hiring guarantee?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Yes! If you don't find a suitable candidate within 30 days,
                    we'll extend your subscription for free until you make a
                    successful hire. For Enterprise clients, we offer additional
                    guarantees.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I integrate your platform with our existing ATS?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Absolutely. Our Enterprise plan includes integration with
                    popular ATS platforms like Greenhouse, Lever, and Workday to
                    ensure a seamless workflow with your existing systems.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What tech stacks do your developers specialize in?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our network includes developers specializing in a wide range
                    of technologies including React, Angular, Vue, Node.js,
                    Python, Ruby, Java, .NET, Go, AWS, Azure, and more. We can
                    help you find specialists in virtually any tech stack.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Transform your tech hiring process</span>
              <span className="block">Start your 14-day free trial today</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Join hundreds of companies who are finding and hiring elite tech
              talent faster than ever.
            </p>
            <Link
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
