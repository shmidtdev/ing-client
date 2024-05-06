export default function ArticleCard(){
  return (
    <div className="w-1/5">
      <img src="/Images/office.jpg" className="rounded-lg"/>
      <div className="p-2">
        <h3 className="font-semibold text-lg">Заголовок статьи</h3>
        <div className="text-sm text-gray">Краткое описание статьи</div>
        <div className="text-[10px] mt-1 text-gray">22-03-2024</div>
      </div>
    </div>
  )
}