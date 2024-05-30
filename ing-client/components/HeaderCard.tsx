import Link from "next/link";
import {host} from "@/env";

type HeaderCardProps = {
  category: Category,
  onClick?: () => void
}

export default function HeaderCard({category, onClick} : HeaderCardProps){
  return (
    <Link href={`../catalog/${category.nameEng}`} onClick={onClick} className="bg-midgray w-[270px] h-[100px] rounded relative hover:text-white hover:bg-primary-foreground transition duration-300">
      <div className="m-2 relative z-30 bg-primary text-white rounded-lg px-2 w-fit">
        {category.name}
      </div>
      <img src={`${host}/storage/categoryimages/${category.nameEng}.png`} className="absolute w-[85px] h-[85px] overflow-hidden right-2 top-2 rounded-xl"/>
    </Link>
  )
}