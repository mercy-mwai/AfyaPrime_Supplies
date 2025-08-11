import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

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
          { name: "Oxygen Mask", image: "/assets/images/respiratory.png" },
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
          { name: "Anesthesia Machine", image: "/assets/images/anaesthesia.png" },
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

export default function ProductsCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-center mb-8 md:text-4xl lg:text-5xl">
        Our Products & Categories
      </h1>

      {categoriesData.map((category, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl">{category.name}</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">{category.description}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.subcategories.map((sub, subIndex) => (
              <Card key={subIndex} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">{sub.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {sub.products.map((product, prodIndex) => (
                      <div key={prodIndex} className="flex items-center gap-3">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded-md object-cover"
                        />
                        <span className="text-sm text-muted-foreground">{product.name}</span>
                      </div>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
