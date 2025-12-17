import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-sm sm:text-md uppercase">
          create-bawo-frontend
        </Link>

        {/* Desktop Menu */}
      
        <div className="hidden md:flex gap-6 text-sm sm:text-md uppercase font-bold">
  
          
       

          <Link to="/docs">Docs</Link>
           <Link onClick={() => setOpen(false)} to="/contribute">
            Contribute
          </Link>
           <Link onClick={() => setOpen(false)} to="/support">
           Support
          </Link>
          <Link to="/releasenotes">Release Note</Link>
          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>
 
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm uppercase font-bold py-3 ">
       
       <hr className="h-px  w-200px bg-gray-600 border-0" />

          <Link onClick={() => setOpen(false)} to="/docs">
            Docs
          </Link>
          <Link onClick={() => setOpen(false)} to="/contribute">
            Contribute
          </Link>
           <Link onClick={() => setOpen(false)} to="/support">
           Support
          </Link>
          <Link onClick={() => setOpen(false)} to="/releasenotes">
            Release Note
          </Link>
          <a
            href="https://github.com/Joebakid/create-bawo-frontend"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
