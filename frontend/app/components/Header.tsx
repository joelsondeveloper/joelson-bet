import Image from "next/image"

import { LuWallet } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";

import logoBet from "@/public/logobet.jpeg"

const Header = () => {
  return (
    <header className="bg-navy-800 flex justify-between items-center px-10 py-4">
      <div className="logo-section flex items-center gap-3.5">
        <Image src={logoBet} alt="Logo da Joelson Bet" className="w-10 aspect-square rounded-xl"/>
        <h1 className="text-2xl font-bold">Joelson Bet</h1>
      </div>
      <div className="user-section flex items-center gap-6">
        <div className="balance flex items-center gap-2 text-success">
          <LuWallet size="1.25rem"/>
          <div className="saldo flex gap-1 font-semibold">
            <p>Saldo:</p>
            <span>R$ 0,00</span>
          </div>
        </div>
        <div className="user bg-navy-700 w-10 aspect-square rounded-full flex items-center justify-center">
          <HiOutlineUser size="50%" className="text-navy-600"/>
        </div>
      </div>
    </header>
  )
}

export default Header
