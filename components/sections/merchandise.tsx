"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { ShoppingCart, Tag } from "lucide-react";
import { useState } from "react";

const merchandise = [
  {
    id: 1,
    name: "Classic Alumni Polo Shirt",
    price: 89.9,
    image: "/assets/images/merchandise.jpg",
    description: "Premium cotton polo with embroidered Oxsika logo",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White"],
    inStock: true,
  },
  {
    id: 2,
    name: "Anniversary Limited Edition Hoodie",
    price: 129.9,
    image: "/assets/images/merchandise2.jpg",
    description: "Commemorative hoodie celebrating our 10th anniversary",
    category: "Apparel",
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: 3,
    name: "Alumni Coffee Tumbler",
    price: 49.9,
    image:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=800&auto=format&fit=crop&q=60",
    description: "Stainless steel tumbler with school crest",
    category: "Accessories",
    colors: ["Silver", "Black"],
    inStock: true,
  },
];

export default function Merchandise() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(merchandise.length / itemsPerPage);

  const paginatedItems = merchandise.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="merchandise" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Alumni Merchandise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Show your Oxsika pride with our exclusive collection
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <Badge variant="secondary">
                    <Tag className="h-4 w-4 mr-1" />
                    {item.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.sizes && (
                    <div className="flex gap-2">
                      <span className="text-sm font-medium">Sizes:</span>
                      <div className="flex gap-1">
                        {item.sizes.map((size) => (
                          <Badge key={size} variant="outline">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <span className="text-sm font-medium">Colors:</span>
                    <div className="flex gap-1">
                      {item.colors.map((color) => (
                        <Badge key={color} variant="outline">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  RM {item.price.toFixed(2)}
                </span>
                <Button className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  WhatsApp
                </Button>
              </CardFooter>
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
