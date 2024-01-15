'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header>
            <h1><Link href="/">Rojo</Link></h1>
            <nav>
                <Link className={pathname === '/me' ? 'active' : ''} href="/me">Me</Link>
                <Link className={pathname === '/blog' ? 'active' : ''} href="/blog">Blog</Link>
                <Link className={pathname === '/projects' ? 'active' : ''} href="/projects">Projects</Link>
                <Link className={pathname === '/contact' ? 'active' : ''} href="/contact">Contact</Link>
            </nav>
            <hr />
        </header>
    );
};
