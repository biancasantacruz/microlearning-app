export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-trilha-bg text-trilha-text font-sans">
      {/* Nav */}
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-trilha-bg border-b border-terracota-mid/30">
        <span className="text-2xl font-bold tracking-tight">
          tri<span className="text-terracota">lha</span>
        </span>
        <button className="px-5 py-2 rounded-full border border-terracota text-terracota text-sm font-semibold hover:bg-terracota hover:text-white transition-colors">
          Entrar
        </button>
      </nav>

      {/* Hero */}
      <section className="bg-terracota text-white px-6 py-24 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          O mercado de produto está mudando rápido. Sua carreira também precisa.
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-terracota-light/90">
          Aprenda o que importa, no tempo que você tem. Trilha entrega microconteúdo feito para gestores de produto que não param.
        </p>
        <button className="mt-2 px-8 py-4 rounded-full bg-white text-terracota-dark font-bold text-base hover:bg-terracota-light transition-colors shadow-md">
          Monte sua trilha de carreira
        </button>
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
            {
              icon: "⏱",
              title: "Sem tempo",
              body: "Cursos longos não encaixam na rotina de um PM. Você começa, para, esquece — e volta ao ponto zero.",
            },
            {
              icon: "📚",
              title: "Conteúdo genérico",
              body: "A maioria dos materiais foi feita para todo mundo, e acaba sendo útil para ninguém. PMs precisam de contexto real.",
            },
            {
              icon: "📉",
              title: "Carreira estagnada",
              body: "Sem aprendizado contínuo e direcionado, fica difícil avançar para papéis de liderança e impacto maior.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 flex flex-col gap-3 shadow-sm border border-terracota-mid/20"
            >
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
          <p className="text-trilha-text/60 max-w-lg">
            Trilha foi desenhada para encaixar no seu dia — não o contrário.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {[
            {
              step: "01",
              title: "Defina seu objetivo",
              body: "Você escolhe para onde quer ir: liderança técnica, discovery, estratégia de produto ou crescimento de carreira.",
            },
            {
              step: "02",
              title: "Aprenda em 5 minutos",
              body: "Cada lição cabe em uma pausa. Textos, vídeos e exercícios práticos compactos, feitos para ser revisitados.",
            },
            {
              step: "03",
              title: "Aplique no trabalho",
              body: "Templates, frameworks e exemplos reais que você usa direto nas suas próximas reuniões e decisões.",
            },
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
        <button className="px-8 py-4 rounded-full bg-terracota text-white font-bold text-base hover:bg-terracota-dark transition-colors shadow-md">
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
