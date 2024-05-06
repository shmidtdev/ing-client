import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ProductOrderSelect(){
  return (
    <div className="w-fit ml-auto">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="По названию" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">По названию</SelectItem>
          <SelectItem value="dark">По цене</SelectItem>
          <SelectItem value="system">По характеристикам</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}