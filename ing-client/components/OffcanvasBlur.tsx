"use client"

import {useContext} from "react";
import {ApplicationContext} from "@/app/ApplicationContext";
import {AnimatePresence, motion} from "framer-motion";

export default function OffCanvasBlur() {
  const {offCanvasOpen, handleOffCanvas} = useContext(ApplicationContext)

  return (
    <>
      <AnimatePresence>
        {offCanvasOpen &&
            <motion.div
                onClick={() => handleOffCanvas(false)}
                className="fixed z-30 top-0 right-0 w-screen h-screen"
                initial={{opacity: 0, backdropFilter: "blur(0)"}}
                animate={{opacity: 1, backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.7)"}}
                exit={{opacity: 0, backdropFilter: "blur(0)"}}
                transition={{duration: .2}}
            >
            </motion.div>
        }
      </AnimatePresence>
    </>
  )
}