import { getProfile } from "@/app/action/apiAction";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignOut from "./sign-out";

const navigation = [
  { name: "Mange Pet", href: "#", current: false },
  { name: "Veterinary", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

async function getData() {
  return navigation;
}

async function getDataFromBarrer() {
  const req = await getProfile();
  return req;
}

export default async function NavbarTopSite() {
  const data = await getData();
  const userData = await getDataFromBarrer();

  return (
    <header className="z-50">
      <Navbar fluid className="bg-transparent">
        <NavbarBrand href="/">
          <Image
            src="/assets/logo.png"
            width={"60"}
            height={"60"}
            alt="Pet Managment"
            className="ml-3"
          />
        </NavbarBrand>
        <div className="flex md:order-2">
          {userData == undefined ? (
            <>
              <div className=" grid grid-cols-2 gap-2 ">
                <Link href={"/user/login"}>
                  <Button gradientDuoTone="pinkToOrange">Sign In</Button>
                </Link>
                <Link href={"/user/register"}>
                  <Button className="bg-slate-50 border-orange-300 text-purple-500">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  userData != undefined || userData.avatar ? (
                    <>
                      <Avatar
                        alt="User settings"
                        img={userData.avatar}
                        rounded
                        className="mr-5"
                      />
                    </>
                  ) : (
                    <Avatar
                      alt="User settings"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded
                      className="mr-5"
                    />
                  )
                }
              >
                <DropdownHeader>
                  <span className="block text-sm uppercase font-medium ">
                    {userData.name}
                  </span>
                  {/* <span className="block truncate text-sm font-medium">{userData.email}</span> */}
                </DropdownHeader>
                <DropdownItem className="p-0">
                  <Link href="/userprofile" className="w-full p-3 text-left ">
                    My Profile
                  </Link>
                </DropdownItem>
                {/* <DropdownItem><Link href='/pet/addpet' >Add Pet</Link></DropdownItem> */}
                <DropdownItem className="p-0">
                  <Link href="/pet/petlist" className="w-full p-3 text-left">
                    My Pets
                  </Link>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                  <SignOut />
                </DropdownItem>
              </Dropdown>
            </>
          )}

          <NavbarToggle />
        </div>
        <NavbarCollapse className="text-gray-700">
          {data.map((nav) => (
            <Link
              href={nav.href}
              key={nav.name}
              className="text-lg text-gray-500 hover:text-gray-700"
            >
              {nav.name}
            </Link>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
