import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { categoriesData } from "@/lib/product-data"

export default function SubcategoryProductsPage({ params }) {
  // Removed { params: { subcategorySlug: string } }
  const { subcategorySlug } = params

  // Find the subcategory based on the slug
  let currentSubcategory = null
  let currentCategoryName = ""
  for (const category of categoriesData) {
    const foundSub = category.subcategories.find((sub) => sub.slug === subcategorySlug)
    if (foundSub) {
      currentSubcategory = foundSub
      currentCategoryName = category.name
      break
    }
  }

  if (!currentSubcategory) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/products" className="hover:underline text-green-600">
              Categories
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="font-medium text-slate-800">{currentSubcategory.name}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-center mb-4 md:text-4xl lg:text-5xl text-slate-800">
        {currentSubcategory.name}
      </h1>
      <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
        Explore our selection of {currentSubcategory.name.toLowerCase()} products.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentSubcategory.products.map((product, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4 flex-grow flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">{product.name}</h3>
              {/* Add more product details here if available, e.g., price, short description */}
              <Button className="w-full bg-green-600 text-white hover:bg-green-700 mt-4">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
