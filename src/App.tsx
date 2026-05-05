import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<div className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/announcements" element={<Announcements />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}
