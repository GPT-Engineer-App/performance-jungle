import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { navItems } from "../nav-items";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/placeholder.svg" alt="Dog Logo" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-800">Discover the World of Dogs</h1>
        
        <Carousel className="mb-12">
          <CarouselContent>
            {[
              "https://images.unsplash.com/photo-1517849845537-4d257902454a",
              "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
              "https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <img 
                  src={src}
                  alt={`Dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About Dogs</TabsTrigger>
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>What are Dogs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. Today, dogs are a beloved part of many households, serving as companions, working animals, and even therapy assistants.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Characteristics of Dogs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Loyal and affectionate companions</li>
                  <li>Highly trainable and intelligent</li>
                  <li>Come in various sizes, shapes, and breeds</li>
                  <li>Possess an excellent sense of smell</li>
                  <li>Can understand human emotions and body language</li>
                  <li>Adaptable to different living environments</li>
                  <li>Provide numerous health benefits to their owners</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Dog Breeds</CardTitle>
                <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>Labrador Retriever</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span>German Shepherd</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span>Golden Retriever</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>French Bulldog</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <span>Beagle</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                    <span>Poodle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Dogs</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
