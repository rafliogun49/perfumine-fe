import { Button } from "@/components/ui/button"

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Perfumine</h1>
        <p className="text-xl mb-8">Bingung nyari parfum lokal? cari tau aja di sini!</p>
        <Button onClick={onStart} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg">Start Quiz</Button>
      </div>
    </div>
  )
}

