"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navber({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item={'Home'}>

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item={'Our Courses'}>
                    <div className="flex flex-col space-y-4">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/course">Basic of Music Theory</HoveredLink>
                        <HoveredLink href="/course">Advance Compositions</HoveredLink>
                        <HoveredLink href="/course">Song Writing</HoveredLink>
                        <HoveredLink href="/course">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item={'Contact Us'}>

                    </MenuItem>
                </Link>
                <Link href={'/signup'}>
                    <MenuItem setActive={setActive} active={active} item={'Signup'}>

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navber