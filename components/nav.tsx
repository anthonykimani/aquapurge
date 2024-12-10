"use client";

import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AquaPurgeLogo from "@/public/img/aquapurge.png";
import { NavigationMenuContainer } from "./navigation-menu";
import { Button } from "./ui/button";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Clean Ups", href: "/cleanups", current: false },
  // { name: "Mint", href: "/mint", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Team", href: "/team", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 transition-all duration-300 ${
        scrolled
          ? "bg-gray-200 backdrop-filter backdrop-blur-md bg-opacity-40"
          : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center justify-between w-full md:px-20">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image src={AquaPurgeLogo} className="w-[50px]" alt="" />
                  <h2 className="font-semibold font-jakarta">AQUAPURGE</h2>
                </Link>

                <div className="hidden sm:block">
                  <NavigationMenuContainer />
                </div>

                <Button variant="default" className="hidden sm:block bg-blue-500 hover:bg-blue-600">Launch APP</Button>
              </div>
              <div className="flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
