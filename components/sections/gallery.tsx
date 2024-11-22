"use client";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Gegar 2024",
    date: "2024-09-15",
    location: "SBPI Kubang Pasu",
    category: "Events",
    image: "/assets/images/gallery1.png",
    description:
      "A memorable gathering of alumni from various batches celebrating our shared heritage.",
  },
  {
    id: 2,
    title: "Career Fair 2023",
    date: "2023-09-20",
    location: "Convention Center",
    category: "Professional",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
    description:
      "Alumni-led career fair providing guidance to current students and recent graduates.",
  },
  {
    id: 3,
    title: "Sports Day 2023",
    date: "2023-07-08",
    location: "School Sports Complex",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60",
    description:
      "Annual sports competition between current students and alumni teams.",
  },
  {
    id: 1,
    title: "Gegar 2024",
    date: "2024-09-15",
    location: "SBPI Kubang Pasu",
    category: "Events",
    image: "/assets/images/gallery1.png",
    description:
      "A memorable gathering of alumni from various batches celebrating our shared heritage.",
  },
  {
    id: 1,
    title: "Gegar 2024",
    date: "2024-09-15",
    location: "SBPI Kubang Pasu",
    category: "Events",
    image: "/assets/images/gallery1.png",
    description:
      "A memorable gathering of alumni from various batches celebrating our shared heritage.",
  },
  {
    id: 1,
    title: "Gegar 2024",
    date: "2024-09-15",
    location: "SBPI Kubang Pasu",
    category: "Events",
    image: "/assets/images/gallery1.png",
    description:
      "A memorable gathering of alumni from various batches celebrating our shared heritage.",
  },
  {
    id: 1,
    title: "Gegar 2024",
    date: "2024-09-15",
    location: "SBPI Kubang Pasu",
    category: "Events",
    image: "/assets/images/gallery1.png",
    description:
      "A memorable gathering of alumni from various batches celebrating our shared heritage.",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const paginatedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Galeri
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            #KembalikanKenangan
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <Badge className="self-start mt-2" variant="secondary">
                  {item.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl">
            {selectedImage !== null && (
              <div className="space-y-4">
                <img
                  src={paginatedItems[selectedImage].image}
                  alt={paginatedItems[selectedImage].title}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    {paginatedItems[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {paginatedItems[selectedImage].description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>
                        {new Date(
                          paginatedItems[selectedImage].date
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{paginatedItems[selectedImage].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`#${currentPage > 1 ? currentPage - 1 : 1}`}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`#${index + 1}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href={`#${
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
