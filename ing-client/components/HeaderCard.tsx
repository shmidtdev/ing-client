import Link from "next/link";

type HeaderCardProps = {
  category: Category,
  onClick?: () => void
}

export default function HeaderCard({category, onClick} : HeaderCardProps){
  return (
    <Link href={`../catalog/${category.nameEng}`} onClick={onClick} className="bg-midgray w-[270px] h-[100px] rounded relative hover:text-white hover:bg-primary transition duration-300">
      <div className="m-2">
        {category.name}
      </div>
      <img src="/Images/placeholder.png" className="absolute w-[110px] right-0 top-0"/>
    </Link>
  )
}