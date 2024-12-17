"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Gegar 2024",
    date: "2024-07-20",
    time: "14:00",
    location: "SBPI Kubang Pasu Main Hall",
    description:
      "Join us for our biggest annual event where alumni from all batches come together.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Mock Interview",
    date: "2024-07-20",
    time: "19:00",
    location: "Alor Setar Convention Center",
    description: "Network with fellow alumni and industry professionals.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "iKUPS 20 tahun",
    date: "2024-08-10",
    time: "09:00",
    location: "SBPI Kubang Pasu Sports Complex",
    description: "A day filled with sports and fun activities for everyone.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Alumni Talent Show",
    date: "2024-09-05",
    time: "18:00",
    location: "SBPI Kubang Pasu Auditorium",
    description:
      "Show off your talent and enjoy performances from your fellow alumni.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Tech Talk: Innovation in Education",
    date: "2024-09-20",
    time: "10:00",
    location: "Alor Setar Convention Center",
    description:
      "Join industry experts as they discuss the future of technology in education.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
  },

  // Add more events as needed
];

export default function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const paginatedEvents = events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const handlePageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior (scrolling/reloading)

    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="events" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Program
          </h2>
          {/* <p className="mt-4 text-lg text-muted-foreground">
            Stay connected with the latest alumni gatherings and activities
          </p> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <Image
                width={500}
                height={500}
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{event.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
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
                  onClick={(event) => handlePageChange(currentPage - 1, event)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === index + 1}
                    onClick={(event) => handlePageChange(index + 1, event)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(event) => handlePageChange(currentPage + 1, event)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
