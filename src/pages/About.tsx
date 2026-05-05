import React from "react";

export default function About() {
	return (
		<main className="bg-[#1da1f2] min-h-screen w-full overflow-x-hidden pb-8">
			{/* Page Title */}
			<section className="pt-8 pb-4 flex flex-col items-center">
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">ABOUT US!</h1>
				<p className="text-lg text-white/90 max-w-xl text-center mb-4">
					Learn more about our mission, our team, and our commitment to the children of Barangay San Antonio de Padua I.
				</p>
				<img src="/assets/cloud-blob.png" alt="Decorative cloud" className="w-32 h-16 mt-2" />
			</section>

			{/* Who We Are */}
			<section className="relative flex flex-col items-center py-8 px-4">
				<div className="relative bg-yellow-300 rounded-full w-full max-w-2xl p-6 md:p-12 flex flex-col items-center shadow-lg border-4 border-yellow-400">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">WHO WE ARE</h2>
					<p className="text-center text-base md:text-lg text-gray-800 mb-4">
						The DCCMS team is a group of student developers dedicated to creating practical, community-centered digital solutions. This system was developed in collaboration with the Day Care Center of Barangay San Antonio de Padua I, Dasmariñas City, Cavite, as part of a service-learning initiative.<br /><br />
						Our goal is to bridge the gap between technology and community needs — designing systems that are accessible, efficient, and easy to use, even in environments with limited resources.
					</p>
					<img src="/assets/about-us-description-photo.jpg" alt="Children learning at the Day Care Center" className="rounded-xl w-48 h-36 object-cover border-2 border-white shadow-md" />
				</div>
				<img src="/assets/solid-cloud.png" alt="Cloud decoration" className="absolute -bottom-8 left-0 w-32 opacity-80" />
				<img src="/assets/solid-cloud.png" alt="Cloud decoration" className="absolute -bottom-8 right-0 w-32 opacity-80" />
			</section>

			{/* Mission & Vision */}
			<section className="relative flex flex-col md:flex-row justify-center items-stretch gap-8 py-12 px-4">
				<div className="flex-1 bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
					<img src="/assets/astrology-kids.png" alt="Kids with stars and clouds" className="w-28 mb-2" />
					<h3 className="text-xl font-bold text-primary-600 mb-2">OUR MISSION</h3>
					<p className="text-center text-gray-700">
						We aim to improve the daily operations of daycare centers by providing a simple, reliable, and offline-capable system that enhances record management, reduces workload, and supports better communication between teachers and parents.
					</p>
				</div>
				<div className="flex-1 bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
					<img src="/assets/flying-pencil-kids.png" alt="Kids flying with pencil" className="w-28 mb-2" />
					<h3 className="text-xl font-bold text-primary-600 mb-2">OUR VISION</h3>
					<p className="text-center text-gray-700">
						We envision a future where local daycare centers can transition from manual processes to organized digital systems — enabling them to deliver better services, ensure data security, and focus more on child development rather than administrative tasks.
					</p>
				</div>
			</section>

			{/* What We Do */}
			<section className="relative py-12 px-4 flex flex-col items-center">
				<img src="/assets/rainbow.png" alt="Rainbow" className="w-40 mb-2" />
				<h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">WHAT WE DO</h2>
				<ul className="text-lg text-white/90 space-y-2 max-w-xl">
					<li>✅ Digitize student records for faster and more accurate data access</li>
					<li>✅ Simplify attendance tracking and daily monitoring</li>
					<li>✅ Automate report generation for submissions to CSWD and other offices</li>
					<li>✅ Provide announcements and updates for parents and guardians</li>
					<li>✅ Ensure accessibility through offline functionality</li>
				</ul>
				<img src="/assets/giant-book-kids.png" alt="Kids with giant book" className="w-40 mt-6" />
			</section>

			{/* Our Approach */}
			<section className="relative py-12 px-4 flex flex-col items-center">
				<img src="/assets/cloud-blob.png" alt="Cloud blob" className="w-32 mb-2" />
				<h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">OUR APPROACH</h2>
				<ul className="text-lg text-white/90 space-y-2 max-w-xl">
					<li>• Simplicity — easy to learn and use</li>
					<li>• Accessibility — works even without internet</li>
					<li>• Efficiency — reduces manual workload</li>
					<li>• Security — protects sensitive information</li>
				</ul>
				<img src="/assets/flying-book-kid.png" alt="Kid flying with book" className="w-32 mt-6" />
			</section>

			{/* Our Partners */}
			<section className="relative py-12 px-4 flex flex-col items-center">
				<img src="/assets/solid-cloud.png" alt="Cloud" className="w-32 mb-2" />
				<h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">OUR PARTNERS</h2>
				<ul className="text-lg text-white/90 space-y-2 max-w-xl">
					<li>• Day Care Center Personnel of Barangay San Antonio de Padua I</li>
					<li>• Barangay Officials of San Antonio de Padua I</li>
					<li>• Parents and Guardians</li>
					<li>• CSWD and Regional Offices</li>
				</ul>
				<img src="/assets/train-123-kids.png" alt="Kids on train" className="w-40 mt-6" />
			</section>
		</main>
	);
}
