"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'

const questions = [
  {
    id: "name",
    question: "Boleh tahu nama kamu?",
    type: "text",
  },
  {
    id: "email",
    question: "Boleh tahu email kamu?",
    type: "email",
  },
  {
    id: "q1",
    question: "Seberapa tahan lama parfum yang kamu inginkan?",
    options: [
      "🔥 Sepanjang hari (12+ jam) – biar wanginya tetap awet dari pagi sampai malam!",
      "🌅 Sedang (6-12 jam) – cukup bertahan sepanjang aktivitas harian.",
      "🌿 Ringan (3-6 jam) – cukup untuk memberi kesegaran tanpa terlalu intens.",
    ],
  },
  {
    id: "q2",
    question: "Kapan biasanya kamu memakai parfum?",
    options: [
      "☀️ Pagi hingga siang – untuk semangat memulai hari!",
      "🌙 Sore hingga malam – cocok untuk acara spesial atau momen santai.",
      "🎉 Sepanjang hari – aku harus selalu wangi dalam setiap kesempatan!",
    ],
  },
  {
    id: "q3",
    question: "Kepribadian kamu lebih ke arah mana?",
    options: [
      "😎 Percaya diri & berkarisma – ingin tampil menonjol dan berwibawa.",
      "🎨 Kreatif & ekspresif – suka aroma unik yang mencerminkan jiwa artistik.",
      "😊 Ramah & menyenangkan – aroma yang ringan dan menyegarkan cocok buatku.",
      "🤵 Elegan & berkelas – mencari parfum yang eksklusif dan sophisticated.",
    ],
  },
  {
    id: "q4",
    question: "Aroma favorit yang paling kamu suka?",
    options: [
      "🌸 Floral – lembut dan feminin, seperti bunga yang baru mekar.",
      "🍊 Fresh & citrus – segar dan energik, cocok untuk mood booster.",
      "🍂 Woody & earthy – hangat dan maskulin, memberi kesan kuat.",
      "🍦 Gourmand – manis dan menggoda, seperti vanila dan karamel.",
      "❌ Aku belum tahu – bantu aku menemukan aroma yang pas!",
    ],
  },
  {
    id: "q5",
    question: "Nuansa aroma seperti apa yang paling cocok buatmu?",
    options: [
      "💨 Lembut & subtle – cukup terasa tanpa berlebihan.",
      "🌊 Segar & menyegarkan – bikin semangat sepanjang hari.",
      "🔥 Hangat & menggoda – meninggalkan kesan misterius dan seksi.",
      "🎩 Mewah & eksklusif – kesan premium yang bikin percaya diri.",
    ],
  },
  {
    id: "q6",
    question: "Aktivitas utama kamu sehari-hari?",
    options: [
      "🏋️‍♂️ Olahraga & aktif bergerak – butuh parfum yang segar dan tahan lama.",
      "🏢 Bekerja di kantor atau meeting – aroma elegan dan profesional cocok buatku.",
      "🍽️ Hangout & jalan-jalan santai – aroma ringan yang nyaman dipakai kapan saja.",
      "🎩 Acara formal atau pesta – parfum yang mewah dan eksklusif adalah pilihan utamaku.",
    ],
  },
  {
    id: "q7",
    question: "Untuk acara spesial, parfum seperti apa yang kamu pilih?",
    options: [
      "✨ Eksklusif & mewah – ingin tampil standout dengan aroma premium.",
      "💕 Romantis & memikat – aroma yang manis dan menggoda hati.",
      "🔥 Kuat & meninggalkan kesan – memastikan semua orang mengingat kehadiranku.",
      "🎶 Santai & kasual – tetap wangi tanpa terkesan terlalu berlebihan.",
    ],
  },
  {
    id: "q8",
    question: "Parfum dengan gender yang kamu cari?",
    options: [
      "🚹 Maskulin – aroma khas pria yang tegas dan elegan.",
      "🚺 Feminin – lembut dan anggun, menonjolkan sisi feminin.",
      "🌿 Unisex – fleksibel, bisa dipakai siapa saja!",
    ],
  },
  {
    id: "q9",
    question: "Seberapa kuat aroma parfum yang kamu suka?",
    options: [
      "🎐 Ringan & lembut – cukup untuk memberi kesan segar tanpa berlebihan.",
      "🌟 Sedang – balance, tetap terasa tapi tidak overpowering.",
      "💥 Kuat & dominan – ingin aroma yang benar-benar stand out.",
    ],
  },
  {
    id: "q10",
    question: "Parfum ini lebih sering kamu pakai di…",
    options: [
      "🌞 Siang hari – segar & ringan, cocok untuk aktivitas harian.",
      "🌙 Malam hari – hangat & menggoda, pas untuk acara spesial.",
      "🔄 Fleksibel – bisa dipakai kapan saja tanpa batasan waktu.",
    ],
  },
];


export default function QuizPage({ onSubmit }: { onSubmit: (results: any) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
    if (questions[currentQuestion].type !== "text" && questions[currentQuestion].type !== "email") {
      handleNext()
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = async () => {
    try {
      console.log('Submitting quiz:', answers)
      onSubmit(answers)
    } catch (error) {
      console.error('Error submitting quiz:', error)
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-500 ease-in-out transform">
        <h2 className="text-2xl font-bold mb-4 text-white">{question.question}</h2>
        {question.type === "text" || question.type === "email" ? (
          <div className="mb-4">
            <Input
              type={question.type}
              id={question.id}
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              className="bg-gray-700 text-white"
            />
            <Button
              onClick={handleNext}
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              disabled={!answers[question.id]}
            >
              Next
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {question.options && question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full py-2 px-4 rounded-lg border text-left transition duration-300 ease-in-out transform hover:scale-105 ${answers[question.id] === option ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-white'}`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {currentQuestion === questions.length - 1 && (
          <Button onClick={handleSubmit} className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white">
            Submit
          </Button>
        )}
      </div>
      <div className="mt-4 text-white">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  )
}

