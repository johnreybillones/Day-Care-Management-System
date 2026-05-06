import React from "react";

const WHAT_WE_DO = [
  "Digitize student records for faster and more accurate data access",
  "Simplify attendance tracking and daily monitoring",
  "Automate report generation for submissions to CSWD and other offices",
  "Provide announcements and updates for parents and guardians",
  "Ensure accessibility through offline functionality",
];

interface ApproachItem {
  icon: string;
  title: string;
  desc: string;
}

const APPROACH_ITEMS: ApproachItem[] = [
  { icon: "💡", title: "Simplicity", desc: "Easy to learn and use" },
  { icon: "📶", title: "Accessibility", desc: "Works even without internet" },
  { icon: "⚡", title: "Efficiency", desc: "Reduces manual workload" },
  { icon: "🔒", title: "Security", desc: "Protects sensitive information" },
];

const PARTNERS = [
  "Day Care Center Personnel of Barangay San Antonio de Padua I",
  "Barangay Officials of San Antonio de Padua I",
  "Parents and Guardians",
  "CSWD and Regional Offices",
];

export default function About() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-blue to-sky-mid py-20 px-4 text-center md:py-28">
        <h1 className="font-display text-4xl text-white mb-4 md:text-5xl">About Us</h1>
        <p className="font-body text-base text-white/90 max-w-lg mx-auto">
          Learn more about our mission, our team, and our commitment to the children of Barangay San Antonio de Padua I.
        </p>
      </section>

      {/* Who We Are — white */}
      <section className="bg-cloud py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-brand-blue mb-4">Who We Are</h2>
            <p className="font-body text-base text-neutral-700 mb-4">
              The DCCMS team is a group of student developers dedicated to creating practical,
              community-centered digital solutions. This system was developed in collaboration
              with the Day Care Center of Barangay San Antonio de Padua I, Dasmariñas City,
              Cavite, as part of a service-learning initiative.
            </p>
            <p className="font-body text-base text-neutral-700">
              Our goal is to bridge the gap between technology and community needs — designing
              systems that are accessible, efficient, and easy to use, even in environments with
              limited resources.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-48 h-48 rounded-full bg-sky-light shadow-card">
              <img
                src="/barangay-seal.png"
                alt="Official Seal of Barangay San Antonio de Padua I"
                className="w-36 h-36 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission — sky-section */}
      <section className="bg-sky-section py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2">
          <div className="flex justify-center order-2 md:order-1">
            <div className="flex items-center justify-center w-40 h-40 rounded-3xl bg-cloud shadow-card">
              <span className="text-7xl" role="img" aria-label="Target">🎯</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl text-brand-blue mb-4">Our Mission</h2>
            <p className="font-body text-base text-neutral-700">
              We aim to improve the daily operations of daycare centers by providing a simple,
              reliable, and offline-capable system that enhances record management, reduces
              workload, and supports better communication between teachers and parents.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision — white */}
      <section className="bg-cloud py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-brand-blue mb-4">Our Vision</h2>
            <p className="font-body text-base text-neutral-700">
              We envision a future where local daycare centers can transition from manual
              processes to organized digital systems — enabling them to deliver better services,
              ensure data security, and focus more on child development rather than
              administrative tasks.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-40 h-40 rounded-3xl bg-sky-light shadow-card">
              <span className="text-7xl" role="img" aria-label="Star">🌟</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — sky-section */}
      <section className="bg-sky-section py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-brand-blue text-center mb-8">What We Do</h2>
          <ul className="space-y-4">
            {WHAT_WE_DO.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-cloud rounded-2xl px-5 py-4 shadow-card">
                <span className="text-xl flex-shrink-0" role="img" aria-label="Checkmark">✅</span>
                <span className="font-body text-base text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Approach — white */}
      <section className="bg-cloud py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-brand-blue text-center mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {APPROACH_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-neutral-50 rounded-2xl px-5 py-5 shadow-card">
                <span className="text-3xl flex-shrink-0" role="img" aria-label={item.title}>{item.icon}</span>
                <div>
                  <p className="font-body font-bold text-neutral-900">{item.title}</p>
                  <p className="font-body text-sm text-neutral-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners — sky-section */}
      <section className="bg-sky-section py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-brand-blue text-center mb-8">Our Partners</h2>
          <ul className="space-y-3">
            {PARTNERS.map((partner) => (
              <li key={partner} className="flex items-center gap-3 bg-cloud rounded-xl px-5 py-4 shadow-card font-body text-base text-neutral-700">
                <span className="text-brand-blue font-bold" aria-hidden="true">•</span>
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
