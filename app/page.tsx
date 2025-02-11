"use client"

import { useState } from "react"
import LandingPage from "./components/LandingPage"
import QuizPage from "./components/QuizPage"
import ResultsPage from "./components/ResultsPage"
import axios from "axios"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("landing")
  const [quizResults, setQuizResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigateTo = (page: string) => setCurrentPage(page)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleQuizSubmit = async (results: any) => {
    setLoading(true)
    try {
      const response = await axios.post('https://my_app.rafliogun49.workers.dev/recommend-perfume', results)
      setQuizResults(response.data)
      navigateTo("results")
    } catch (error) {
      console.error('Error submitting quiz:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div className="flex flex-col items-center text-center">
          <div className="loader mb-4"></div>
          <p className="text-xl">AI memikirkan rekomendasi parfum yang tepat untukmu</p>
        </div>
      </div>      
      )}
      {currentPage === "landing" && <LandingPage onStart={() => navigateTo("quiz")} />}
      {currentPage === "quiz" && <QuizPage onSubmit={handleQuizSubmit} />}
      {currentPage === "results" && <ResultsPage results={quizResults} />}
    </main>
  )
}

