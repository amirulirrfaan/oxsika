"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const committees = [
  {
    name: "Abdul Hadi",
    role: "Presiden",
    email: "hadi@gmail.com",
    phone: "+60 12-345 6789",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Umairah",
    role: "Naib Presiden",
    email: "umairah@gmail.com",
    phone: "+60 12-987 6543",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Emeir Khalif",
    role: "Bendahari",
    email: "emeir@gmail.com",
    phone: "+60 12-987 6543",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Ammar Izzudin",
    role: "AJK",
    email: "ammar@gmail.com",
    phone: "+60 12-987 6543",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Syazwan Razman",
    role: "AJK",
    email: "zen@gmail.com",
    phone: "+60 12-987 6543",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
];

export function CommitteeSection() {
  return (
    <div className="bg-background py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Carta Organisasi Oxsika
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {committees.map((member, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-32 w-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-center">
                      {member.name}
                    </h3>
                    <p className="text-md font-medium text-secondary-foreground text-center">
                      {member.role}
                    </p>
                    <div className="flex flex-col items-center mt-4 space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        {member.email}
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full" />
        <CarouselNext className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full" />
      </Carousel>
    </div>
  );
}
