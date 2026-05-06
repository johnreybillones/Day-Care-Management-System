import React from "react";

export default function Home() {
	return (
		<main className="bg-[#e0f6ff] min-h-screen w-full overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center min-h-[400px] pt-8 pb-12 bg-gradient-to-b from-[#e0f6ff] to-[#b2e3a7]">
				<img src="/assets/rainbow.png" alt="Rainbow" className="absolute left-1/2 -translate-x-1/2 top-20 w-96 max-w-full z-0" />
				<img src="/assets/cartoon-sun.png" alt="Sun" className="absolute right-12 top-16 w-24 z-0" />
				<div className="relative z-10 flex flex-col items-start max-w-2xl w-full px-6">
					<h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">
						Day Care Center<br />Management System<br />(DCCMS)
					</h1>
					<span className="text-primary-700 font-semibold text-lg mb-1 block">Barangay San Antonio de Padua I</span>
					<p className="text-white text-lg mb-4 drop-shadow">
						A simple and reliable system for managing student records, attendance, and reports.
					</p>
					<button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg px-6 py-2 min-w-[44px] min-h-[44px] shadow">Login</button>
				</div>
				<img src="/assets/hill-1.png" alt="Hill" className="absolute bottom-0 left-0 w-1/2 min-w-[200px] z-0" />
				<img src="/assets/hill-2.png" alt="Hill" className="absolute bottom-0 right-0 w-1/2 min-w-[200px] z-0" />
				<img src="/assets/plane-123-kid.png" alt="Kids playing" className="absolute left-1/2 -translate-x-1/2 bottom-24 w-48 z-10" />
			</section>

			{/* About the System Section */}
			<section className="relative bg-[#5ec6f3] py-12 px-4 flex flex-col md:flex-row items-center gap-8">
				<div className="flex-1 flex flex-col items-start">
					<h2 className="text-3xl font-extrabold text-white mb-2">About the System</h2>
					<p className="text-white/90 text-lg mb-4 max-w-md">
						The Day Care Center Management System (DCCMS) replaces manual record-keeping with a digital solution. It improves efficiency, reduces paperwork, and ensures accurate tracking of children's development.
					</p>
				</div>
				<div className="flex-1 flex flex-col items-center gap-4">
					<img src="/assets/about-us-description-photo.jpg" alt="Children learning at the Day Care Center" className="rounded-xl w-64 h-44 object-cover border-2 border-white shadow-md" />
				</div>
				<img src="/assets/solid-cloud.png" alt="Cloud" className="absolute left-0 bottom-0 w-40 opacity-80" />
				<img src="/assets/solid-cloud.png" alt="Cloud" className="absolute right-0 bottom-0 w-40 opacity-80" />
			</section>

			{/* Feature Highlights Section */}
			<section className="bg-white py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6">
					<img src="/assets/giant-book-kids.png" alt="Student Records" className="w-32 h-24 object-contain mb-2" />
					<span className="text-2xl font-bold text-primary-500 mb-1">Student Records</span>
				</div>
				<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6">
					<img src="/assets/studying-kids.png" alt="Attendance Tracking" className="w-32 h-24 object-contain mb-2" />
					<span className="text-2xl font-bold text-primary-500 mb-1">Attendance Tracking</span>
				</div>
				<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6">
					<img src="/assets/flying-book-kid.png" alt="Reports" className="w-32 h-24 object-contain mb-2" />
					<span className="text-2xl font-bold text-primary-500 mb-1">Reports</span>
				</div>
			</section>
		</main>
	);
}
