import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
      <nav className='flex items-center gap-10 container font-semibold'>
        <Link href='/' className='mr-auto'>
            <BrandLogo />
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
