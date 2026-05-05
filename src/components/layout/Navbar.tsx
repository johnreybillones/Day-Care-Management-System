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
		<header className="relative bg-white">
			<div className="relative z-10 flex items-center justify-between px-4 py-2 md:px-8">
				<div className="flex items-center gap-2 min-w-[44px] min-h-[44px]">
					<img
						src="/logo.png"
						alt="Day Care Center Seal"
						className="h-10 w-10 rounded-full object-cover"
					/>
					<div className="leading-tight">
						<span className="font-bold text-2xl text-primary-600 tracking-wide">DCC<span className="text-red-600">MS</span></span>
						<div className="text-xs text-primary-500 -mt-1">
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
								"font-semibold text-primary-500 hover:text-primary-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
								location.pathname === link.to && "text-primary-600 font-bold"
							)}
						>
							{link.name}
						</Link>
					))}
				</nav>
				<Link
					to="/login"
					className="ml-4 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-lg px-5 py-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
				>
					Login
				</Link>
			</div>
			{/* Cloud SVG divider */}
			<div className="absolute left-0 right-0 bottom-0 z-0">
				<svg viewBox="0 0 1440 100" width="100%" height="60" className="w-full h-[60px]" preserveAspectRatio="none">
					<path
						d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z"
						fill="#1da1f2"
					/>
				</svg>
			</div>
		</header>
	);
}
