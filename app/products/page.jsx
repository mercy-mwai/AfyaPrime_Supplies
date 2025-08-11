import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const categoriesData = [
  {
    name: "Non-Pharmaceuticals",
    description: "Essential supplies for various medical procedures and patient care.",
    subcategories: [
      {
        name: "Infusion & Injection",
        products: [
          { name: "Infusion Set", image: "/placeholder.svg?height=100&width=100" },
          { name: "Blood Transfusion Set", image: "/placeholder.svg?height=100&width=100" },
          { name: "Needle", image: "/placeholder.svg?height=100&width=100" },
          { name: "Syringe", image: "/placeholder.svg?height=100&width=100" },
          { name: "Scalp Vein Set", image: "/placeholder.svg?height=100&width=100" },
          { name: "IV Cannula", image: "/placeholder.svg?height=100&width=100" },
          { name: "Blood Collection Needle", image: "/placeholder.svg?height=100&width=100" },
          { name: "Blood Collection Tube", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Urology",
        products: [
          { name: "Latex Foley Catheter", image: "/placeholder.svg?height=100&width=100" },
          { name: "Silicone Foley Catheter", image: "/placeholder.svg?height=100&width=100" },
          { name: "PVC Nelaton Catheter", image: "/placeholder.svg?height=100&width=100" },
          { name: "Urine Bag", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Anesthesia",
        products: [
          { name: "Endotracheal Tube", image: "/placeholder.svg?height=100&width=100" },
          { name: "Tracheostomy Tube", image: "/placeholder.svg?height=100&width=100" },
          { name: "Intubating Stylet", image: "/placeholder.svg?height=100&width=100" },
          { name: "Oropharyngeal Airway", image: "/placeholder.svg?height=100&width=100" },
          { name: "Nasopharyngeal Airway", image: "/placeholder.svg?height=100&width=100" },
          { name: "Laryngeal Mask Airway", image: "/placeholder.svg?height=100&width=100" },
          { name: "Air Cushion Mask", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Respiratory",
        products: [
          { name: "Oxygen Mask", image: "/placeholder.svg?height=100&width=100" },
          { name: "Nebulizer Mask", image: "/placeholder.svg?height=100&width=100" },
          { name: "Nasal Oxygen Cannula", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Patient Care",
        products: [
          { name: "Suction Catheter", image: "/placeholder.svg?height=100&width=100" },
          { name: "Feeding Tube", image: "/placeholder.svg?height=100&width=100" },
          { name: "Stomach Tube", image: "/placeholder.svg?height=100&width=100" },
          { name: "Ryle's Tube", image: "/placeholder.svg?height=100&width=100" },
          { name: "Yankauer Suction Set", image: "/placeholder.svg?height=100&width=100" },
          { name: "Rectal Tube", image: "/placeholder.svg?height=100&width=100" },
          { name: "Face Mask", image: "/placeholder.svg?height=100&width=100" },
          { name: "Vaginal Speculum", image: "/placeholder.svg?height=100&width=100" },
          { name: "Gloves", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
    ],
  },
  {
    name: "Medical Equipment & Surgical Items",
    description: "Advanced equipment and instruments for diagnostics, surgery, and patient monitoring.",
    subcategories: [
      {
        name: "Patient Monitor",
        products: [
          { name: "Modular Monitor", image: "/placeholder.svg?height=100&width=100" },
          { name: "Compact Monitor", image: "/placeholder.svg?height=100&width=100" },
          { name: "Vital Sign Monitor", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Monitor/ECG/Defibrillator",
        products: [
          { name: "Transport Monitor", image: "/placeholder.svg?height=100&width=100" },
          { name: "3/6/12-Channel ECG", image: "/placeholder.svg?height=100&width=100" },
          { name: "ECG Holter", image: "/placeholder.svg?height=100&width=100" },
          { name: "PC ECG/Stress Test ECG", image: "/placeholder.svg?height=100&width=100" },
          { name: "AED Defibrillator", image: "/placeholder.svg?height=100&width=100" },
          { name: "Defibrillator Monitor", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Pump/Video Laryngoscope/Diathermy Machine",
        products: [
          { name: "Syringe Pump", image: "/placeholder.svg?height=100&width=100" },
          { name: "Infusion Pump", image: "/placeholder.svg?height=100&width=100" },
          { name: "Feeding Pump", image: "/placeholder.svg?height=100&width=100" },
          { name: "Vein Finder", image: "/placeholder.svg?height=100&width=100" },
          { name: "Diathermy Machine", image: "/placeholder.svg?height=100&width=100" },
          { name: "Video Laryngoscope", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Anesthesia/Ventilator/CPAP",
        products: [
          { name: "Anesthesia Machine", image: "/placeholder.svg?height=100&width=100" },
          { name: "Ventilator Machine", image: "/placeholder.svg?height=100&width=100" },
          { name: "Neonatal Ventilator", image: "/placeholder.svg?height=100&width=100" },
          { name: "Transport/Emergency Ventilator", image: "/placeholder.svg?height=100&width=100" },
          { name: "CPAP/APAP/BIPAP", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Operating Light",
        products: [
          { name: "LED Operating Light", image: "/placeholder.svg?height=100&width=100" },
          { name: "Shadowless Operating Light", image: "/placeholder.svg?height=100&width=100" },
          { name: "Examination Light", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Operating Table/Suction Machine",
        products: [
          { name: "Electric Operating Table", image: "/placeholder.svg?height=100&width=100" },
          { name: "Mechanical Operating Table", image: "/placeholder.svg?height=100&width=100" },
          { name: "Obstetric Table", image: "/placeholder.svg?height=100&width=100" },
          { name: "Suction Machine", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Maternal & Neonatal Healthcare",
        products: [
          { name: "Infant Incubator", image: "/placeholder.svg?height=100&width=100" },
          { name: "Transport Incubator", image: "/placeholder.svg?height=100&width=100" },
          { name: "Infant Radiant Warmer", image: "/placeholder.svg?height=100&width=100" },
          { name: "Bilirubin Phototherapy Unit", image: "/placeholder.svg?height=100&width=100" },
          { name: "Video Colposcope", image: "/placeholder.svg?height=100&width=100" },
          { name: "Fetal & Maternal Monitor", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      {
        name: "Hospital Bed",
        products: [
          { name: "Hospital Bed", image: "/placeholder.svg?height=100&width=100" },
          { name: "Children Bed", image: "/placeholder.svg?height=100&width=100" },
          { name: "Mattress", image: "/placeholder.svg?height=100&width=100" },
          { name: "Hospital Stretcher", image: "/placeholder.svg?height=100&width=100" },
          { name: "Stretcher/Examination Table", image: "/placeholder.svg?height=100&width=100" },
          { name: "Bedside/Overbed Table", image: "/placeholder.svg?height=100&width=100" },
          { name: "Medical Trolley", image: "/placeholder.svg?height=100&width=100" },
          { name: "ENT & Dental Unit", image: "/placeholder.svg?height=100&width=100" },
        ],
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-center mb-8 md:text-4xl lg:text-5xl text-slate-800">
        Our Comprehensive Product Catalog
      </h1>
      <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
        Explore our wide range of high-quality medical supplies and equipment, categorized for your convenience.
      </p>

      {categoriesData.map((category, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 md:text-4xl text-green-700">{category.name}</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-4xl">{category.description}</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.subcategories.map((sub, subIndex) => (
              <Card
                key={subIndex}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="bg-gray-50 p-4 border-b">
                  <CardTitle className="text-xl font-semibold text-slate-800">{sub.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <ul className="space-y-4">
                    {sub.products.map((product, prodIndex) => (
                      <li key={prodIndex} className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={64}
                            height={64}
                            className="rounded-md object-cover border border-gray-200"
                          />
                        </div>
                        <span className="text-base font-medium text-slate-700">{product.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-4 border-t bg-gray-50">
                  <Button variant="ghost" className="w-full text-green-600 hover:bg-green-50 hover:text-green-700">
                    View All {sub.name}
                    <ChevronRight className="ml-2 h-4 w-4" />
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
