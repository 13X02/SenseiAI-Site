"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={60}
          height={60}
          className='object-contain'
        />
        <p className='logo_text'>SenseiAI</p>
      </Link>

      {/* Desktop Navigation */}
      
    </nav>
  );
};

export default Nav;