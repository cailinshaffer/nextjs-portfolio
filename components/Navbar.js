// import link from next
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className='navBar'>
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
        </div>
    )
}

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        <Link class="nav-link" href="/projects">projects</Link>
        <Link class="nav-link" href="/about">About Me</Link>
      </div>
    </div>
  </div>
</nav> */}

