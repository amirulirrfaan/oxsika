"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

const news = [
  {
    id: 1,
    title: "Pertandingan Liga Fantasy Premier League (FPL) 2024/2025",
    date: "2024-03-01",
    summary:
      "OXSIKA menganjurkan pertandingan Liga Fantasy Premier League (FPL) bagi Musim 2024/2025 dengan penyertaan percuma dan hadiah eksklusif.",
    content:
      'Memenuhi kehendak kebanyakan alumni SBPI Kubang Pasu yang rata-rata menyokong kelab Liga Perdana Inggeris terutamanya Manchester City, sukacita OXSIKA akan menganjurkan pertandingan Liga Fantasy Premier League (FPL) bagi Musim 2024/2025.\n\nPenyertaan adalah PERCUMA. Pemenang-pemenang akan menerima hadiah-hadiah eksklusif keluaran OXSIKA LEGACY.\n\nBerikut disertakan kod liga dan pautan bagi menyertai liga berkenaan. Syarat penyertaan hanya satu iaitu anda adalah ahli OXSIKA. Penyertaan ditutup sebelum jam 11 malam ini.\n\nPautan Liga: [https://fantasy.premierleague.com/leagues/auto-join/e9buga](https://fantasy.premierleague.com/leagues/auto-join/e9buga)\n\n"Bersatu Demi Legasi Kita"\n"KITA OXSIKA"\n\n#MalamGalaKitaOXSIKA\n#CUDIKUPS\n#GEGAR2024\n#KembalikanKenangan\n#DuaDekadKitaBersama\n#20TahunIKUPS',
    image: "/assets/images/news2.jpg",
  },
  {
    id: 2,
    title: "Kejohanan Bola Tampar OXSIKA 2024",
    date: "2024-02-25",
    summary:
      "Jom sertai Kejohanan Bola Tampar OXSIKA! Hanya 6 slot pasukan tersedia untuk kategori Lelaki dan Perempuan.",
    content:
      "Jom sertai Kejohanan Bola Tampar OXSIKA! Hanya 6 slot pasukan tersedia bagi setiap kategori (Lelaki dan Perempuan) – 4 untuk Alumni dan 2 untuk pelajar.\n\nFormat permainan adalah Volleython dengan 31 mata, dan setiap pasukan boleh mempunyai maksimum 8 pemain termasuk 2 simpanan. Sebarang perubahan lanjut akan dimaklumkan.\n\nSertakan nama pasukan anda dan hubungi PIC Hanif (+60 11-2094 6060) untuk sebarang pertanyaan.\n\nSiapa akan dinobatkan sebagai juara? Ayuh buktikan kehebatan anda di gelanggang bola tampar IKUPS!\n\n#CUDIKUPS\n#GEGAR2024\n#KembalikanKenangan\n#DuaDekadKitaBersama\n#20TahunIKUPS",
    image: "/assets/images/news1.jpg",
  },
  {
    id: 3,
    title: "Alumni Reunion 2024 Scheduled for June",
    date: "2024-02-15",
    summary:
      "Oxsika alumni reunion to be held in June 2024, promising an exciting weekend of events.",
    content:
      "We are thrilled to announce that the Oxsika Alumni Reunion 2024 will take place in...",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Scholarship Program for Alumni Children",
    date: "2024-02-05",
    summary:
      "Oxsika launches scholarship fund for children of alumni to pursue higher education.",
    content:
      "In an effort to support the next generation of students, Oxsika has established a scholarship fund...",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Alumni Spotlight: Muhammad Hafiz on the Rise",
    date: "2024-01-25",
    summary:
      "Software engineer Muhammad Hafiz talks about his journey from Oxsika to leading AI projects.",
    content:
      "Muhammad Hafiz, an alumnus from the class of 2012, shares his experience in the tech industry...",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Tech Talk: Innovation in Education by Oxsika",
    date: "2024-01-10",
    summary:
      "Oxsika hosts a tech talk discussing the future of innovation in education.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
  },
  // More news can be added here
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;

  // Calculate the total number of pages based on the total number of items
  const totalPages = Math.ceil(news.length / newsPerPage);

  // Slice the news array based on the current page
  const paginatedNews = news.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Berita Oxsika
          </h2>
          {/* <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with the latest news and achievements from our alumni
            community
          </p> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedNews.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription>{item.summary}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                  }}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === index + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(index + 1);
                    }}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
