import { Link } from "react-router-dom";

const systemLinks = [
	{ name: "Student Records", to: "/" },
	{ name: "Attendance", to: "/" },
	{ name: "Offline Access", to: "/" },
];
const exploreLinks = [
	{ name: "Home", to: "/" },
	{ name: "About Us", to: "/about" },
	{ name: "Announcements", to: "/announcements" },
	{ name: "Contact Us", to: "/contact" },
];
const communityLinks = [
	{ name: "Day Care Personnel", to: "/" },
	{ name: "Barangay San Antonio de Padua I", to: "/" },
	{ name: "Parents & Guardians", to: "/" },
	{ name: "CSWD Office", to: "/" },
];

const socialLinks = [
	{ name: "X", icon: "/x-icon.png", url: "#" },
	{ name: "Instagram", icon: "/instagram-icon.png", url: "#" },
	{ name: "YouTube", icon: "/youtube-icon.png", url: "#" },
	{ name: "LinkedIn", icon: "/linkedin-icon.png", url: "#" },
];

export default function Footer() {
	return (
		<footer className="bg-white border-t border-neutral-100 pt-6 pb-2 px-4 md:px-8">
			<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 max-w-6xl mx-auto">
				<div className="flex flex-col items-start gap-4">
					<img
						src="/barangay-seal.png"
						alt="Official Seal of Barangay San Antonio de Padua I"
						className="h-12 w-12 rounded-full object-cover"
					/>
					<div className="flex gap-3 mt-2">
						{socialLinks.map((s) => (
							<a
								key={s.name}
								href={s.url}
								target="_blank"
								rel="noopener noreferrer"
								className="min-w-[44px] min-h-[44px] flex items-center justify-center"
								aria-label={s.name}
							>
								<img src={s.icon} alt={s.name} className="h-6 w-6" />
							</a>
						))}
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 flex-1 sm:grid-cols-3">
					<div>
						<h3 className="font-body font-bold text-sm text-neutral-900 uppercase tracking-wide mb-4">System</h3>
						<ul className="space-y-1">
							{systemLinks.map((l) => (
								<li key={l.name}>
									<Link to={l.to} className="font-body text-base text-neutral-700 hover:text-brand-blue min-w-[44px] min-h-[44px] inline-block">
										{l.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="font-body font-bold text-sm text-neutral-900 uppercase tracking-wide mb-4">Explore</h3>
						<ul className="space-y-1">
							{exploreLinks.map((l) => (
								<li key={l.name}>
									<Link to={l.to} className="font-body text-base text-neutral-700 hover:text-brand-blue min-w-[44px] min-h-[44px] inline-block">
										{l.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="font-body font-bold text-sm text-neutral-900 uppercase tracking-wide mb-4">Community</h3>
						<ul className="space-y-1">
							{communityLinks.map((l) => (
								<li key={l.name}>
									<Link to={l.to} className="font-body text-base text-neutral-700 hover:text-brand-blue min-w-[44px] min-h-[44px] inline-block">
										{l.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
