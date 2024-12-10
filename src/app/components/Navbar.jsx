import React from 'react'
import Link from 'next/link'
function Navbar() {
  console.log("navbar")
  return (
    <div className="fixed sidebar flex flex-col h-screen w-1/6 justify-around items-center bg-slate-600 text-white">
                <Link 
        href="/" 
        className="text-lg hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
      >
        📝 Written Posts
      </Link>
      <Link 
        href="/videoPosts" 
        className="text-lg hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
      >
        🎥 Video Posts
      </Link>
      <Link 
        href="/upload" 
        className="text-lg hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
      >
        ⬆️ Upload
      </Link>
 
    </div>
  )
}

export default Navbar