'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import React, { useEffect } from "react"
import { ModeToggle } from "./ModeToggle"
import { usePathname } from "next/navigation"
import { ChevronDown } from "./Icons"
import { signOut, useSession } from "next-auth/react"
import { buttonVariants } from "@/components/ui/button"

const mainLinks = [
    { id: 1, name: 'About Us', link: '/' },
    { id: 2, name: 'Contacts', link: '/contacts' },
    { id: 3, name: 'Blog', link: '/blog' },
    { id: 4, name: 'Support Us', link: '/support-us' },
]

const links = [
    { id: 5, name: 'Art Center', link: '/art-center' },
    { id: 6, name: 'Humanitarian Center', link: '/human-center' },
    { id: 7, name: 'Shelter For Refugees', link: '/shelter' },
    { id: 8, name: 'Our Team', link: '/our-team' },
    { id: 9, name: 'Our Projects', link: '/projects' },
    { id: 10, name: 'Media About Us', link: '/media' },
]


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isEditMode, setEditMode] = React.useState(false)

    const path = usePathname()
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            setEditMode(true)
        }
    }, [session])

    const logout = () => {
        signOut({ callbackUrl: '/' })
    }

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                {isEditMode && <Link className={buttonVariants({ variant: "ghost" })} onClick={logout}>Log out</Link>}
                <NavbarBrand>
                    <Link href={isEditMode ? '/admin' : '/'} className="font-bold text-inherit">ATS267</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    mainLinks.map((link => (
                        <NavbarItem key={link.id}>
                            <Link color={link.link === path ? 'primary' : 'foreground'} href={link.link}>
                                {link.name}
                            </Link>
                        </NavbarItem>
                    )))
                }
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={<ChevronDown fill="currentColor" size={16} />}
                                    radius="sm"
                                    variant="light"
                                >
                                    Features
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                            items={links}
                        >
                            {
                                link => (
                                    <DropdownItem
                                        // @ts-ignore
                                        key={link.id}
                                    >
                                        <Link
                                            // @ts-ignore
                                            color={link.link === path ? 'primary' : 'foreground'}
                                            className="w-full"
                                            // @ts-ignore
                                            href={link.link}
                                            size="lg"
                                        >
                                            {
                                                //@ts-ignore
                                                link.name
                                            }
                                        </Link>
                                    </DropdownItem>
                                )
                            }
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <ModeToggle />
            <NavbarMenu>
                {mainLinks.concat(links).map(link => (
                    <NavbarMenuItem key={link.id}>
                        <Link
                            color={link.link === path ? 'primary' : 'foreground'}
                            className="w-full"
                            href={link.link}
                            size="lg"
                        >
                            {link.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    )
}

export default Navigation
