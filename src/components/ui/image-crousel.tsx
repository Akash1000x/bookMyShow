import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./carousel";

export default function ImageCrousel() {
  const images = [
    { src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1720784019967_freeaccesswebws.jpg", alt: "image1" },
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1719815459583_humareramrajasthan1240x300.jpg",
      alt: "image3",
    },
    { src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1720697591464_promobanner.jpg", alt: "image4" },
    { src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg", alt: "image5" },
  ];
  return (
    <Carousel className="relative" orientation="horizontal">
      <CarouselContent className="md:max-h-[200px] lg:max-h-[250px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <Image src={images[index].src} alt={images[index].alt} width={500} height={300} style={{ width: "100%" }} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
