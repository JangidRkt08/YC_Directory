import { auth, signOut, signIn } from "@/auth";

import { BadgePlus, LogOut } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span className="max-sm:hidden">create</span>
                <BadgePlus className="size-5 sm:hidden" />
              </Link>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-5 sm:hidden text-red-500" />
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10 ">
                  <AvatarImage
                    src={session?.user?.image || "/default-avatar.png"}
                    alt={session?.user?.name || "User Avatar"}
                  />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
