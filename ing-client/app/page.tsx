import Image from "next/image";
import Container from "@/components/Container";
import {Button} from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";
import {
  ConsultationIcon,
  DeliveryIcon,
  DesignIcon, HeartIcon,
  ManufactoryIcon,
  RightArrowIcon,
  RightArrowWhiteIcon
} from "@/Icons";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="pt-4">
        <Container>
          <h1 className="text-[87px] font-semibold text-center pb-6">
            Современные строительные материалы
          </h1>
          <div className="bg-primary text-white text-md rounded-md relative overflow-hidden">
            <div>
              <img src="/Images/glass-building.jpg" className="absolute w-[45%] right-0 top-[-400px]"/>
            </div>
            <div className="px-20 py-12 w-[50%] text-sm">
              <div>
                Производство компании KIN LONG основано в 1975 году. Сегодня KIN LONG – это МИРОВОЙ ЛИДЕР по производству фурнитуры для остекления. Качество выпускаемой продукции соответствует международным стандартам ISO 9001, BSI, UKAS. Компания KIN LONG является действующим членом CHINA CONSRUCTION METAL STRUCTURE ASSOCIATION и CHINA BUILDING DECORATION ASSOCIATION. В Российской Федерации продукция компании KIN LONG сертифицирована по системе ГОСТ Р.
              </div>
              <div className="mt-40">
                <Button className="text-lg" variant="secondary">Перейти в каталог</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-12 w-full px-12">
        <Container>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/4">
                    <div>
                      <CategoryCard />
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </section>
      <section className="mt-20 w-full px-12">
        <h2 className="text-4xl mb-8 font-semibold">Условия</h2>
        <div className="flex justify-between gap-4">
          <Link href="#" className="bg-primary text-white flex gap-3 w-full rounded-lg py-4 hover:bg-primary/90">
            <div className="mx-auto flex gap-4 my-auto">
              <ConsultationIcon />
              <div className="my-auto text-xl">
                Консультация
              </div>
            </div>
          </Link>
          <Link href="#" className="bg-primary text-white flex gap-3 w-full rounded-lg py-4 hover:bg-primary/90">
            <div className="mx-auto flex gap-4 my-auto">
              <ManufactoryIcon />
              <div className="my-auto text-xl">
                Производство
              </div>
            </div>
          </Link>
          <Link href="#" className="bg-primary text-white flex gap-3 w-full rounded-lg py-4 hover:bg-primary/90">
            <div className="mx-auto flex gap-4 my-auto">
              <DesignIcon />
              <div className="my-auto text-xl">
                Планирование
              </div>
            </div>
          </Link>
          <Link href="#" className="bg-primary text-white flex gap-3 w-full rounded-lg py-4 hover:bg-primary/90">
            <div className="mx-auto flex gap-4 my-auto">
              <DeliveryIcon />
              <div className="my-auto text-xl">
                Доставка
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="mt-20 w-full">
        <Container>
          <div className="flex justify-between">
            <h2 className="text-4xl mb-8 font-semibold text-start">Мы рекомендуем</h2>
            <Button>
              Перейти в каталог
              <RightArrowWhiteIcon />
            </Button>
          </div>
          <div className="flex justify-between gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </section>
      <section className="mt-20 w-full">
        <Container>
          <div className="bg-primary w-full rounded-lg text-white m-auto text-3xl text-center relative overflow-hidden">
            <img src="/Images/office.jpg" className="absolute top-[-300px] w-screen opacity-50"/>
            <div className="relative z-10 px-16 py-20 w-[60%] text-start">
              <div className="">Получите персональную скидку при покупке продукции на 100000 р., а также ознакомьтесь с другими акциями</div>
              <Button className="relative z-10 mt-12" variant="secondary">Перейти в каталог</Button>
            </div>
          </div>
        </Container>
      </section>
      <section>
        О нас
      </section>
      <section>
        новости
      </section>
      <section className="mt-20 w-full">
        <Container>
          <div className="flex justify-between">
            <h2 className="text-4xl mb-8 font-semibold text-start">Акции</h2>
            <Button>
              Все акции
              <RightArrowWhiteIcon/>
            </Button>
          </div>
          <div className="flex justify-between">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </Container>
      </section>
    </main>
  );
}
