"use client"

import { useState, useEffect } from "react" 
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
  ChevronRight,
  Star,
  Droplet,
  FuelIcon as Gas,
  TreesIcon as Lungs,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categoriesData } from "@/lib/product-data" // Import categoriesData

export default function AfyaPrimeSupplies() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const router = useRouter()

  // Flatten all products for easier searching
  const allProducts = categoriesData.flatMap((category) =>
    category.subcategories.flatMap((sub) =>
      sub.products.map((product) => ({
        ...product,
        subcategoryName: sub.name,
        subcategorySlug: sub.slug,
        categoryName: category.name,
      })),
    ),
  )

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const lowerCaseQuery = searchQuery.toLowerCase()
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.subcategoryName.toLowerCase().includes(lowerCaseQuery) ||
        product.categoryName.toLowerCase().includes(lowerCaseQuery),
    )
    setSearchResults(filtered)
  }, [searchQuery]) // Re-run effect when searchQuery changes

  const categories = [
    {
      name: "Infusion & Injection",
      icon: Syringe,
      image: "/assets/images/infusion/infusion.jpg",
      count: "150+ Products",
      slug: "infusion-injection",
    },
    {
      name: "Urology",
      icon: Droplet,
      image: "/assets/images/urology/urology.jpg",
      count: "80+ Products",
      slug: "urology",
    },
    {
      name: "Anesthesia",
      icon: Gas,
      image: "/assets/images/anaesthesia/anaesthesia.jpeg",
      count: "60+ Products",
      slug: "anesthesia",
    },
    {
      name: "Respiratory Care",
      icon: Lungs,
      image: "/assets/images/respiratory/respiratory.jpeg",
      count: "120+ Products",
      slug: "respiratory",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Digital Blood Pressure Monitor",
      image: "/assets/images/Digital Blood Pressure Monitor.png",
      badge: "Best Seller",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Surgical Scissors Set",
      image: "/assets/images/Surgical Scissors Set.jpg",
      badge: "New Arrival",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Digital Thermometer",
      image: "/assets/images/Digital Thermometer.jpg",
      badge: "Hot Deal",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pulse Oximeter",
      image: "/assets/images/Pulse Oximeter.jpg",
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
                <span>+254701 828992</span>
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
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
                <Link href="#about" className="text-white hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-green-400">
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
                <Button size="lg" 
                className="bg-white text-green-700 hover:bg-green-50"
                onClick={()=> router.push("/products")}
                >
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
                  onClick={()=> router.push("/products")}
                >
                  View Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/medicine.jpeg"
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

      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-slate-800">Search Results for "{searchQuery}"</h2>
              <p className="text-xl text-slate-600">Found {searchResults.length} matching products</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {searchResults.map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="w-full h-64 object-cover"
                      />
                      {/* You can add badges or other info here if needed */}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-slate-800">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Category: {product.categoryName} / {product.subcategoryName}
                      </p>
                      <Button className="w-full bg-slate-800 text-green-400 hover:bg-slate-700" asChild>
                        <Link href={`/products/${product.subcategorySlug}`}>View Product</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Categories Section (only show if no search results) */}
      {searchResults.length === 0 && (
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
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 bg-transparent border-green-600 text-green-600"
                      >
                        <Link href={`/products/${category.slug}`}>
                          View Products
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products (only show if no search results) */}
      {searchResults.length === 0 && (
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
                        <div></div>
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
                onClick={() => router.push("/products")}
              >
                View All Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-16 bg-white scroll-mt-24" id="about">
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
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700"
                onClick={() => router.push("/about")}
              >
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/medical-equipment.png"
                alt="Medical Professionals"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/*contact section */}
      <section id="contact" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Get in Touch</h2>
            <p className="text-xl text-slate-600">We'd love to hear from you!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Phone Number</h4>
                    <p className="text-slate-600">+254701 828992</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Email Address</h4>
                    <p className="text-slate-600">info@afyaprimesupplies.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-lg bg-white">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="border-slate-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="border-slate-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    className="border-slate-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={10}
                    cols={50}
                    className="border-slate-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </Card>
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
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700"
              onClick={() => router.push("#contact")}
            >
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
              onClick={() => router.push("#contact")}
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
                  <span className="text-sm text-slate-300">+254701 828992</span>
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
                  <Link href="#services" className="text-slate-400 hover:text-green-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-green-400">
                    Contact
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/anesthesia-ventilator-cpap" className="text-slate-400 hover:text-green-400">
                    Anesthesia/Ventilator/CPAP
                  </Link>
                </li>
                <li>
                  <Link href="/products/maternal-neonatal-healthcare" className="text-slate-400 hover:text-green-400">
                   Maternal & Neonatal Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/products/patient-monitoring" className="text-slate-400 hover:text-green-400">
                    Patient Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/products/patient-care" className="text-slate-400 hover:text-green-400">
                    Patient Care
                  </Link>
                </li>
                <li>
                  <Link href="/products/hospital-bed" className="text-slate-400 hover:text-green-400">
                    Hospital Bed
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
