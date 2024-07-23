// import agent from '@/app/api/agent'
// import CookieConfig from '@/app/lib/cookieconfig';

import CookieConfig from '@/app/lib/cookieconfig';
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
    NavbarLink,
    NavbarToggle,
} from 'flowbite-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navigation = [
    { name: 'Pet Store', href: '#', current: false },
    { name: 'Vet', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Login as supplier', href: '/supplier', current: false },
  ]

async function getData() {
    return navigation
}


// async function getDataFromBarrer() {
//     const req = await agent.Account.checkToken()
//     return req
// }


async function getCookie() {
    const _cookieConfig = new CookieConfig()
    const cookie = _cookieConfig.getToken('jwt');
}


export default async function NavbarTopSite() {
    const data = await getData()
  return (
    <header className='z-50' >
            <Navbar fluid  className='bg-transparent'>
                <NavbarBrand href="/" >
                    <Image src="/assets/logo.png" width={'60'} height={'60'} alt='Pet Managment' className='ml-3' />
                </NavbarBrand>
                <div className="flex md:order-2">
                {/* {(userData.displayName == null) ? <> */}
                    {(null == null) ? <>
                        <div className=' grid grid-cols-2 gap-2 ' >
                            <Link href={'/user/login'} >
                                <Button gradientDuoTone='pinkToOrange'>Sign In</Button>
                            </Link>
                            <Link href={'/user/register'} >
                                <Button className='bg-slate-50 border-orange-300 text-purple-500' >Sign Up</Button>
                            </Link>
                        </div>
                    </> : <>
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded className='mr-5' />
                            }
                        >
                            {/* <DropdownHeader>
                                <span className="block text-sm">{userData.displayName}</span>
                                <span className="block truncate text-sm font-medium">{userData.userName}</span>
                            </DropdownHeader> */}
                            <DropdownItem><Link href='/userprofile' >My Profile</Link></DropdownItem>
                            <DropdownItem><Link href='/pet/addpet' >Add Pet</Link></DropdownItem>
                            <DropdownItem><Link href='/pet/petlist'  >My Pets</Link></DropdownItem>
                            <DropdownDivider />
                            <DropdownItem ><Link href='/user/signout'  >Sign out</Link></DropdownItem>
                        </Dropdown>

                    </>}

                    <NavbarToggle />
                </div>
                <NavbarCollapse className='text-gray-700'>
                    {data.map(nav => (
                        <Link href={nav.href} key={nav.name}  className='text-xl' >{nav.name}</Link>
                    ))}
                </NavbarCollapse>
            </Navbar>
        </header>
  )
}
