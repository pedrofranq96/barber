"use client"

import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"
import SignInDialog from "./sign-in0-dialog"

const SideBarButton = () => {
  const handleLoginWhithGoogleClick = () => signIn("google")
  const { data } = useSession()
  const handleLogOutClick = () => signOut()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
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
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  height={18}
                  width={18}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button
          variant="ghost"
          className="justify-start gap-2"
          onClick={handleLogOutClick}
        >
          <LogOutIcon size={18} />
          Sair
        </Button>
      </div>
    </SheetContent>
  )
}

export default SideBarButton
