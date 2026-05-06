const WHAT_WE_DO = [
  "Digitize student records for faster and more accurate data access",
  "Simplify attendance tracking and daily monitoring",
  "Automate report generation for submissions to CSWD and other offices",
  "Provide announcements and updates for parents and guardians",
  "Ensure accessibility through offline functionality",
];

const APPROACH_ITEMS = [
  { title: "Simplicity", desc: "Easy to learn and use" },
  { title: "Accessibility", desc: "Works even without internet" },
  { title: "Efficiency", desc: "Reduces manual workload" },
  { title: "Security", desc: "Protects sensitive information" },
];

const PARTNERS = [
  "Day Care Center Personnel of Barangay San Antonio de Padua I",
  "Barangay Officials of San Antonio de Padua I",
  "Parents and Guardians",
  "CSWD and Regional Offices",
];

function CloudRow() {
  return (
    <div className="flex items-start overflow-hidden -mx-4 mt-6" aria-hidden="true">
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-72" />
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-80 -ml-16" />
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-72 -ml-16" />
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-96 -ml-20" />
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-80 -ml-20" />
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-72 -ml-16" />
      <img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-96 -ml-20" />
    </div>
  );
}

export default function About() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ── Hero ── blue gradient, cloud row bottom */}
      <section className="bg-gradient-to-b from-brand-blue to-sky-section px-4 pt-16">
        <div className="pb-8 text-center max-w-lg mx-auto">
          <h1 className="font-display text-5xl text-white mb-4 md:text-6xl">About Us!</h1>
          <p className="font-body text-base text-white/90">
            Learn more about our mission, our team, and our commitment to the children of Barangay San Antonio de Padua I.
          </p>
        </div>
        <CloudRow />
      </section>

      {/* ── Who We Are ── white (no cloud row — white clouds invisible on white) */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-brand-blue mb-4">Who We Are</h2>
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
            <img
              src="/assets/about-us-description-photo.jpg"
              alt="Children learning at the Day Care Center"
              className="rounded-3xl w-full max-w-xs object-cover shadow-card"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Our Mission ── sky-section, cloud row bottom */}
      <section className="bg-sky-section px-4 pt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center pb-4 md:grid-cols-2">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/assets/astrology-kids.png"
              alt="Kids with stars and clouds"
              className="w-56 md:w-72"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-4xl text-brand-blue mb-4">Our Mission</h2>
            <p className="font-body text-base text-neutral-700">
              We aim to improve the daily operations of daycare centers by providing a simple,
              reliable, and offline-capable system that enhances record management, reduces
              workload, and supports better communication between teachers and parents.
            </p>
          </div>
        </div>
        <CloudRow />
      </section>

      {/* ── Our Vision ── white */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-brand-blue mb-4">Our Vision</h2>
            <p className="font-body text-base text-neutral-700">
              We envision a future where local daycare centers can transition from manual
              processes to organized digital systems — enabling them to deliver better services,
              ensure data security, and focus more on child development rather than
              administrative tasks.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/flying-pencil-kids.png"
              alt="Kids flying with pencil"
              className="w-56 md:w-72"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── What We Do ── sky-section, cloud row bottom */}
      <section className="bg-sky-section px-4 pt-12">
        <div className="max-w-3xl mx-auto pb-4">
          <h2 className="font-display text-4xl text-brand-blue text-center mb-8">What We Do</h2>
          <ul className="space-y-4">
            {WHAT_WE_DO.map((item) => (
              <li key={item} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-card">
                <span className="flex-shrink-0 mt-2 w-3 h-3 rounded-full bg-brand-blue" aria-hidden="true" />
                <span className="font-body text-base text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-8">
            <img
              src="/assets/giant-book-kids.png"
              alt="Kids reading a giant book"
              className="w-48"
              loading="lazy"
            />
          </div>
        </div>
        <CloudRow />
      </section>

      {/* ── Our Approach ── white */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-brand-blue text-center mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {APPROACH_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-neutral-50 rounded-2xl px-5 py-5 shadow-card">
                <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-brand-blue" aria-hidden="true" />
                <div>
                  <p className="font-body font-bold text-neutral-900">{item.title}</p>
                  <p className="font-body text-sm text-neutral-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <img
              src="/assets/flying-book-kid.png"
              alt="Kid flying with a book"
              className="w-40"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Our Partners ── sky-section, cloud row bottom */}
      <section className="bg-sky-section px-4 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-brand-blue text-center mb-8">Our Partners</h2>
          <ul className="space-y-3">
            {PARTNERS.map((partner) => (
              <li
                key={partner}
                className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-card font-body text-base text-neutral-700"
              >
                <span className="flex-shrink-0 w-3 h-3 rounded-full bg-brand-blue" aria-hidden="true" />
                {partner}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-8">
            <img
              src="/assets/train-123-kids.png"
              alt="Kids riding a train"
              className="w-56"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
