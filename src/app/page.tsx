'use client'

import { Typewriter } from 'react-simple-typewriter'
import Intro from 'components/modules/Intro'
import Experience from 'components/modules/Experience'
// import Publications from 'components/modules/Publications'
// import Projects from 'components/modules/Projects'
import Skills from 'components/modules/Skills'
import Contact from 'components/modules/Contact'
import AllProviders from 'components/AllProviders'
import Footer from 'components/ui/theme/Footer'

export default function HomePage() {
	return (
		<AllProviders>
			{/* ===== Hero Section (60% viewport height) ===== */}
			<section className="relative h-[60vh] overflow-hidden font-mono">
				{/* Background */}
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url('/images/hero-bg.png')" }}
				/>
				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-black opacity-70" />

				{/* Terminal‑style Header (Top Left) */}
				<div className="absolute top-4 left-4 z-20">
					<div className="flex items-center space-x-2 md:space-x-3 text-white">
						{/* Name & Prompt */}
						<span className="font-bold text-green-500 text-xl md:text-2xl">
							Gaurav_Raut @ Vision %
						</span>
					</div>
					{/* Quote (Typewriter) Below */}
					<div className="mt-1 text-white text-lg md:text-xl">
						<Typewriter
							words={['“The world has all the answers. Perception helps us make sense.”']}
							cursor
							cursorStyle="|"
							typeSpeed={80}
							deleteSpeed={50}
							delaySpeed={2000}
							loop={false}
						/>
					</div>
				</div>

				{/* Hero Content (Center) */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
					{/* Social Icons (Enlarged) - pushed down */}
					<div className="mt-20 flex items-center justify-center gap-10 mb-4">
						<a
							href="https://scholar.google.com/citations?user=agHWQhEAAAAJ&hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/icons/google-scholar.svg"
								alt="Google Scholar"
								className="h-16 w-16 hover:opacity-80"
							/>
						</a>
						<a
							href="https://github.com/gauraut"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/icons/github.svg"
								alt="GitHub"
								className="h-16 w-16 hover:opacity-80"
							/>
						</a>
						<a
							href="https://linkedin.com/in/gauraut"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/icons/linkedin.svg"
								alt="LinkedIn"
								className="h-16 w-16 hover:opacity-80"
							/>
						</a>
					</div>

					{/* Download Resume Button (Larger) - pushed down */}
					<a
						href="/files/Gaurav_Resume.pdf"
						download
						className="mt-8 inline-block px-10 py-5 bg-green-500 text-white text-xl font-medium rounded hover:bg-green-600 transition"
					>
						Download Resume
					</a>
				</div>
			</section>

			{/* ===== Main Content (commented until images ready) ===== */}
			{/* <Intro /> */}
			<Experience />
			{/* <Publications /> */}
			{/* <Projects /> */}

			{/* ===== GitHub Link ===== */}
			<section className="py-8 text-center">
				<h2 className="text-2xl font-semibold">My GitHub</h2>
				<p>
					Explore my code on{' '}
					<a
						href="https://github.com/gauraut"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:underline"
					>
						GitHub
					</a>
					.
				</p>
			</section>

			{/* ===== Footer & Contact ===== */}
			<Skills />
			<Contact />
			<Footer />
		</AllProviders>
	)
}