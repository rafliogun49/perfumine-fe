import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ResultsPage({ results }: { results: any }) {
  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Perfume Recommendations</h1>

        <Card className="mb-8 bg-gray-800 text-white">
          <CardHeader>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            <CardTitle>Your Fragrance Persona: {results.insight.persona}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4"><strong>Characteristics:</strong> {results.insight.characteristics}</p>
            <p className="mb-4"><strong>Ideal Scent:</strong> {results.insight.ideal_scent}</p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Recommended Perfumes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {results.recommendations.map((perfume: any) => (
            <Card key={perfume.id} className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>{perfume.name}</CardTitle>
                <CardDescription>{perfume.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={perfume.image_url || "/placeholder.svg"}
                  alt={perfume.name}
                  className="w-full h-96 object-cover mb-4 rounded-md"
                />
                <br />
                <br />
                <p><strong>Description:</strong> {perfume.description}</p>
                <p><strong>Top Notes:</strong> {perfume.top_notes}</p>
                <p><strong>Middle Notes:</strong> {perfume.middle_notes}</p>
                <p><strong>Base Notes:</strong> {perfume.base_notes}</p>
                <p><strong>Gender:</strong> {perfume.gender}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

