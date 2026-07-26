import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
                            <span className="inline-block w-8 h-8 rounded-lg bg-indigo-600" />
                            Brand
                        </Link> 

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                Home
                            </Link>
                            <Link href="/signup" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                About
                            </Link>
                            <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                Services
                            </Link>
                            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                Contact
                            </Link>
                            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">
                                Sign up
                            </button>
                        </div>


                    </div>
                </div>

            </nav>

        </header>
    )
}

export default Header;