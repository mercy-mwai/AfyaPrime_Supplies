
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Truck,
  Award,
  Stethoscope,
  Syringe,
  Heart,
  Activity,
  ChevronRight,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AfyaPrimeSupplies() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    {
      name: "Surgical Instruments",
      icon: Syringe,
      image: "/placeholder.svg?height=200&width=300",
      count: "150+ Products",
    },
    {
      name: "Diagnostic Equipment",
      icon: Stethoscope,
      image: "/placeholder.svg?height=200&width=300",
      count: "80+ Products",
    },
    {
      name: "Patient Monitoring",
      icon: Activity,
      image: "/placeholder.svg?height=200&width=300",
      count: "60+ Products",
    },
    {
      name: "Emergency Care",
      icon: Heart,
      image: "/placeholder.svg?height=200&width=300",
      count: "120+ Products",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Digital Blood Pressure Monitor",
      price: "KSh 8,500",
      originalPrice: "KSh 10,000",
      image: "/placeholder.svg?height=250&width=250",
      badge: "Best Seller",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Surgical Scissors Set",
      price: "KSh 3,200",
      originalPrice: "KSh 4,000",
      image: "/placeholder.svg?height=250&width=250",
      badge: "New Arrival",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Digital Thermometer",
      price: "KSh 1,800",
      originalPrice: "KSh 2,500",
      image: "/placeholder.svg?height=250&width=250",
      badge: "Hot Deal",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pulse Oximeter",
      price: "KSh 4,500",
      originalPrice: "KSh 6,000",
      image: "/placeholder.svg?height=250&width=250",
      badge: "Featured",
      rating: 4.8,
    },
  ]

  const services = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products are certified and meet international medical standards",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same day delivery within Nairobi, nationwide shipping available",
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Professional guidance from our medical equipment specialists",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock customer support for urgent medical needs",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-green-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@afyaprimesupplies.co.ke</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Free delivery on orders over KSh 10,000</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-400">Afya Prime</h1>
                <p className="text-sm text-gray-300">Medical Supplies</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search medical supplies..."
                  className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-green-400 relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs">3</Badge>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`mt-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <li>
                <Link href="/" className="text-green-400 hover:text-green-300 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-green-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white hover:text-green-400">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Your Trusted Partner in
                <span className="text-white"> Medical Excellence</span>
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Discover premium medical supplies and equipment from leading manufacturers. Quality healthcare solutions
                for hospitals, clinics, and healthcare professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
                >
                  View Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/medical-equipment.png"
                alt="Medical Equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-800 text-green-400 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Medical Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardContent className="pt-6">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Product Categories</h2>
            <p className="text-xl text-slate-600">Explore our comprehensive range of medical supplies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-500 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {category.count}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <category.icon className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-semibold text-slate-800">{category.name}</h3>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 bg-transparent border-green-600 text-green-600"
                    >
                      View Products
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Featured Products</h2>
            <p className="text-xl text-slate-600">Top-quality medical equipment at competitive prices</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white">{product.badge}</Badge>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4 text-slate-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-green-500 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-600 ml-2">({product.rating})</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-slate-800">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        <span className="text-sm text-slate-500 line-through ml-2">{product.originalPrice}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-slate-800 text-green-400 hover:bg-slate-700">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-green-400 bg-transparent"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">About Afya Prime Supplies</h2>
              <p className="text-lg text-slate-600 mb-6">
                With over a decade of experience in the medical supply industry, Afya Prime Supplies has been Kenya's
                trusted partner in delivering quality healthcare solutions. We serve hospitals, clinics, laboratories,
                and healthcare professionals across East Africa.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-slate-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-slate-600">Support</div>
                </div>
              </div>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medical Professionals"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-400">Ready to Upgrade Your Medical Supplies?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Get in touch with our experts for personalized recommendations and bulk pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Afya Prime</h3>
                  <p className="text-sm text-slate-400">Medical Supplies</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Your trusted partner for quality medical supplies and equipment across Kenya and East Africa.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-sm text-slate-300">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-sm text-slate-300">+254 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-green-400" />
                  <span className="text-sm text-slate-300">info@afyaprimesupplies.co.ke</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-green-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-slate-400 hover:text-green-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-green-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-green-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-green-400">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/surgical" className="text-slate-400 hover:text-green-400">
                    Surgical Instruments
                  </Link>
                </li>
                <li>
                  <Link href="/diagnostic" className="text-slate-400 hover:text-green-400">
                    Diagnostic Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/monitoring" className="text-slate-400 hover:text-green-400">
                    Patient Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="text-slate-400 hover:text-green-400">
                    Emergency Care
                  </Link>
                </li>
                <li>
                  <Link href="/laboratory" className="text-slate-400 hover:text-green-400">
                    Laboratory Supplies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Stay Updated</h4>
              <p className="text-slate-400 mb-4">Subscribe to get updates on new products and offers</p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-500"
                />
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Afya Prime Supplies. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
