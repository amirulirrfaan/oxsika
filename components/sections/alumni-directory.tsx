"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Pagination } from "@/components/ui/pagination";
import { Search, Briefcase, Mail, Phone, MapPin, LinkedinIcon } from "lucide-react";

const alumni = [
  {
    id: 1,
    name: "Dr. Sarah Ahmad",
    batch: "2010",
    occupation: "Research Scientist",
    company: "National Research Institute",
    location: "Kuala Lumpur",
    email: "sarah.ahmad@example.com",
    phone: "+60 12-345 6789",
    linkedin: "linkedin.com/in/sarahahmad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Leading breakthrough research in renewable energy technologies. Recipient of multiple international awards.",
  },
  {
    id: 2,
    name: "Muhammad Hafiz",
    batch: "2012",
    occupation: "Software Engineer",
    company: "Tech Solutions Global",
    location: "Singapore",
    email: "hafiz.m@example.com",
    phone: "+65 9876 5432",
    linkedin: "linkedin.com/in/hafizm",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    bio: "Full-stack developer with expertise in AI and machine learning. Tech lead for multiple successful startups.",
  },
  {
    id: 3,
    name: "Nurul Aina",
    batch: "2015",
    occupation: "Financial Analyst",
    company: "Global Investment Bank",
    location: "Dubai",
    email: "aina.n@example.com",
    phone: "+971 50 123 4567",
    linkedin: "linkedin.com/in/nurulaina",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    bio: "Specializing in Islamic banking and sustainable finance. Published author on modern banking practices.",
  },
  // Add more alumni profiles as needed
];

export default function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const alumniPerPage = 6;

  const filteredAlumni = alumni.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.batch.includes(searchTerm) ||
    person.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAlumni.length / alumniPerPage);
  const paginatedAlumni = filteredAlumni.slice(
    (currentPage - 1) * alumniPerPage,
    currentPage * alumniPerPage
  );

  return (
    <section id="directory" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Alumni Directory
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with fellow Oxsika alumni from around the world
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, batch, occupation, or location..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedAlumni.map((person) => (
            <Card key={person.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-24 w-24 rounded-full object-cover border-2 border-primary"
                  />
                </div>
                <CardTitle>{person.name}</CardTitle>
                <CardDescription>Class of {person.batch}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>{person.occupation} at {person.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{person.location}</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-4">
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Alumni Profile</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 sm:grid-cols-[1fr_2fr]">
                      <div className="text-center">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-primary"
                        />
                        <h3 className="font-semibold mt-4">{person.name}</h3>
                        <p className="text-sm text-muted-foreground">Class of {person.batch}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span>{person.occupation}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{person.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>{person.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{person.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <LinkedinIcon className="h-4 w-4 text-primary" />
                            <a
                              href={`https://${person.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              LinkedIn Profile
                            </a>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Bio</h4>
                          <p className="text-sm text-muted-foreground">{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}