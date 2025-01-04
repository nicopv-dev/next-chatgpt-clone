"use client";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  PlusIcon,
  ChartBarDecreasingIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsRobot } from "react-icons/bs";

const LINKS = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "Chat",
    icon: ChartBarDecreasingIcon,
    href: "/chat",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-16 sticky top-0 left-0 bg-zinc-50/80 flex flex-col gap-y-5 items-center justify-between py-2 overflow-y-auto">
      {/* top */}
      <span className="w-10 h-10  flex justify-center items-center">
        <BsRobot size={20} />
      </span>

      <div className="flex flex-col gap-y-4 grow">
        <button
          type="button"
          className="w-10 h-10 grid place-content-center border border-zinc-100 rounded-lg shadow"
        >
          <PlusIcon size={20} />
        </button>

        {/* center */}
        <ul className="flex flex-col gap-y-2 py-4">
          {LINKS.map((link, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={link.href}
                className={cn(
                  "h-10 w-10 rounded-lg grid place-content-center ",
                  pathname === link.href
                    ? "bg-zinc-100 text-black shadow border border-zinc-100"
                    : "bg-transparent text-zinc-400"
                )}
              >
                <link.icon size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* botton */}
      <div className="flex flex-col justify-center items-center gap-y-4 divide-y">
        <Link
          href={"#"}
          className={cn(
            "h-10 w-10 rounded-lg grid place-content-center ",
            pathname === "Settings"
              ? "bg-zinc-100 text-black shadow border border-zinc-100"
              : "bg-transparent text-zinc-400"
          )}
        >
          <SettingsIcon size={20} />
        </Link>

        <hr />

        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocLB-J_6MFbakR6JbA9C8qGYOgiUGlAQHZV8lVnnmaagBqy9nluq=s96-c"
          alt="profile"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
