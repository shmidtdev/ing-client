import Container from "@/components/Container";
import AddressModal from "@/components/AddressModal";
import Link from "next/link";
import {HeartIcon, PhoneIcon} from "@/Icons";
import CatalogOverlay from "@/components/CatalogOverlay";
import CartOverlay from "@/components/CartOverlay";
import HeaderSearch from "@/components/HeaderSearch";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import ContactForm from "@/components/ContactForm";
import AuthorizationModal from "@/components/authorization/AuthorizationModal";
import CallModal from "@/components/call/CallModal";

export default function Navbar() {
  return (
    <div className="h-[120px]">
      <div className="w-screen drop-shadow-sm fixed z-[1000]">
        <div className="bg-midgray py-1 text-sm h-[40px] flex flex-col justify-center pr-5">
          <Container>
            <div className="flex flex-row justify-between h-fit gap-4">
              <div className="border-gray border-r-2 w-[30%]">
                г. Хабаровск, проспект 60-летия октября, д. 156 , пом. 3.1
              </div>
              <nav className="px-4 flex gap-x-4 w-[45%]">
                <Link href="../delivery">Доставка и оплата</Link>
                <Link href="../actions">Акции и скидки</Link>
                <Link href="../about">О компании</Link>
                <Link href="../contacts">Контакты</Link>
              </nav>
              <div className="flex gap-12 w-[25%] justify-end">
                <Link href="tel:89622217756">+7 962 221 77 56</Link>
                <CallModal />
              </div>
            </div>
          </Container>
        </div>
        <div className="h-[80px] flex flex-col justify-center bg-white pr-4">
          <Container>
            <div className="flex gap-4 justify-between w-full">
              <div className="flex w-[30%] justify-between">
                <div className="flex">
                  <div className="my-auto w-fit">
                    <Link href="/" className="w-[250px] flex gap-4">
                      <img src="/favicon.svg" className="h-[40px]"/>
                      <div className="my-auto">ИНЖ ИМПОРТ ГРУПП</div>
                    </Link>
                  </div>
                </div>
                <CatalogOverlay/>
              </div>
              <div className="w-[45%]">
                <HeaderSearch/>
              </div>
              <div className="flex gap-4 my-auto w-[25%] justify-between">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex flex-col bg-midgray rounded-full w-[40px] h-[40px] hover:cursor-pointer hover:bg-gray my-auto">
                      <div className="m-auto">
                        <PhoneIcon/>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <Link href="mailto:info@ing-impgroup.ru"
                              className="text-sm font-semibold block">info@ing-impgroup.ru</Link>
                        <Link href="tel:89622217756" className="text-sm block">
                          +7 962 221 77 56
                        </Link>
                        <div>
                          <h3 className="my-4">Заказать звонок</h3>
                          <ContactForm/>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Link href="../wishList" className="flex flex-col my-auto">
                  <div className="mx-auto">
                    <HeartIcon/>
                  </div>
                  <div className="text-[10px]">
                    Избранное
                  </div>
                </Link>
                <CartOverlay/>
                <AuthorizationModal/>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}