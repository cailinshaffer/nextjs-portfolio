// import link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            {/* <div className="logo">
                <h1>WebDev List</h1>
            </div> */}

            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}