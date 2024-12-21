"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,

  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "lucide-react"
import { TiThMenu } from "react-icons/ti"
import { NavigationMenuDemo } from "./NavigationMenu"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="text-2xl md:hidden">
            <Button>
                <TiThMenu />

            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            
            </SheetHeader>
            <ul>
            <li>
                <Link href=""><NavigationMenuDemo/></Link>
                <Link href="">On Sale</Link>
                <Link href="">New Arrivals</Link>
                <Link href="">Brand</Link>
            </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
