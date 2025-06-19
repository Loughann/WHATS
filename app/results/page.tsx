"use client"
import Image from "next/image"
import {
  Eye,
  AlertTriangle,
  Lock,
  Zap,
  BarChart,
  Users,
  MessageCircle,
  Calendar,
  MapPin,
  Heart,
  PhoneCall,
  ShieldCheck,
} from "lucide-react"
import MatrixBackground from "@/components/matrix-background"
import { Button } from "@/components/ui/button"

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-hacking-bg-dark">
      <MatrixBackground />
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl space-y-12">
        {/* Top Alert Section */}
        <div className="w-full p-4 rounded-lg flex items-center justify-center gap-4 shadow-lg border border-red-700 animate-pulse-border bg-[rgba(255,0,0,1)] text-white">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <h2 className="text-lg sm:text-2xl font-bold text-center">ALERTA: CONVERSA SUSPEITA DETECTADA</h2>
          <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        {/* Main Results Card */}
        <div className="relative w-full p-8 rounded-xl bg-hacking-card-bg overflow-hidden border border-transparent animate-glow-pulse">
          <div className="absolute inset-[-3px] rounded-xl bg-gradient-neon-border animate-pulse-border z-[-1]"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h3 className="text-4xl font-bold animate-glitch-text text-[rgba(0,255,0,1)] text-center">
                Relatórios de Conversas Encontradas
              </h3>
            </div>
            <p className="text-center text-whatsapp-text-light mb-8 max-w-2xl mx-auto">
              As conversas e mídias a seguir foram detectadas e estão protegidas. Desbloqueie para ver o conteúdo
              completo.
            </p>

            {/* Visual Proofs Section */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-hacking-primary mb-6 flex items-center gap-2">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" /> Capturas de Conversas e Mídias
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="relative w-full h-48 bg-gray-800 rounded-lg flex flex-col items-center justify-center border border-hacking-primary/50 overflow-hidden">
                  <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mb-2" />
                  <p className="text-gray-400 text-lg">Trecho de Conversa #1</p>
                  <Image
                    src="/images/E-agora-né_.webp"
                    alt="Trecho de Conversa de WhatsApp"
                    width={192}
                    height={192}
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
                  />
                </div>
                <div className="relative w-full h-48 bg-gray-800 rounded-lg flex flex-col items-center justify-center border border-hacking-primary/50 overflow-hidden">
                  <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mb-2" />
                  <p className="text-gray-400 text-lg">Trecho de Conversa #2</p>
                  <Image
                    src="/images/ZAP-fake.webp"
                    alt="Outro Trecho de Conversa de WhatsApp"
                    width={192}
                    height={192}
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
                  />
                </div>
                <div className="relative w-full h-48 bg-gray-800 rounded-lg flex flex-col items-center justify-center border border-hacking-primary/50 overflow-hidden">
                  <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mb-2" />
                  <p className="text-gray-400 text-lg">Foto Oculta #1</p>
                  <Image
                    src="/images/whatsapp-conversation-3.webp"
                    alt="Foto Oculta 2"
                    width={192}
                    height={192}
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
                  />
                </div>
              </div>
              <p className="text-center text-gray-300 text-sm mt-4">
                <Lock className="inline-block w-4 h-4 mr-1" /> Mais 5 trechos de conversas e 2 mídias foram encontrados
                e estão bloqueados.
              </p>
            </div>

            {/* Activity and Behavior Analysis */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-hacking-primary mb-6 flex items-center gap-2">
                <BarChart className="w-5 h-5 sm:w-6 sm:h-6" /> Análise de Padrões de Conversa
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-gray-800 border border-yellow-500/50 flex items-center gap-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Última Conversa Detectada</p>
                    <p className="text-white font-semibold">Hoje, 2:17 AM</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-800 border border-blue-500/50 flex items-center gap-3">
                  <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Frequência de Conversas</p>
                    <p className="text-white font-semibold">Muito Ativo</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-800 border border-purple-500/50 flex items-center gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Novos Contatos Recentes</p>
                    <p className="text-white font-semibold">3 nas últimas 24h</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-800 border border-pink-500/50 flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Padrão de Mensagens</p>
                    <p className="text-white font-semibold">7 conversas iniciadas</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-800 border border-orange-500/50 flex items-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Horários de Atividade</p>
                    <p className="text-white font-semibold">Padrão Noturno (22h - 3h)</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-800 border flex items-center gap-3 border-[rgba(239,68,68,1)]">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Local de Acesso Suspeito</p>
                    <p className="text-white font-semibold">Login fora da cidade</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Level */}
            <div className="w-full p-4 rounded-lg text-center shadow-lg border border-red-700 bg-[rgba(255,0,0,1)] text-white">
              <AlertTriangle className="inline-block w-5 h-5 mr-2" />
              <span className="font-bold">Nível de Risco: Elevado</span>
              <p className="text-sm mt-2">
                A atividade do perfil indica um alto risco de infidelidade e comportamento secreto.
              </p>
            </div>
          </div>
        </div>

        {/* Matches and Interac
tions Section */}
        <div className="relative w-full p-8 rounded-xl bg-hacking-card-bg overflow-hidden border border-transparent animate-glow-pulse">
          <div className="absolute inset-[-3px] rounded-xl bg-gradient-neon-border animate-pulse-border z-[-1]"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h3 className="text-4xl font-bold text-hacking-primary animate-glitch-text text-center">
                Contatos Recentes e Interações
              </h3>
            </div>
            <p className="text-center text-whatsapp-text-light mb-8 max-w-2xl mx-auto">
              Encontramos contatos recentes e interações. Os detalhes estão protegidos.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {[
                {
                  name: "Jez****",
                  age: 31,
                  src: "/images/make-clean-mulheres-com-mais-de-40.webp",
                  alt: "Foto de Jezebel",
                },
                { name: "Am****", age: 27, src: "/images/sophia-scaramella.webp", alt: "Foto de Amanda" },
                {
                  name: "Car****",
                  age: 22,
                  src: "/images/saveclip-app-506059474-1135088225043963-181757085848136623-n.webp",
                  alt: "Foto de Carla",
                },
                { name: "Sof****", age: 39, src: "/images/download.webp", alt: "Foto de Sofia" },
              ].map((match, i) => (
                <div
                  key={i}
                  className="relative w-full h-48 bg-gray-800 rounded-lg flex flex-col items-center justify-center border border-hacking-primary/50 overflow-hidden"
                >
                  <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mb-2" />
                  <p className="text-gray-400 text-lg">
                    {match.name}, {match.age}
                  </p>
                  <p className="text-gray-500 text-sm">Contato Recente</p>
                  <Image
                    src={match.src || "/placeholder.svg"}
                    alt={match.alt}
                    width={192}
                    height={192}
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 text-sm mt-4">
              <Lock className="inline-block w-4 h-4 mr-1" /> O relatório completo revela nomes, fotos sem blur e o
              conteúdo das conversas.
            </p>
          </div>
        </div>

        {/* Call History Section */}
        <div className="relative w-full p-8 rounded-xl bg-hacking-card-bg overflow-hidden border border-transparent animate-glow-pulse">
          <div className="absolute inset-[-3px] rounded-xl bg-gradient-neon-border animate-pulse-border z-[-1]"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h3 className="text-4xl font-bold text-hacking-primary animate-glitch-text text-center">
                Histórico de Ligações
              </h3>
            </div>
            <p className="text-center text-whatsapp-text-light mb-8 max-w-2xl mx-auto">
              Detectamos um histórico de chamadas de áudio e vídeo recentes.
            </p>

            <div className="space-y-4 blur-sm">
              {[
                { name: "Ana****", time: "Hoje, 21:14", duration: "12 min 45s", type: "received" },
                { name: "Sab****", time: "Ontem, 18:32", duration: "03 min 21s", type: "received" },
                { name: "Jul****", time: "13/06/2025", status: "Não atendida", type: "missed" },
                { name: "Lar****", time: "13/06/2025", duration: "28 min 09s", type: "received" },
                { name: "Cam****", time: "11/06/2025", status: "Não atendida", type: "missed" },
              ].map((call, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800 border border-hacking-primary/30"
                >
                  <div className="flex items-center gap-3">
                    {call.type === "received" ? (
                      <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    ) : (
                      <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 rotate-180" />
                    )}
                    <div>
                      <p className="text-white font-semibold">{call.name}</p>
                      <p className="text-gray-400 text-sm">{call.time}</p>
                    </div>
                  </div>
                  {call.duration && <p className="text-white font-semibold">{call.duration}</p>}
                  {call.status && <p className="font-semibold text-[rgba(248,113,113,1)]">{call.status}</p>}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 text-sm mt-4">
              <Lock className="inline-block w-4 h-4 mr-1" /> O conteúdo das chamadas e conversas está disponível no
              relatório completo.
            </p>
          </div>
        </div>

        {/* Unlock Section */}
        <div className="relative w-full p-8 rounded-xl bg-hacking-card-bg overflow-hidden border border-transparent animate-glow-pulse">
          <div className="absolute inset-[-3px] rounded-xl bg-gradient-neon-border animate-pulse-border z-[-1]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center text-hacking-primary mb-8">
              O que você vai descobrir ao desbloquear o relatório Completo?
            </h3>
            <p className="text-center text-whatsapp-text-light mb-8 max-w-2xl mx-auto">
              Por um pagamento único de <span className="font-bold text-[rgba(0,255,0,1)]">R$14,90</span>, você terá
              acesso total e irrestrito a um relatório completo com todas as conversas e mídias. Chega de dúvidas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Fotos e vídeos das conversas",
                "Conteúdo completo das mensagens (arquivadas, antigas e atuais)",
                "Lista de contatos e interações recentes",
                "Início e conteúdo de conversas suspeitas",
                "Padrões de atividade e horários de conversa",
                "Localizações de acesso às conversas",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-whatsapp-text-light">
                  <ShieldCheck
                    className={`text-hacking-primary ${i === 1 ? "w-10 h-10 sm:w-12 sm:h-12" : "w-6 h-6 sm:w-8 sm:h-8"}`}
                  />
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="font-bold text-center text-hacking-primary flex items-center justify-center gap-2 text-lg md:text-xl whitespace-nowrap">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" /> A Verdade Está a Um Clique{" "}
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[rgba(0,255,0,1)]" />
              </p>
              <Button
                onClick={() => window.open("https://pay.kirvano.com/be0647e5-e421-4c1c-8906-fe7cc3ec78d8", "_blank")}
                className="w-full py-6 rounded-xl text-lg md:text-xl font-bold bg-hacking-primary shadow-xl hover:opacity-90 hover:shadow-2xl hover:scale-105 transition-all animate-intense-button-pulse text-black whitespace-nowrap px-4"
              >
                RELATÓRIO COMPLETO POR R$14,90
              </Button>
              <p className="text-gray-400 text-sm text-center">
                Pagamento único e 100% seguro. Acesso vitalício às informações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
