"use client";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  Briefcase,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { useState } from "react";

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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Specializing in Islamic banking and sustainable finance. Published author on modern banking practices.",
  },
  {
    id: 4,
    name: "Rizwan Ali",
    batch: "2013",
    occupation: "Civil Engineer",
    company: "BuildPro Ltd.",
    location: "London",
    email: "rizwan.ali@example.com",
    phone: "+44 20 7946 0958",
    linkedin: "linkedin.com/in/rizwanali",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Experienced civil engineer with a passion for sustainable infrastructure development and urban planning.",
  },
  {
    id: 5,
    name: "Aminah Zulkifli",
    batch: "2016",
    occupation: "Marketing Director",
    company: "Creative Digital Agency",
    location: "Kuala Lumpur",
    email: "aminah.zulkifli@example.com",
    phone: "+60 16-789 1011",
    linkedin: "linkedin.com/in/aminahzulkifli",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Marketing strategist and brand expert. Leading digital marketing initiatives for leading tech brands.",
  },
  {
    id: 6,
    name: "Ahmad Faris",
    batch: "2018",
    occupation: "Data Scientist",
    company: "AI Innovations Inc.",
    location: "New York",
    email: "ahmad.faris@example.com",
    phone: "+1 212-555-1234",
    linkedin: "linkedin.com/in/ahmadfaris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Data scientist specializing in AI, machine learning, and predictive analytics. Passionate about solving real-world problems.",
  },
  {
    id: 7,
    name: "Zara Siti",
    batch: "2017",
    occupation: "Product Manager",
    company: "Tech Innovations Hub",
    location: "Singapore",
    email: "zara.siti@example.com",
    phone: "+65 6123 4567",
    linkedin: "linkedin.com/in/zarasiti",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Passionate product manager with expertise in tech development and consumer-driven innovation.",
  },
  {
    id: 8,
    name: "Ibrahim Rahman",
    batch: "2019",
    occupation: "Business Consultant",
    company: "Global Strategy Consulting",
    location: "Dubai",
    email: "ibrahim.rahman@example.com",
    phone: "+971 56 123 7890",
    linkedin: "linkedin.com/in/ibrahimrahman",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Strategic business consultant with a focus on organizational growth and market expansion in emerging markets.",
  },
];

export default function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const alumniPerPage = 6;

  const filteredAlumni = alumni.filter(
    (person) =>
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
            <Card
              key={person.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                    <span>
                      {person.occupation} at {person.company}
                    </span>
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
                        <p className="text-sm text-muted-foreground">
                          Class of {person.batch}
                        </p>
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
                          <p className="text-sm text-muted-foreground">
                            {person.bio}
                          </p>
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
