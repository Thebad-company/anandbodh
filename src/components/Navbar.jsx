"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
            <div className="container">
                <div className="nav-inner">
                    <Link href="/" className="nav-logo" onClick={closeMenu}>
                        <Image
                            src="/AnandBodhLogo-1536x512.jpg"
                            alt="Anandbodh Logo"
                            width={132}
                            height={44}
                            className="nav-logo-img"
                            priority
                        />
                    </Link>

                    <div className="nav-links">
                        <Link href="/programs">Programs</Link>
                        <Link href="/community">Community</Link>
                        <Link href="/insights">Insights</Link>
                        <Link href="/about">About</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className="nav-right">
                        <Link href="/search" className="nav-signin">
                            🔍
                        </Link>
                        <Link href="/signin" className="nav-signin">
                            Sign In
                        </Link>
                        <Link
                            href="/login"
                            className="btn btn-primary nav-join desktop-only"
                        >
                            Login →
                        </Link>

                        <button
                            className={`hamburger ${isMenuOpen ? "open" : ""}`}
                            id="hamburger"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} id="mobile-menu">
                <Link href="/programs" onClick={closeMenu}>Programs</Link>
                <Link href="/community" onClick={closeMenu}>Community</Link>
                <Link href="/insights" onClick={closeMenu}>Insights</Link>
                <Link href="/about" onClick={closeMenu}>About</Link>
                <Link href="/careers" onClick={closeMenu}>Careers</Link>
                <Link href="/search" onClick={closeMenu}>Search</Link>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
                <Link href="/signin" className="mobile-signin" onClick={closeMenu}>
                    Sign In
                </Link>
                <Link
                    href="/login"
                    className="btn btn-primary"
                    onClick={closeMenu}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
