import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

type ImageCardProps = {
  image: string
}

export function ImageCard({image} : ImageCardProps){
  return (
    <div>
      <img src="/Images/placeholder.png" className="w-fit"/>
    </div>
  )
}

type ImageCarouselProps = {
  images: string[]
}

export default function ImageCarousel({images} : ImageCarouselProps){
  return (
    <div className="bg-white rounded-lg p-8">
      {images.length > 0 && 
        <img src="/storage/images/" className="w-[450px]"/>
      }
      {images.length === 0 &&
          <img src="/Images/placeholder.png" className="w-[450px]"/>
      }
      <Carousel className="w-full max-w-xs">
        {/*<CarouselContent>*/}
        {/*  {images.map((image, index) => (*/}
        {/*    <CarouselItem key={index}>*/}
        {/*      <div className="p-1">*/}
        {/*        <ImageCard image={image}/>*/}
        {/*      </div>*/}
        {/*    </CarouselItem>*/}
        {/*  ))}*/}
        {/*</CarouselContent>*/}
        {/*<CarouselPrevious />*/}
        {/*<CarouselNext />*/}
      </Carousel>
    </div>
  )
}