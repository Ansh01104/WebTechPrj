import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
 
  IconBrandX,
  IconHome,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconStar, 
  IconMail,IconNewSection,IconPhone
} from "@tabler/icons-react";
 
 

const Dock = () => {
 
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Features",
      icon: (
        <IconStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Feature1",
    },
    {
      title: "Demo",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Thescroll",
    },
    
    {
      title: "Call",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/servalabs/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "x.com",
    },
     
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "http://wa.me/919265769706",
    },
    {
      title: "Mail",
      icon: (
        <IconMail   className=" h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href:"mailto:team@servalabs.com",
      
    },
  ];
  return (
    (<div className="flex items-center justify-center h-auto w-full">
      <FloatingDock
        
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
};
export default Dock;