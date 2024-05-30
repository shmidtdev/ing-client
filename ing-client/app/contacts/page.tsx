import Container from "@/components/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {MailIcon, PhoneCallIcon} from "lucide-react";
import Link from "next/link";
import YandexMap from "@/components/YandexMap";

export default function Contacts() {
  return (
    <div className="bg-customGray pb-12">
      <Container>
        <div className="pt-8 pb-8">
          <div className="p-8 bg-white rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbLink href="../contacts">Контакты</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl mt-4 font-medium">Как с нами связаться</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 flex flex-col gap-6">
          <div className="w-full text-left">
            <div className="flex justify-between">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="font-semibold">
                      ИНЖ ИМПОРТ ГРУПП
                    </div>
                    <div className="flex gap-3">
                      <span><PhoneCallIcon/></span>
                      <Link href="tel:89622217756">+7 962 221 77 56</Link>
                    </div>
                    <div className="flex gap-3">
                      <span><MailIcon/></span>
                      <Link href="mailto:info@ing-impgrp.ru">info@ing-impgrp.ru</Link>
                    </div>
                    <div>
                      г. Хабаровск, проспект 60-летия октября, д. 156 , пом. 3.1
                    </div>
                    <div>
                      Режим работы 10:00 - 19:00 (пн-пт)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-12 text-sm">
                      <div className="w-full flex mb-2">
                        <div>ООО «ИНЖ-ИМПОРТ-ГРУПП»</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">ИНН:</div>
                        <div>2700032481</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">КПП:</div>
                        <div>270001001</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">ОГРН:</div>
                        <div>1242700009166</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">Расчетный счет :</div>
                        <div>40702810070000033313</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">Корр. счет:</div>
                        <div>30101810600000000608</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">БИК банка:</div>
                        <div>040813608</div>
                      </div>
                      <div className="w-full flex">
                        <div className="min-w-[150px]">Банк:</div>
                        <div>ДАЛЬНЕВОСТОЧНЫЙ БАНК ПАО СБЕРБАНК</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <YandexMap/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}