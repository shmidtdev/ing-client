import Container from "@/components/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import React from "react";

export default function Consultaciya() {
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
                  <BreadcrumbLink href="../consultaciya">Консультация</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl mt-4 font-medium">Консультация по всем техническим вопросам</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">
              Компания "Инж Импорт Групп" оказывает консультации по всем техническим вопросам:
            </h3>
            <div className="flex-col flex gap-4">
              <div>
                Подбора типа несущих систем, материалов, необходимых комплектующих и фурнитуры;
              </div>
              <div>Изучения условий будущей эксплуатации возводимых элементов;</div>
              <div>Обсуждения технических параметров важных элементов: габариты, вес, нагрузки;</div>
              <div>Примерного расчета бюджета;</div>
              <div>Выбора дизайна конструкции.</div>
              <div>КIN LONG постоянно на связи со специалистами зарубежных и российских конструкторских бюро и НИИ, поэтому мы  в курсе новых используемых технологий.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">
              Преимущества клиента
            </h3>
            <div className="flex-col flex gap-4">
              <div>Обратившись за консультацией в нашу компанию, вы:</div>
              <div>
                <div>Избежите нерационального расходования средств;</div>
                <div>Обсудите условия выгодного сотрудничества;</div>
                <div>Детально изучите объем предстоящих работ.</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}