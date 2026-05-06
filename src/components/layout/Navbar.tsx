import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const navLinks = [
	{ name: "Home", to: "/" },
	{ name: "About Us", to: "/about" },
	{ name: "Announcements", to: "/announcements" },
	{ name: "Contact Us", to: "/contact" },
];

export default function Navbar() {
	const location = useLocation();
	return (
		<header className="sticky top-0 z-50 bg-white shadow-nav">
			<div className="flex items-center justify-between px-4 py-2 md:px-8">
				<div className="flex items-center gap-2 min-w-[44px] min-h-[44px]">
					<img
						src="/barangay-seal.png"
						alt="Official Seal of Barangay San Antonio de Padua I"
						className="h-10 w-10 rounded-full object-cover"
					/>
					<div className="leading-tight">
						<span className="font-body font-bold text-2xl text-brand-blue tracking-wide">DCC<span className="text-brand-red">MS</span></span>
						<div className="font-body text-xs text-neutral-700 -mt-1">
							Day Care Center<br />Management System
						</div>
					</div>
				</div>
				<nav className="hidden md:flex gap-6 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={clsx(
								"font-body font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
								location.pathname === link.to && "font-bold"
							)}
						>
							{link.name}
						</Link>
					))}
				</nav>
				<Link
					to="/login"
					className="ml-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-body font-semibold rounded-full px-5 py-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
				>
					Login
				</Link>
			</div>
			{/* Cloud row — brand-blue bg makes white clouds visible */}
			<div className="bg-brand-blue flex items-start overflow-hidden" aria-hidden="true">
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-72" />
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-80 -ml-16" />
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-72 -ml-16" />
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-96 -ml-20" />
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-80 -ml-20" />
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-72 -ml-16" />
				<img src="/assets/solid-cloud.png" alt="" role="presentation" className="flex-none w-96 -ml-20" />
			</div>
		</header>
	);
}
