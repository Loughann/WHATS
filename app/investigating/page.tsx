"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Globe, BarChart, MessageCircle, Trash2, History, Clock, FileText } from "lucide-react"
import MatrixBackground from "@/components/matrix-background"
import { useRouter } from "next/navigation" // Importar useRouter

interface InvestigationStep {
  id: number
  text: string
  icon: React.ElementType
  delay: number // Delay in milliseconds before this step starts
  duration: number // Duration of this step in milliseconds
}

export default function InvestigatingPage() {
  const searchParams = useSearchParams()
  const phoneNumber = searchParams.get("phone") || "(XX) XXXXX-XXXX" // Get phone number from URL
  const router = useRouter() // Inicializar useRouter

  const [currentStepIndex, setCurrentStepIndex] = useState(-1)
  const [progress, setProgress] = useState(0) // Reintroduzindo o estado de progresso
  const [simulating, setSimulating] = useState(true) // Reintroduzindo o estado de simulação
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null) // Ref para o tempo de início da animação da simulação

  const stepsRef = useRef<InvestigationStep[]>([
    {
      id: 0,
      text: "Cruzando dados com o número fornecido...",
      icon: Globe,
      delay: 1000,
      duration: 3500,
    },
    {
      id: 1,
      text: "Gerando conversas arquivadas...",
      icon: MessageCircle,
      delay: 1000,
      duration: 3000,
    },
    {
      id: 2,
      text: "Recuperando conversas apagadas...",
      icon: Trash2,
      delay: 1000,
      duration: 4000,
    },
    {
      id: 3,
      text: "Compilando conversas antigas...",
      icon: History,
      delay: 1000,
      duration: 3500,
    },
    {
      id: 4,
      text: "Coletando conversas atuais...",
      icon: Clock,
      delay: 1000,
      duration: 3000,
    },
    {
      id: 5,
      text: "Compilando relatório completo da investigação...",
      icon: FileText,
      delay: 1000,
      duration: 5000,
    },
  ])

  // Calcula a duração total da simulação somando os delays e durations de cada passo
  const totalSimulationDuration = stepsRef.current.reduce((acc, step) => acc + step.delay + step.duration, 0)

  useEffect(() => {
    // Se a simulação não deve estar ativa, garante que qualquer animação ativa seja cancelada
    if (!simulating) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      return
    }

    // Define a função do loop de animação
    const animateProgress = (currentTime: DOMHighResTimeStamp) => {
      // Inicializa startTimeRef.current apenas se for nulo (primeira execução deste ciclo de simulação)
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime
      }

      const elapsedTime = currentTime - startTimeRef.current
      const newProgress = (elapsedTime / totalSimulationDuration) * 100
      const currentProgress = Math.min(newProgress, 100) // Garante que o progresso não exceda 100%

      setProgress(currentProgress)

      // Determina o passo de investigação atual com base no tempo decorrido
      let cumulativeTime = 0
      let foundCurrentStep = false
      for (let i = 0; i < stepsRef.current.length; i++) {
        const step = stepsRef.current[i]
        const stepStart = cumulativeTime + step.delay
        const stepEnd = stepStart + step.duration

        if (elapsedTime >= stepStart && elapsedTime < stepEnd) {
          setCurrentStepIndex(i)
          foundCurrentStep = true
          break
        }
        cumulativeTime += step.delay + step.duration
      }

      // Se o tempo decorrido atingiu ou ultrapassou a duração total da simulação
      if (elapsedTime >= totalSimulationDuration) {
        setCurrentStepIndex(stepsRef.current.length - 1) // Garante que o último passo esteja ativo
        setProgress(100) // Define o progresso para 100%
        setSimulating(false) // Para a simulação
        router.push(`/results?phone=${encodeURIComponent(phoneNumber)}`) // Redireciona para a página de resultados
        // Não é necessário cancelar requestAnimationFrame aqui, o retorno já impede a próxima requisição
      } else {
        // Continua a animação agendando o próximo frame
        animationFrameRef.current = requestAnimationFrame(animateProgress)
      }
    }

    // Inicia o loop de animação
    animationFrameRef.current = requestAnimationFrame(animateProgress)

    // Função de limpeza: cancela o requestAnimationFrame quando o componente é desmontado
    // ou quando as dependências do useEffect mudam e o efeito é re-executado
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null // Limpa a referência
      }
    }
  }, [simulating, totalSimulationDuration, phoneNumber, router]) // Dependências: o efeito só roda quando 'simulating' ou 'totalSimulationDuration' mudam

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-hacking-bg-dark">
      <MatrixBackground />
      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        {/* Header Section */}
        <header className="flex items-center justify-center gap-2 mb-8 w-full">
          <h1 className="text-5xl font-extrabold tracking-tight text-hacking-primary animate-glitch-text">
            INVESTIGANDO
          </h1>
        </header>

        {/* Analyzing Phone Number */}
        <div className="w-full p-4 rounded-lg bg-hacking-card-bg border border-hacking-primary/50 mb-6 text-center">
          <p className="text-lg font-semibold text-whatsapp-text-light">
            Analisando: <span className="text-hacking-primary">{phoneNumber}</span>
          </p>
        </div>

        {/* Progress Percentage */}
        <p className="text-xl font-bold text-whatsapp-text-light mb-8 flex items-center gap-2">
          <BarChart className="w-6 h-6 text-hacking-primary" />
          {Math.round(progress)}% CONCLUÍDO
        </p>

        {/* Investigation Steps */}
        <div className="w-full space-y-4">
          {stepsRef.current.map((step, index) => (
            <div
              key={step.id}
              className={`relative p-4 rounded-lg transition-all duration-500 ease-in-out
                ${
                  index === currentStepIndex
                    ? "bg-hacking-card-bg border border-hacking-primary/80 shadow-lg animate-pulse-border" // Active step
                    : index < currentStepIndex
                      ? "bg-hacking-card-bg border border-hacking-primary/80" // Completed step (mais acesso)
                      : "bg-hacking-card-bg border border-hacking-primary/10 opacity-40" // Pending step
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${
                    index <= currentStepIndex ? "bg-hacking-primary" : "bg-gray-800"
                  } ${index === currentStepIndex ? "animate-hacking-icon-glow-primary" : ""}`}
                >
                  <step.icon className={`w-5 h-5 ${index <= currentStepIndex ? "text-white" : "text-gray-400"}`} />
                </div>
                <p
                  className={`text-lg font-medium ${
                    index <= currentStepIndex ? "text-hacking-primary" : "text-whatsapp-text-light"
                  }`}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
