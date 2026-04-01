"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const steps = [
  {
    field: "goal",
    title: "Onde você quer chegar?",
    options: [
      "Liderar produtos que usam inteligência artificial",
      "Crescer para um cargo sênior",
      "Gerenciar times de produto",
      "Fazer minha primeira transição para produto",
    ],
  },
  {
    field: "experience",
    title: "Há quanto tempo você trabalha com produto?",
    options: [
      "Ainda não trabalho — quero entrar na área",
      "Menos de 2 anos",
      "Entre 2 e 5 anos",
      "Mais de 5 anos",
    ],
  },
  {
    field: "competency",
    title: "O que você mais quer desenvolver?",
    options: [
      "Pensar estrategicamente e ter visão de produto",
      "Priorizar melhor e tomar decisões com dados",
      "Influenciar stakeholders e conseguir o que preciso",
      "Entender usuários de verdade antes de construir",
      "Usar IA no meu trabalho como PM",
    ],
  },
  {
    field: "daily_time",
    title: "Quanto tempo você consegue dedicar por dia?",
    options: [
      "10 minutos — aperto de agenda, precisa ser direto",
      "20 minutos — tenho um tempinho no dia",
      "30 minutos — consigo me dedicar de verdade",
      "1 hora ou mais — tô em modo aceleração",
    ],
  },
];

type Answers = {
  goal: string;
  experience: string;
  competency: string;
  daily_time: string;
};

export default function OnboardingForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    goal: "",
    experience: "",
    competency: "",
    daily_time: "",
  });
  const [saving, setSaving] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const current = steps[step];
  const selectedValue = answers[current.field as keyof Answers];
  const progress = ((step + 1) / steps.length) * 100;

  function transition(fn: () => void, dir: "forward" | "back") {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      fn();
      setAnimating(false);
    }, 200);
  }

  function handleSelect(option: string) {
    setAnswers((prev) => ({ ...prev, [current.field]: option }));
  }

  function handleNext() {
    if (!selectedValue) return;
    if (step < steps.length - 1) {
      transition(() => setStep((s) => s + 1), "forward");
    } else {
      handleSubmit();
    }
  }

  function handleBack() {
    transition(() => setStep((s) => s - 1), "back");
  }

  async function handleSubmit() {
    setSaving(true);
    const supabase = createClient();
    await supabase.from("profiles").upsert({
      user_id: userId,
      ...answers,
      onboarding_completed: true,
    });
    router.push("/trilha");
  }

  const slideClass = animating
    ? direction === "forward"
      ? "opacity-0 translate-x-4"
      : "opacity-0 -translate-x-4"
    : "opacity-100 translate-x-0";

  return (
    <div className="min-h-screen bg-[#F5F3F0] flex flex-col items-center px-4 py-10 font-sans">
      {/* Logo */}
      <span className="text-xl font-bold tracking-tight mb-8">
        tri<span className="text-[#C1714F]">lha</span>
      </span>

      <div className="w-full max-w-[480px] flex flex-col gap-8">
        {/* Progress bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs text-[#1A1A1A]/40">
            <span>Pergunta {step + 1} de {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#E8B89A]/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C1714F] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          className={`flex flex-col gap-6 transition-all duration-200 ${slideClass}`}
        >
          <h1 className="text-2xl font-bold text-[#1A1A1A] leading-snug">
            {current.title}
          </h1>

          <div className="flex flex-col gap-3">
            {current.options.map((option) => {
              const selected = selectedValue === option;
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-150"
                  style={{
                    background: selected ? "#FAF0EB" : "white",
                    borderColor: selected ? "#C1714F" : "#E8B89A",
                    color: "#1A1A1A",
                    boxShadow: selected
                      ? "0 0 0 1px #C1714F"
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 rounded-full border border-[#E8B89A] text-sm font-semibold text-[#1A1A1A]/60 hover:border-[#C1714F] hover:text-[#C1714F] transition-colors bg-white"
            >
              Voltar
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!selectedValue || saving}
            className="flex-1 py-3 rounded-full text-sm font-bold text-white transition-all duration-150"
            style={{
              background: selectedValue && !saving ? "#C1714F" : "#E8B89A",
              cursor: selectedValue && !saving ? "pointer" : "not-allowed",
            }}
          >
            {saving
              ? "Salvando..."
              : step === steps.length - 1
              ? "Começar minha trilha"
              : "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
}
