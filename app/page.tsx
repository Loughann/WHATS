"use client" // Adicionado para permitir o uso de hooks de estado

import type React from "react"

import {
  Heart,
  Eye,
  ShieldCheck,
  CheckCircle,
  Lock,
  Star,
  Search,
  Phone,
  AlertTriangle,
  Flame,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MatrixBackground from "@/components/matrix-background"
import { useState, useEffect, useRef } from "react" // Importar useState, useEffect, useRef
import { useRouter } from "next/navigation" // Importar useRouter

export default function WhatsEspiaoPage() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null) // Estado para o gênero selecionado
  const [phoneNumber, setPhoneNumber] = useState<string>("") // Estado para o número de telefone
  const [remainingVerifications, setRemainingVerifications] = useState<number>(30) // Estado para o número de verificações
  const timeoutRef = useRef<NodeJS.Timeout | null>(null) // Ref para o timeout do contador
  const [showPhoneWarning, setShowPhoneWarning] = useState(false) // Novo estado para controlar a visibilidade do aviso
  const router = useRouter() // Inicializar useRouter

  const userMessages = [
    { username: "Bia_oliveira", gender: "female" },
    { username: "João_silva", gender: "male" },
    { username: "Ana_costa", gender: "female" },
    { username: "Pedro_alves", gender: "male" },
    { username: "Mari_souza", gender: "female" },
  ]
  const [currentUserMessageIndex, setCurrentUserMessageIndex] = useState(0)
  const userMessageTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Efeito para diminuir o número de verificações em tempo aleatório
  useEffect(() => {
    const decrementVerifications = () => {
      setRemainingVerifications((prevCount) => {
        if (prevCount > 1) {
          const randomDelay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000 // Atraso aleatório entre 5 e 10 segundos
          timeoutRef.current = setTimeout(decrementVerifications, randomDelay)
          return prevCount - 1
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current) // Limpa o timeout quando chega a 1
          }
          return 1 // Garante que o valor não desça de 1
        }
      })
    }

    // Inicia o primeiro decremento
    const initialDelay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
    timeoutRef.current = setTimeout(decrementVerifications, initialDelay)

    // Limpa o timeout ao desmontar o componente
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, []) // Executa apenas uma vez ao montar

  // Efeito para alternar as mensagens de usuários
  useEffect(() => {
    const rotateUserMessage = () => {
      setCurrentUserMessageIndex((prevIndex) => (prevIndex + 1) % userMessages.length)
      const randomDelay = Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000 // Atraso aleatório entre 4 e 8 segundos
      userMessageTimeoutRef.current = setTimeout(rotateUserMessage, randomDelay)
    }

    // Inicia a primeira rotação de mensagem
    const initialDelay = Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000
    userMessageTimeoutRef.current = setTimeout(rotateUserMessage, initialDelay)

    // Limpa o timeout ao desmontar o componente
    return () => {
      if (userMessageTimeoutRef.current) {
        clearTimeout(userMessageTimeoutRef.current)
      }
    }
  }, [userMessages.length]) // Depende do tamanho da lista de mensagens

  const formatPhoneNumber = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g, "") // Remove tudo que não é dígito
    if (value.length > 11) value = value.slice(0, 11) // Limita a 11 dígitos

    if (value.length <= 2) {
      return `(${value}`
    }
    if (value.length <= 7) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`
    }
    if (value.length <= 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
    }
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedGender) {
      setShowPhoneWarning(true) // Mostra o aviso se não houver gênero selecionado
      e.preventDefault() // Impede a digitação
      return
    }
    setShowPhoneWarning(false) // Esconde o aviso se um gênero estiver selecionado
    const formattedValue = formatPhoneNumber(e.target.value)
    setPhoneNumber(formattedValue)
  }

  const handlePhoneInputFocus = () => {
    if (!selectedGender) {
      setShowPhoneWarning(true)
    } else {
      setShowPhoneWarning(false)
    }
  }

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender)
    setShowPhoneWarning(false) // Esconde o aviso ao selecionar um gênero
  }

  const scrollToInvestigation = () => {
    const investigationSection = document.getElementById("investigation-form")
    if (investigationSection) {
      investigationSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getCleanPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, "") // Remove tudo que não é dígito
  }

  const handleExposeTruth = () => {
    const cleanPhoneNumber = getCleanPhoneNumber(phoneNumber)
    if (!selectedGender || cleanPhoneNumber.length !== 11) {
      setShowPhoneWarning(true)
      return
    }
    router.push(`/investigating?phone=${encodeURIComponent(phoneNumber)}`)
  }

  const currentMessage = userMessages[currentUserMessageIndex]
  const pronoun = currentMessage.gender === "female" ? "dela" : "dele"

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {" "}
      {/* Adicionado relative e overflow-hidden para o canvas */}
      <MatrixBackground /> {/* Adicionado o componente MatrixBackground */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {" "}
        {/* Conteúdo principal em uma nova div para ficar acima do canvas */}
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-whatsapp-accent-main to-whatsapp-accent-dark shadow-lg">
              <Heart className="w-10 h-10 text-whatsapp-text-light" />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-whatsapp-accent-main animate-title-glow">
              WHATS ESPIÃO
            </h1>
            <div className="p-4 rounded-full bg-gradient-to-br from-whatsapp-accent-main to-whatsapp-accent-dark shadow-lg">
              <Eye className="w-10 h-10 text-whatsapp-text-light" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl text-whatsapp-text-light">
            A desconfiança te paralisa? Descubra o histórico de conversas no WhatsApp.
          </h2>
          <p className="text-lg text-whatsapp-text-light mb-8 max-w-3xl">
            Milhões de pessoas usam o WhatsApp para esconder segredos. Nossa tecnologia expõe conversas e te dá a prova
            que você precisa. Chega de noites em claro e incerteza.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark text-sm font-medium shadow-md text-black">
              <ShieldCheck className="w-4 h-4" />
              100% Seguro
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark text-sm font-medium shadow-md text-black">
              <CheckCircle className="w-5 h-5" />
              Resultados Precisos
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark text-sm font-medium shadow-md text-black">
              <Lock className="w-4 h-4" />
              Totalmente Anônimo
            </div>
          </div>

          <div className="flex items-center gap-2 text-lg font-semibold mb-4 text-white">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-[rgba(255,214,0,1)]" />
            ))}
            4.9/5.0
          </div>
          <p className="text-whatsapp-text-light text-sm max-w-xl">
            Junte-se às mais de <span className="font-bold text-whatsapp-text-light">7 mil pessoas</span> que usaram
            hoje para descobrir a verdade.
            <br />
            <span className="text-xs text-emerald-500">(+50.000 investigações de sucesso)</span>
          </p>
        </header>
        {/* Call to Action Button */}
        <Button
          onClick={scrollToInvestigation} // Adicionado o handler de clique
          className="w-full max-w-xs py-6 rounded-xl text-xl font-bold bg-gradient-button shadow-xl hover:opacity-90 hover:shadow-2xl hover:scale-105 transition-all mb-16 bg-[rgba(21,255,0,1)] text-black animate-intense-button-pulse"
        >
          <Heart className="w-6 h-6 mr-2" />
          Descubra a Verdade
        </Button>
        {/* Feature Cards Section */}
        <section className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          <div className="relative p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-section-bg border border-transparent before:absolute before:inset-0 before:p-[2px] before:bg-gradient-border before:rounded-xl before:z-[-1]">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-whatsapp-accent-main to-whatsapp-accent-dark mb-4">
                <Heart className="w-8 h-8 text-whatsapp-text-light" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark">
                Descubra a Verdade
              </h3>
              <p className="text-whatsapp-text-light">
                Mesmo que ele(a) use um nome falso ou outra foto, nosso sistema encontra. Descubra a verdade que tentam
                esconder de você.
              </p>
            </div>
          </div>

          <div className="relative p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-section-bg border border-transparent before:absolute before:inset-0 before:p-[2px] before:bg-gradient-border before:rounded-xl before:z-[-1]">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-whatsapp-accent-main to-whatsapp-accent-dark mb-4">
                <MessageCircle className="w-8 h-8 text-whatsapp-text-light" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark">
                Provas Irrefutáveis
              </h3>
              <p className="text-whatsapp-text-light">
                Veja com quem ele(a) conversa, as fotos que usa e até o início das conversas. A verdade, na palma da sua
                mão.
              </p>
            </div>
          </div>

          <div className="relative p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-section-bg border border-transparent before:absolute before:inset-0 before:p-[2px] before:bg-gradient-border before:rounded-xl before:z-[-1]">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-whatsapp-accent-main to-whatsapp-accent-dark mb-4">
                <ShieldCheck className="w-8 h-8 text-whatsapp-text-light" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark">
                Proteja-se com Sigilo
              </h3>
              <p className="text-whatsapp-text-light">
                Sua identidade é 100% protegida. Ele(a) NUNCA saberá que você investigou. Aja com segurança e recupere
                sua paz.
              </p>
            </div>
          </div>
        </section>
        {/* Investigation Form Section */}
        <section
          id="investigation-form" // Adicionado o ID para rolagem
          className="w-full max-w-md p-8 rounded-xl bg-gradient-section-bg relative overflow-hidden border border-transparent animate-glow-pulse"
        >
          <div className="absolute inset-[-3px] rounded-xl bg-gradient-neon-border animate-pulse-border z-[-1]"></div>
          <div className="relative z-10">
            <p className="text-center text-whatsapp-text-light mb-6 text-xl italic">
              Você vai continuar na dúvida enquanto outros descobrem a verdade?
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="w-6 h-6 text-[rgba(21,255,0,1)]" />
              <h3 className="font-bold bg-clip-text bg-gradient-to-r from-whatsapp-accent-main to-whatsapp-accent-dark text-center text-4xl animate-pulse text-[rgba(21,255,0,1)]">
                ACABE COM A ANGÚSTIA
              </h3>
            </div>
            <p className="text-center text-whatsapp-text-light mb-8">
              Um simples número de telefone é tudo o que precisamos para revelar se a sua confiança está sendo traída.
            </p>

            <p className="text-center font-semibold mb-4 text-whatsapp-text-light text-2xl">
              Quem você quer investigar?
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={() => handleGenderSelection("male")}
                className={`flex-1 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-lg font-semibold animate-subtle-button-pulse
                  ${
                    selectedGender === "male"
                      ? "bg-whatsapp-blue-selected shadow-blue-glow text-whatsapp-text-light" // Azul e brilho azul
                      : "bg-muted-blue text-whatsapp-text-light" // Azul apagado e texto claro
                  }`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Homem
              </Button>
              <Button
                onClick={() => handleGenderSelection("female")}
                className={`flex-1 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-lg font-semibold animate-subtle-button-pulse
                  ${
                    selectedGender === "female"
                      ? "bg-whatsapp-pink-selected shadow-pink-glow text-whatsapp-text-light" // Rosa e brilho rosa
                      : "bg-muted-pink text-whatsapp-text-light" // Rosa apagado e texto claro
                  }`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Mulher
              </Button>
            </div>

            <p className="text-center text-lg font-semibold mb-2 text-whatsapp-text-light">Número de Whatsapp:</p>
            <Input
              type="tel"
              placeholder="(11) 11111-1111"
              className="w-full py-3 px-4 rounded-lg border border-whatsapp-border-light text-center text-lg mb-6 focus:border-whatsapp-accent-main focus:ring-whatsapp-accent-main bg-white text-black"
              value={phoneNumber} // Controla o valor do input
              onChange={handlePhoneChange} // Adiciona o handler de mudança
              onFocus={handlePhoneInputFocus} // Adiciona o handler de foco
            />
            {showPhoneWarning && (
              <p className="text-center text-red-400 text-sm mb-4">
                Por favor, selecione um gênero antes de digitar o número.
              </p>
            )}

            <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-900/50 text-yellow-300 text-sm mb-6 animate-text-neon-pulse">
              <AlertTriangle className="w-4 h-4 animate-icon-neon-pulse" /> {/* Ícone com animação neon */}
              Apenas <span className="font-bold">{remainingVerifications}</span> verificações gratuitas hoje.
            </div>

            <Button
              onClick={handleExposeTruth} // Novo handler para redirecionar
              disabled={!selectedGender || getCleanPhoneNumber(phoneNumber).length !== 11} // Adicionado a condição de desabilitação
              className="w-full py-4 rounded-xl text-xl font-bold bg-gradient-button shadow-xl hover:opacity-90 hover:shadow-2xl hover:scale-105 transition-all mb-6 bg-[rgba(21,255,0,1)] text-black animate-intense-button-pulse"
            >
              EXPOR A VERDADE AGORA
            </Button>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-900/50 text-green-300 text-sm mb-6 animate-subtle-glow">
              <Flame className="w-4 h-4 text-red-500 animate-subtle-glow" />
              <span className="font-semibold">
                @{currentMessage.username} viu as conversas que tentaram esconder {pronoun}.
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-whatsapp-text-light">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                Totalmente Anônimo
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                Sem Rastros
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-5 h-5" />
                Resultados Instantâneos
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
