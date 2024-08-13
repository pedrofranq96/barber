import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWhithGoogleClick = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu login</DialogTitle>
        <DialogDescription>
          {" "}
          Conecte-se usando sua conta do Google.{" "}
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWhithGoogleClick}
      >
        <Image
          src="/Google.svg"
          width={18}
          height={18}
          alt={"Realizar login com o Google."}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
