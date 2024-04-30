import Container from "@/components/Container";
import AddressModal from "@/components/AddressModal";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {CartIcon, HeartIcon, PhoneIcon} from "@/Icons";
import CatalogButton from "@/components/CatalogButton";

export default function Navbar(){
  return (
    <div className="h-[110px]">
      <div className="w-full bg-white fixed z-[100]">
        <div className="bg-midgray py-1 text-sm">
          <Container>
            <div className="flex flex-row justify-between my-1">
              <div className="border-gray border-r-2 w-[300px]">
                <AddressModal />
              </div>
              <nav className="px-10 flex gap-x-4 w-[65%]">
                <Link href="#">Доставка и оплата</Link>
                <Link href="#">Акции и скидки</Link>
                <Link href="#">Гарантии</Link>
                <Link href="#">О компании</Link>
                <Link href="#">Контакты</Link>
              </nav>
              <div className="flex gap-4">
                <Link href="tel:88005553535">8 800 555 35 35</Link>
                <Link href="#">Обратный звонок</Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="my-2 h-[60px] flex flex-col justify-center">
          <Container>
            <div className="flex gap-4 justify-between">
              <div className="flex">
                <div className="my-auto w-[300px]">
                  <Link href="/">ИНЖ-ИМПОРТ ГРУПП</Link>
                </div>
                <div className="my-auto">
                  <CatalogButton />
                </div>
              </div>
              <Input placeholder="Что будем искать?"/>
              <div className="flex gap-4 my-auto">
                <div className="flex flex-col bg-midgray rounded-full w-[40px] hover:cursor-pointer hover:bg-gray">
                  <div className="m-auto">
                    <PhoneIcon/>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mx-auto">
                    <HeartIcon/>
                  </div>
                  <div className="text-[10px]">
                    Избранное
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mx-auto">
                    <CartIcon/>
                  </div>
                  <div className="text-[10px]">
                    Корзина
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}