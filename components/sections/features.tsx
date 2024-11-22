"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Network, BookOpen, Award, Globe, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Professional Networking",
    description: "Connect with fellow alumni across various industries and sectors."
  },
  {
    icon: BookOpen,
    title: "Mentorship Programs",
    description: "Share knowledge and experience through our structured mentorship initiatives."
  },
  {
    icon: Award,
    title: "Career Development",
    description: "Access exclusive job opportunities and career advancement resources."
  },
  {
    icon: Globe,
    title: "Global Chapters",
    description: "Join local alumni chapters worldwide and expand your network globally."
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Participate in regular meetups, workshops, and social gatherings."
  },
  {
    icon: Calendar,
    title: "Annual Reunions",
    description: "Celebrate our shared heritage at yearly reunion events."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the benefits of being part of the Oxsika Alumni network
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}