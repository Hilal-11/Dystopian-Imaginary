
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { NavLink } from "react-router-dom"
import { IoSearchSharp } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import logo from '../../dystopLogo.png'
export const Navbar = () => {

  const navigate = useNavigate()
  return (
    <HeroUINavbar maxWidth="2xl" className="fixed z-50">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <div onClick={() => navigate('/')} className="flex items-start justify-center">
            <img className="w-[48px] relative lg:w-[55px]" src={logo} alt="error" />
            <h1 className="hidden lg:block text-md Inter-medium z-50 relative -left-3 leading-tight bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"><span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text text-[12px] relative top-2 left-2 text-center">Imaginary</span><br /> dystopian</h1>
          </div>
        <div className="hidden lg:flex gap-6 px-20 justify-start items-end Inter-medium z-50 relative top-1 left-2 ">
          {siteConfig.navItems.map((item) => (
            <NavLink to={item.href} key={item.href} style={({ isActive }) => ({
              color: isActive ? '#F97316' : '',
              fontWeight: isActive ? '600' : '',
            })}>
              <NavbarItem className="text-md flex items-center justify-center gap-2 cursor-pointer" key={item.href}>
                <item.icon/>
                {item.label}
              </NavbarItem>
            </NavLink>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full z-50"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <div className="relative flex items-center justify-center Inter-medium mr-3">
            <input className="outline-none dark:bg-zinc-950 bg-neutral-100 rounded-md px-3 py-[6px] text-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" type="text" placeholder="Search imagination" />
            <span className="absolute right-2 text-neutral-500"><IoSearchSharp /></span>
          </div>

          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <span className="text-neutral-500 text-xl dark:text-neutral-400 px-2 py-2 rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaGithub className="" /></span>
          </Link>
          <ThemeSwitch className="text-gray-600 text-lg dark:text-white px-[7px] py-[7px] rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="center">
        <Link isExternal href={siteConfig.links.github}>
          <FaGithub className="text-neutral-600 text-lg dark:text-neutral-400 rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
        </Link>
        <ThemeSwitch className="text-black text-lg dark:text-white px-2 py-2 rounded-2xl hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"/>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-0 mt-4 flex flex-col gap-2 Inter-medium z-50">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavLink to={item.href} key={item.href} style={({ isActive }) => ({
              color: isActive ? '#F97316' : '',
              fontWeight: isActive ? '600' : '',
            })}>
            <NavbarMenuItem className="flex items-center justify-start gap-2" key={`${item}-${index}`}>
                <item.icon></item.icon>
                {item.label}
            </NavbarMenuItem>
            </NavLink>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
