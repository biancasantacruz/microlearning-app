"use client";

import { useState } from "react";
import LoginButton from "@/app/components/LoginButton";

function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl p-8 w-full max-w-sm flex flex-col items-center gap-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-trilha-text/40 hover:text-trilha-text transition-colors text-xl leading-none"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Logo */}
        <span className="text-2xl font-bold tracking-tight">
          tri<span className="text-terracota">lha</span>
        </span>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-trilha-text">Comece sua trilha grátis</h2>
          <p className="text-sm text-trilha-text/50 mt-1">7 dias grátis · Sem cartão de crédito</p>
        </div>

        <LoginButton />

        <p className="text-xs text-trilha-text/40 text-center">
          Ao continuar você concorda com os{" "}
          <span className="underline cursor-pointer">Termos de uso</span>
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full bg-trilha-bg text-trilha-text font-sans">
      {modalOpen && <LoginModal onClose={() => setModalOpen(false)} />}

      {/* Nav */}
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-trilha-bg border-b border-terracota-mid/30">
        <span className="text-2xl font-bold tracking-tight">
          tri<span className="text-terracota">lha</span>
        </span>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 rounded-full border border-terracota text-terracota text-sm font-semibold bg-transparent hover:bg-terracota hover:text-white transition-colors"
        >
          Entrar
        </button>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-terracota text-white w-full">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-32 md:pt-24 flex flex-col md:flex-row items-center gap-10 md:gap-0 w-full">

          {/* Left: text content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight">
              O mercado de produto está mudando rápido. Sua carreira também precisa.
            </h1>
            <p className="text-lg md:text-xl max-w-md text-terracota-light/90">
              Aprenda o que importa, no tempo que você tem. Trilha entrega microconteúdo feito para gestores de produto que não param.
            </p>
            <div className="flex justify-center md:justify-start w-full">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-full bg-white text-terracota-dark font-bold text-base hover:bg-terracota-light transition-colors shadow-md"
              >
                Monte sua trilha de carreira
              </button>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="relative flex justify-center md:w-1/2" style={{ minHeight: 320 }}>
            <div className="relative mt-6 w-full flex justify-center" style={{ maxWidth: 340 }}>

              {/* Floating card — right side */}
              <div
                className="absolute z-10 bg-white rounded-xl p-[10px] flex flex-col gap-[6px] shadow-lg"
                style={{
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 140,
                  border: "1px solid #E8B89A",
                  borderRadius: 12,
                }}
              >
                <p style={{ fontSize: 10, color: "#9CA3AF" }}>Dia 4 de 30</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 }}>
                  Priorização com dados
                </p>
                <div style={{ height: 4, borderRadius: 99, background: "#E8B89A", overflow: "hidden" }}>
                  <div style={{ width: "30%", height: "100%", background: "#C1714F", borderRadius: 99 }} />
                </div>
              </div>

              {/* Phone container */}
              <div
                className="relative shadow-2xl"
                style={{ width: 260, borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}
              >
                {/* Mockup header */}
                <div style={{ background: "#C1714F", padding: "14px 14px 12px" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.85)" }}>Sua trilha · 30 dias</span>
                    <span style={{ fontSize: 11, color: "white", background: "rgba(255,255,255,0.2)", borderRadius: 99, padding: "2px 8px" }}>
                      🔥 7 dias
                    </span>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: "white", lineHeight: 1.3 }}>PM de IA em 30 dias</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>Nível mid · 15 min por dia</p>
                </div>

                {/* Mockup body */}
                <div style={{ background: "white", padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ display: "inline-block", fontSize: 10, fontWeight: 600, color: "#8C4A2F", background: "#FAF0EB", borderRadius: 99, padding: "3px 10px", alignSelf: "flex-start" }}>
                    📖 Fundamento
                  </span>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.4 }}>
                    Pensamento probabilístico para PMs
                  </p>
                  <div style={{ borderLeft: "3px solid #C1714F", background: "#F5F3F0", borderRadius: "0 6px 6px 0", padding: "8px 10px", fontSize: 11, color: "#1A1A1A", lineHeight: 1.5 }}>
                    Seu trabalho é decidir qual taxa de acerto é boa o suficiente — e projetar para quando errar.
                  </div>
                  <div className="flex gap-[6px] items-center">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "#C1714F" : "#E8B89A" }} />
                    ))}
                  </div>
                  <button style={{ background: "#C1714F", color: "white", border: "none", borderRadius: 8, padding: "9px 0", fontSize: 12, fontWeight: 600, width: "100%", cursor: "pointer" }}>
                    Entendi, ver exemplo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Base gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: 80, background: "linear-gradient(to bottom, transparent, #F5F3F0)" }}
        />
      </section>

      {/* O Problema */}
      <section className="px-6 py-20 flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">O problema</h2>
          <p className="text-trilha-text/60 max-w-lg">
            Gestores de produto vivem no limite do tempo. O aprendizado tradicional não funciona para esse ritmo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {[
            { icon: "⏱", title: "Sem tempo", body: "Cursos longos não encaixam na rotina de um PM. Você começa, para, esquece — e volta ao ponto zero." },
            { icon: "📚", title: "Conteúdo genérico", body: "A maioria dos materiais foi feita para todo mundo, e acaba sendo útil para ninguém. PMs precisam de contexto real." },
            { icon: "📉", title: "Carreira estagnada", body: "Sem aprendizado contínuo e direcionado, fica difícil avançar para papéis de liderança e impacto maior." },
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-white rounded-2xl p-8 flex flex-col gap-3 shadow-sm border border-terracota-mid/20">
              <span className="text-3xl">{icon}</span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-trilha-text/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A Solução */}
      <section className="bg-terracota-light px-6 py-20 flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">A solução</h2>
          <p className="text-trilha-text/60 max-w-lg">Trilha foi desenhada para encaixar no seu dia — não o contrário.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {[
            { step: "01", title: "Defina seu objetivo", body: "Você escolhe para onde quer ir: liderança técnica, discovery, estratégia de produto ou crescimento de carreira." },
            { step: "02", title: "Aprenda em 5 minutos", body: "Cada lição cabe em uma pausa. Textos, vídeos e exercícios práticos compactos, feitos para ser revisitados." },
            { step: "03", title: "Aplique no trabalho", body: "Templates, frameworks e exemplos reais que você usa direto nas suas próximas reuniões e decisões." },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex flex-col gap-4 flex-1">
              <span className="text-5xl font-black text-terracota-mid leading-none">{step}</span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-trilha-text/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Números */}
      <section className="px-6 py-20 flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold text-center">Trilha em números</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full text-center">
          {[
            { value: "+2.000", label: "gestores de produto na plataforma" },
            { value: "5 min", label: "é tudo que você precisa por dia" },
            { value: "94%", label: "dos usuários avançaram de nível em 90 dias" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="text-5xl font-black text-terracota">{value}</span>
              <span className="text-trilha-text/60 text-sm max-w-[200px] mx-auto leading-relaxed">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-trilha-bg border-t border-terracota-mid/30 px-6 py-24 flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl leading-tight">
          Pronto para investir na sua carreira?
        </h2>
        <p className="text-trilha-text/60 max-w-md">
          Comece hoje. Sem compromisso, sem curso longo. Só aprendizado que cabe no seu dia.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="px-8 py-4 rounded-full bg-terracota text-white font-bold text-base hover:bg-terracota-dark transition-colors shadow-md"
        >
          Começar agora — é grátis
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-xs text-trilha-text/40 border-t border-terracota-mid/20">
        © 2026 Trilha. Feito para gestores de produto.
      </footer>
    </div>
  );
}
