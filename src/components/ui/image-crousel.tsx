import Image from "next/image";
import { Card, CardContent } from "./card";
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
    <div className="max-h-[300px]">
      <Carousel className="w-full">
        <CarouselContent className="p-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-0">
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    width={500}
                    height={300}
                    style={{ width: "100%" }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
