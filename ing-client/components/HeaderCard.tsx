import Link from "next/link";

export default function HeaderCard(){
  return (
    <Link href="#" className="bg-midgray w-[270px] h-[100px] rounded relative hover:text-white hover:bg-primary transition duration-300">
      <div className="m-2">
        Категория
      </div>
      <img src="/Images/placeholder.png" className="absolute w-[110px] right-0 top-0"/>
    </Link>
  )
}