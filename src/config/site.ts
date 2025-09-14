export type SiteConfig = typeof siteConfig;
import { BsStars } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
export const siteConfig = {
  name: "Prime Deck",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [

    {
      label: "Explore Dystopian Gallary",
      href: "/explore",
      icon: GrGallery
    },
    {
      label: "Generate",
      href: "/generate",
      icon: BsStars

    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: MdOutlineSubscriptions

    },
    {
      label: "Blogs",
      href: "/blogs",
      icon: MdOutlineReviews
      
    },
    {
      label: "Contect",
      href: "/contect",
      icon: BsMicrosoftTeams

    },
  ],
  navMenuItems: [
    {
      label: "Explore Dystopian Gallary",
      href: "/explore",
      icon: GrGallery
    },
    {
      label: "Generate",
      href: "/generate",
      icon: BsStars

    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: MdOutlineSubscriptions

    },
    {
      label: "Blogs",
      href: "/blogs",
      icon: MdOutlineReviews

    },    {
      label: "Contect",
      href: "/contect",
      icon: BsMicrosoftTeams

    },
  ],
  links: {
    github: "https://github.com/Hilal-11",
    docs: "https://heroui.com",
  },
};