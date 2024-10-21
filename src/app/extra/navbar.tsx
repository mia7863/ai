"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "@/app/Components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
        <Link href={"xd"}></Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
          <Link href={"xd"}> 1</Link>
          <Link href={"xd"}> 1</Link>
          <Link href={"xd"}> 1</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
            <Link href={"xd"}> 1</Link>
            
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Navbar

