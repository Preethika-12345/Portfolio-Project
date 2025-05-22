import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-extrabold tracking-wide text-black">Preethika P</a>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8 text-lg font-medium">
                        <li><a href="/" className="hover:text-black transition">Home</a></li>
                        <li><a href="/#about" className="hover:text-black transition">About</a></li>
                        <li><a href="/#projects" className="hover:text-black transition">Projects</a></li>
                        <li><a href="/#resume" className="hover:text-black transition">Resume</a></li>
                        <li><a href="/#contact" className="hover:text-black transition">Contact</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden focus:outline-none">
                    <Bars3Icon className="h-7 w-7 text-white" />
                </button>
            </div>

            {/* Mobile Nav */}
            {toggleMenu && (
                <nav className="md:hidden bg-primary px-5 pb-5">
                    <ul className="flex flex-col gap-4 text-lg font-medium">
                        <li><a href="/" onClick={() => setToggleMenu(false)} className="hover:text-black transition">Home</a></li>
                        <li><a href="/#about" onClick={() => setToggleMenu(false)} className="hover:text-black transition">About</a></li>
                        <li><a href="/#projects" onClick={() => setToggleMenu(false)} className="hover:text-black transition">Projects</a></li>
                        <li><a href="/#resume" onClick={() => setToggleMenu(false)} className="hover:text-black transition">Resume</a></li>
                        <li><a href="/#contact" onClick={() => setToggleMenu(false)} className="hover:text-black transition">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
