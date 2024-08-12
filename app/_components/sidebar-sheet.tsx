import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"

import { Avatar, AvatarImage } from "./ui/avatar"
import Image from "next/image"

const SideBarButton = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid p-5">
        <Avatar>
          <AvatarImage src="/avatar.png" />
        </Avatar>

        <div>
          <p className="font-bold">Josh Besus</p>
          <p className="text-xs">j@fullstack.com.br</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <div className="flex items-center gap-2">
                <HomeIcon size={18} />
                Início
              </div>
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost" asChild>
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} />
            Agendamentos
          </div>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair
        </Button>
      </div>
    </SheetContent>
  )
}

export default SideBarButton
