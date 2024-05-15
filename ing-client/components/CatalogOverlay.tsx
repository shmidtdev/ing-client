"use client"

import {CatalogIcon} from "@/Icons";
import {useContext, useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {CloseIcon} from "@nextui-org/shared-icons";
import {ApplicationContext} from "@/app/ApplicationContext";
import HeaderCard from "@/components/HeaderCard";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Container from "@/components/Container";
import {useOnClickOutside} from "usehooks-ts";

export default function CatalogOverlay() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const {categories} = useContext(ApplicationContext)

  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div ref={ref}>
      <div
        className="flex bg-primary text-white py-3 px-4 rounded-md gap-2 text-sm border-primary border-2 hover:bg-primary/90 transition duration-300 cursor-pointer"
        onClick={handleClick}>
        <div className="my-auto">
          <CatalogIcon/>
        </div>
        <div>
          Каталог
        </div>
      </div>
      <div className="absolute left-0 -z-50">
        <AnimatePresence>
          {open &&
              <motion.div
                  initial={{y: "-1000px"}}
                  animate={{y: "0px"}}
                  exit={{y: "-1000px"}}
                  transition={{type: "just"}}
              >
                  <div className="absolute top-[15px] h-fit w-screen bg-white p-6 drop-shadow-lg">
                      <div className="w-full flex justify-end" onClick={handleClick}>
                          <CloseIcon className="cursor-pointer"/>
                      </div>
                      <div>
                          <Container>
                              <div className="flex justify-between">
                                  <div className="flex flex-wrap gap-4 w-[75%] min-w-[900px]">
                                    {categories.map((category) => (
                                      <HeaderCard key={category.nameEng} category={category} onClick={handleClick}/>
                                    ))}
                                  </div>
                                  <div className="mt-auto">
                                      <Link href="#" className="text-xl">sale@ing-impgrp.ru</Link>
                                      <div className="flex gap-8 mt-2">
                                          <div className="my-auto">
                                              <Link href="#" className="text-xl">8 800 555 35 35</Link>
                                              <div className="text-[10px]">Режим работы 10:00 - 19:00 (пн-пт)</div>
                                          </div>
                                          <Button>
                                              Обратный звонок
                                          </Button>
                                      </div>
                                  </div>
                              </div>
                          </Container>
                      </div>
                  </div>
              </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}