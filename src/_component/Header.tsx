"use client";

import Image from "next/image";
import Container from "./Container";
import { Grid, LayoutGrid, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <>
      <nav className="py-5 shadow-md ">
        <Container>
          <div className="flex justify-between">
            <div className="flex gap-8 items-center">
              <Image src="/logo.png" alt="logo" width={150} height={100} />

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <h2 className="md:flex hidden items-center rounded-full border py-2 px-10 gap-2 bg-slate-300 cursor-pointer">
                    <LayoutGrid /> Catagory
                  </h2>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="md:flex hidden items-center gap rounded-full border py-2 px-5">
                <Search />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none"
                />
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <h2 className="flex items-center gap-2 text-lg">
                <ShoppingCart /> 0
              </h2>
              <Button>Log in</Button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;
