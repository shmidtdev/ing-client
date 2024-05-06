import Container from "@/components/Container";
import SubscriptionForm from "@/components/SubscriptionForm";
import Link from "next/link";
import {CopyRightIcon} from "@/Icons";

export default function Footer() {
  return (
    <div className="bg-primary pt-12 pb-8">
      <Container>
        <h3 className="text-white text-xl">ИНЖ-ИМПОРТ ГРУПП</h3>
        <div className="flex justify-between mt-12 border-white pb-12 border-b-[1px]">
          <div>
            <SubscriptionForm/>
            <div className="mt-8 text-white">
              <div className="flex gap-8 mt-2">
                <div className="my-auto flex flex-col gap-2">
                  <Link href="#" className="text-xl">8 800 555 35 35</Link>
                  <Link href="#" className="text-sm underline text-customBlue block">Обратный звонок</Link>
                  <div className="text-[10px] text-midgray">Режим работы 10:00 - 19:00 (пн-пт)</div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <Link href="#" className="text-xl">info@ing-impgrp.ru</Link>
                <div className="text-[10px] text-midgray">Для вопросов и предложений</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-row text-white justify-between">
              <div>
                <h3 className="text-lg mb-3">Разделы</h3>
                <div className="flex flex-col text-sm text-midgray gap-3">
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-3">Покупателю</h3>
                <div className="flex flex-col text-sm text-midgray gap-3">
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-3">Информация</h3>
                <div className="flex flex-col text-sm text-midgray gap-3">
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                  <Link href="#">Раздел 1</Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col mt-12 text-white text-sm">
                <div className="w-full flex">
                  <div className="min-w-[100px]">ИНН:</div>
                  <div>124124124124</div>
                </div>
                <div className="w-full flex">
                  <div className="min-w-[100px]">ИНН:</div>
                  <div>124124124124</div>
                </div>
                <div className="w-full flex">
                  <div className="min-w-[100px]">ИНН:</div>
                  <div>124124124124</div>
                </div>
                <div className="w-full flex">
                  <div className="min-w-[100px]">ИНН:</div>
                  <div>124124124124</div>
                </div>
                <div className="w-full flex">
                  <div className="min-w-[100px]">ИНН:</div>
                  <div>124124124124</div>
                </div>
                <div className="w-full flex">
                  <div className="min-w-[100px]">ИНН:</div>
                  <div>124124124124</div>
                </div>
              </div>
              <div className="flex mt-auto">
                <img src="/Svg/mastercard.svg" className="w-[80px] h-[45px] object-cover"/>
                <img src="/Svg/visa.svg" className="w-[80px] h-[45px] object-cover"/>
                <img src="/Svg/mir.svg" className="w-[80px] h-[45px] object-cover ml-2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mt-6">
          <div className="flex text-[10px] gap-1">
            <div>
              2024
            </div>
            <div className="my-auto">
              <CopyRightIcon />
            </div>
            <div>
              ИНЖ-ИМПОРТ ГРУПП
            </div>
            <div>|</div>
            <div>Все права защищены</div>
          </div>
        </div>
      </Container>
    </div>
  )
}