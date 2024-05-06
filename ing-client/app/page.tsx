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
import ArticleCard from "@/components/ArticleCard";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ContactForm from "@/components/ContactForm";
import CategoryCarousel from "@/components/sections/CategoryCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-20">
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
      <CategoryCarousel />
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
              <Button className="relative z-10 mt-12 flex" variant="secondary">
                <div>
                  Перейти в каталог
                </div>
                <RightArrowIcon />
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-20 w-full bg-neutral-100 p-12">
        <Container>
          <div className="flex flex-col">
            <h2 className="text-4xl mb-8 font-semibold text-center">О нас</h2>
            <div className="text-center">Компания KIN LONG занимается разработкой и производством архитектурных систем крепления стекла вот уже более 40 лет. Мы проектируем и выпускаем высококачественную, а иногда уникальную продукцию: спайдерные и вантовые системы для планарного остекления, фурнитуру для окон и дверей из ПВХ и алюминиевого профиля, широкий ассортимент креплений для цельностеклянных перегородок, дверей и душевых кабин, комплектующие для стеклянных козырьков, лестничных ограждений и ванных комнат. В номенклатуру выпускаемых изделий входит более 10 000 наименований продукции. Разработанные и запатентованные нами технические решения широко используются нашими партнерами по всему миру. Последовательно развиваясь в течение многих лет, компания KIN LONG завоевала доверие профессионалов в строительной сфере и лучшее тому подтверждение – многочисленные здания и сооружения по всему миру, построенные с использованием продукции компании KIN LONG.</div>
            <Button className="flex w-fit mt-20 mx-auto">
              <div>Подробнее</div>
              <RightArrowWhiteIcon />
            </Button>
          </div>
        </Container>
      </section>
      <section className="mt-20 w-full">
        <Container>
          <div>
            <h2 className="text-4xl mb-8 font-semibold text-start">Наши новости</h2>
            <div className="flex flex-wrap w-full justify-between gap-3">
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
          <div className="flex">
            <Button className="mt-20 mx-auto">
              <div>Больше новостей</div>
              <RightArrowWhiteIcon />
            </Button>
          </div>
        </Container>
      </section>
      <section className="mt-20 w-full">
        <Container>
          <div className="flex justify-between">
            <h2 className="text-4xl mb-8 font-semibold text-start">Акции и скидки</h2>
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
      <section className="mt-20 w-full bg-neutral-100 py-12">
        <Container>
          <div className="w-1/2 mx-auto">
          <h2 className="text-4xl mb-8 font-semibold text-start">Часто спрашивают</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Вопрос 1</AccordionTrigger>
                <AccordionContent>
                  Какая-то информация
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Вопрос 2</AccordionTrigger>
                <AccordionContent>
                  Какая-то информация
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Вопрос 3</AccordionTrigger>
                <AccordionContent>
                  Какая-то информация
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Вопрос 4</AccordionTrigger>
                <AccordionContent>
                  Какая-то информация
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Вопрос 5</AccordionTrigger>
                <AccordionContent>
                  Какая-то информация
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>
      <section className="mt-20 w-full">
        <Container>
          <div className="w-1/2 mx-auto">
            <h2 className="text-4xl mb-6 font-semibold text-start">
              Осталсь вопросы?
            </h2>
            <div>
              Оставьте свои контактные данные и наш менеджер свяжется в вами
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
