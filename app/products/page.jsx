import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { categoriesData } from "@/lib/product-data"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-center mb-8 md:text-4xl lg:text-5xl text-slate-800">
        Explore Our Product Categories
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
        Browse through our extensive range of medical supplies and equipment, organized into intuitive categories for
        easy navigation.
      </p>

      {categoriesData.map((category, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 md:text-4xl text-green-700">{category.name}</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-4xl">{category.description}</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.subcategories.map((sub, subIndex) => (
              <Card
                key={subIndex}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <Link href={`/products/${sub.slug}`} className="block">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={sub.image || "/placeholder.svg"}
                      alt={sub.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="bg-gray-50 p-4 border-b">
                    <CardTitle className="text-xl font-semibold text-slate-800">{sub.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <p className="text-sm text-muted-foreground">{sub.products.length} Products</p>
                  </CardContent>
                </Link>
                <div className="p-4 border-t bg-gray-50">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-green-600 hover:bg-green-50 hover:text-green-700"
                  >
                    <Link href={`/products/${sub.slug}`}>
                      View {sub.name} Products
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
