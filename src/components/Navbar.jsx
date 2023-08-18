import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <nav className={`w-full flex items-center pt-8 fixed top-0 z-20 ${
            scrolled ? "bg-white" : "bg-transparent"
          }`}>
            <div className="w-full flex justify-around items-center max-w-7xl box-border m-auto
            ">
                <Link to="/" className=" "
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    {/* <img src="/src/assets/logo.png" className='w-28 object-contain' /> */}
                    <p className="ml-8 lg:ml-0 text-[32px] font-normal">Banouq Med Yassine</p>
                </Link>
                <ul className='list-none hidden lg:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                    <li
                    key={nav.id}
                    className={`${
                        active === nav.title ? "text-gray-500" : "text-black"
                    } hover:text-gray-500 hover:underline-offset-[1rem] hover:underline text-[24px] font-normal cursor-pointer transition-all ease-in-out duration-300`}
                    onClick={() => setActive(nav.title)}
                    >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
                
                </ul>

            <div className='lg:hidden flex flex-1 justify-end items-center'>
            <img
                src={toggle ? "/src/assets/close.svg" : "/src/assets/menu.svg"}
                alt='menu'
                className='w-[28px] h-[28px] object-contain fill-black mr-8'
                onClick={() => setToggle(!toggle)}
            />

          <div
                className={`${
                !toggle ? "hidden" : "flex"
                } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                    <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-gray-600 ${
                        active === nav.title ? "text-secondary" : "text-black"
                    }`}
                    onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                    }}
                    >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;