import { cn } from "@/lib/utils"
import { MegaphoneIcon } from "lucide-react"
import Link from "next/link"
import { ThemeSwitch } from "./theme-switch"
import { buttonVariants } from "./ui/button"

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full py-5">
      <div className="container flex justify-between gap-5">
        <Link href="/" className="flex gap-1 items-center group">
          <MegaphoneIcon className="group-hover:animate-wiggle" />
          <span className="font-bold">Shoutbox</span>
        </Link>

        <div className="flex items-center">
          <Link
            className={cn(buttonVariants({ variant: "link" }))}
            href="/about"
          >
            About
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "secondary" }))}
            href="/signup"
          >
            Sign up / Sign in
          </Link>
          <div className="ml-2">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}
