

import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { ChevronDown,  FileText, GraduationCap, LayoutDashboard, PenBox, PlusCircle, StarsIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'
import Image from 'next/image'

const Header = async () => {
  await checkUser()

  return (
    <header className="fixed top-0 w-full glass z-50 ">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/" className='flex items-center gap-1'>
          <Image
            src='/logo.svg'
            width={30}
            height={30}
            alt='NeoPrep.ai'
            // className='h-12 py-1 w-auto object-contain'
          />
          <h1 className='font-bold'>NeoPrep</h1>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="link">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>
          

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className="h-4 w-4 mr-2" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Generate AI courses</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign in</Button>
            </SignInButton>
          </SignedOut>

          
            
                      <SignedIn>
                          <UserButton 
                            appearance={{
                              elements:{
                                avatarBox:"w-10 h-10",
                                userButtonPopoverCard:"shadow-xl",
                                userPreviewMainIdentifier:"font-semibold"
                              }
                            }}
                            afterSignOutUrl='/dashboard'
                            />
                        </SignedIn>

          
        </div>
      </nav>
    </header>
  )
}

export default Header
