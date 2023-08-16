"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { CalendarDays, Group, LayoutDashboard, User2 } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/members`,
      label: "Members",
      active: pathname === `/members`,
      icon: <User2 size={20} />,
    },
    {
      href: `/departments`,
      label: "Departments",
      active: pathname === `/departments`,
      icon: <Group size={20} />,
    },
    {
      href: `/events`,
      label: "Events",
      active: pathname === `/events`,
      icon: <CalendarDays size={20} />,
    },
  ];

  return (
    <div className="fixed h-full border-r-2 w-[250px]">
      <nav className="flex flex-col p-4">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <Image src="/icon.jpg" width={40} height={40} alt="Buta" />
          Buta Group Dashboard
        </Link>
        <span className="text-xs text-gray-500">CORE</span>
        <div className="flex flex-col gap-2">
          <Link
            key="/"
            href="/"
            className={cn(
              "flex items-center gap-1 text-lg font-medium transition-colors hover:text-primary",
              pathname === `/`
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
        </div>
        <span className="text-xs text-gray-400 mt-6 mb-1">MENU</span>
        <div className="flex flex-col gap-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-1 text-lg font-medium transition-colors hover:text-primary",
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
