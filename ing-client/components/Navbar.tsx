import Container from "@/components/Container";
import AddressModal from "@/components/AddressModal";
import Link from "next/link";
import {HeartIcon, PhoneIcon} from "@/Icons";
import CatalogOverlay from "@/components/CatalogOverlay";
import CartOverlay from "@/components/CartOverlay";
import HeaderSearch from "@/components/HeaderSearch";

export default function Navbar(){
  return (
    <div className="h-[120px]">
      <div className="w-screen drop-shadow-sm fixed z-[1000]">
        <div className="bg-midgray py-1 text-sm h-[40px] flex flex-col justify-center pr-8">
          <Container>
            <div className="flex flex-row justify-between h-fit">
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
        <div className="h-[80px] flex flex-col justify-center bg-white pr-8">
          <Container>
            <div className="flex gap-4 justify-between">
              <div className="flex">
                <div className="my-auto w-[300px]">
                  <Link href="/" className="w-fit flex gap-4">
                    <img src="/favicon.svg" className="h-[40px]"/>
                    <div className="my-auto">ИНЖ ИМПОРТ ГРУПП</div>
                  </Link>
                </div>
              </div>
              <CatalogOverlay />
              <HeaderSearch />
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
                <CartOverlay />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}