'use client';

import logo from '../../public/logo.png';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import one from '../../public/1.png';

const navItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Auctions',
    link: '/auctions',
  },
  {
    text: 'Cars',
    link: '/cars',
  },
  {
    text: 'About Us',
    link: '/about-us',
  },
  {
    text: 'Contact Us',
    link: 'contact-us',
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(true);
  const [userDash, setUserDash] = useState(false);

  return (
    <div className="relative bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex justify-between items-center">
          {/* logo */}
          <div>
            <Image
              src={logo}
              alt="logo"
              className="max-w-[120px] h-auto object-cover"
            />
          </div>

          {/* nav */}
          <ul className="flex items-center gap-x-6">
            {navItems.map((item, i) => (
              <li className="text-base font-medium hover:text-primary" key={i}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}

            {!user && (
              <>
                <li className="text-base font-medium hover:text-primary">
                  <Link href={`/`}>Login</Link>
                </li>
                <li className="text-base font-medium hover:text-primary">
                  <Link href={`/`}>Register</Link>
                </li>
              </>
            )}
          </ul>

          <div className="flex gap-x-4 items-center">
            <div className="flex items-center gap-x-2 text-primary">
              <FaPhoneAlt size={30} className="rotate-12" />
              <div>
                <p className="text-sm">Free Consultation</p>
                <p className="text-xl font-medium">0581035772</p>
              </div>
            </div>

            {user && (
              <div
                className="relative cursor-pointer"
                onClick={() => setUserDash((prev) => !prev)}
              >
                <Image
                  src={one}
                  alt="user"
                  className="w-11 h-11 rounded-full"
                />
                {userDash && (
                  <div className="absolute top-[111%] right-0 bg-white shadow-light w-32 h-16 flex justify-center items-center">
                    <h6 className="hover:text-primary cursor-pointer font-bold text-lg">
                      Logout
                    </h6>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* mobile navigation */}
        <div className=" lg:hidden flex justify-between items-center gap-x-4">
          <div
            className="cursor-pointer hover:text-primary"
            onClick={() => setActive((prev) => !prev)}
          >
            <GiHamburgerMenu size={30} />
          </div>

          <div>
            <Image src={logo} alt="logo" />
          </div>

          <div className="flex gap-x-4 items-center">
            <div className="hidden sm:flex items-center gap-x-2 text-primary">
              <FaPhoneAlt size={30} className="rotate-12" />
              <div>
                <p className="text-sm">Free Consultation</p>
                <p className="sm:text-xl font-medium">0581035772</p>
              </div>
            </div>

            {user && (
              <div
                className="relative cursor-pointer"
                onClick={() => setUserDash((prev) => !prev)}
              >
                <Image
                  src={one}
                  alt="user"
                  className="w-11 h-11 rounded-full"
                />
                {userDash && (
                  <div className="absolute top-[111%] right-0 bg-white shadow-light w-32 h-16 flex justify-center items-center">
                    <h6 className="hover:text-primary cursor-pointer font-bold text-lg">
                      Logout
                    </h6>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {active && (
        <div className="absolute w-full sm:w-1/2 h-screen bg-white z-[10000]">
          <div
            className="absolute top-5 right-5 cursor-pointer hover:text-primary"
            onClick={() => setActive(false)}
          >
            <FaTimes size={30} />
          </div>
          <ul className="flex flex-col items-center gap-y-6 mt-12">
            {navItems.map((item, i) => (
              <li
                className="text-xl font-medium hover:text-primary"
                key={i}
                onClick={() => setActive(false)}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
            {!user && (
              <>
                <li className="text-base font-medium hover:text-primary">
                  <Link href={`/`}>Login</Link>
                </li>
                <li className="text-base font-medium hover:text-primary">
                  <Link href={`/`}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
