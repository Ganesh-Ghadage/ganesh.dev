"use client"

import { Link } from "react-scroll";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon, MenuIcon, CircleUserRound, BriefcaseBusiness, FolderGit2, Send } from "lucide-react";

const StackingNavbar = () => {
const [expanded, setExpanded] = useState(false);

const items = [
  { to: "#", icon: <MenuIcon />},
  { to: "home", icon: <HomeIcon />, label: "Home"},
  { to: "about", icon: <CircleUserRound />, label: " About" },
  { to: "work", icon: <BriefcaseBusiness />, label: "Work" },
  { to: "projects", icon: <FolderGit2 />, label: "Projects" },
  { to: "contact", icon: <Send />, label: "Contact" },
];

return (
  <div
    className="flex flex-col md:flex-row items-start md:justify-center gap-y-2 md:gap-x-2"
    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
  >
    {items.map((item, index) => (
      <StackingNavbarItem
        to={item.to}
        expanded={expanded}
        key={index}
        index={index}
      >
        <div className="flex gap-2">
          <h1>{item.icon}</h1>
          <h1 className={`${item?.label ? "flex" : "hidden"}`}>{item?.label}</h1>
        </div>
      </StackingNavbarItem>
    ))}
  </div>
);
};

const StackingNavbarItem = ({
to,
children,
style,
expanded,
index,
}: {
to: string;
children: React.ReactNode;
style?: React.CSSProperties;
expanded: boolean;
index: number;
}) => {
return (
  <motion.div
    initial={{ x: -200 * index }}
    animate={{ x: expanded ? 0 : -200 * index }}
    transition={{
      duration: 0.6,
      ease: "circInOut",
      delay: 0.1 * index,
      type: "spring",
    }}
    style={{ zIndex: 100 - index }}
  >
      <Link to={to} smooth={true} duration={500} 
            style={style}
            className="flex items-center text-sm px-3 py-2 rounded-3xl bg-[#b0aaaa3f] dark:bg-[#f7fcfc3f] no-underline text-black backdrop-blur-lg hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
      >
            {children}
      </Link>
  </motion.div>
);
};

export { StackingNavbar };