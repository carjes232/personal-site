export const SITE_URL = "https://danielcardenas.dev";

export const profile = {
  name: "Daniel Esteban Cárdenas Jerez",
  displayName: "Daniel Cárdenas",
  headline: "AI & Systems Engineer — Applied AI, Backend & Edge ML",
  location: "Campinas, Brazil",
  summary: "Engineering Physics graduate building applied AI, backend services and connected systems, with evaluation, provenance, human review and failure handling.",
  reviewedOn: "2026-11-03",
  links: {
    github: "https://github.com/carjes232",
    linkedin: "https://www.linkedin.com/in/dancarjes/",
    email: "mailto:daniestebanc@hotmail.com",
    resume: "/resume.pdf",
  },
  experience: [
    { organization: "Lean Tech", role: "AI Engineer", start: "2026-02", end: null },
    { organization: "Solenium", role: "ML Engineer / Firmware Developer", start: "2025-01", end: "2026-02" },
    { organization: "XM S.A. E.S.P.", role: "Market Development Analyst", start: "2024-07", end: "2025-01" },
    { organization: "Magnus", role: "Machine Learning Engineer (full-time)", start: "2023-05", end: "2024-07" },
  ],
  education: { degree: "B.Sc. Engineering Physics", institution: "Universidad Nacional de Colombia", year: 2025 },
  languages: [
    { language: "Spanish", level: "Native", evidence: "Self-reported" },
    { language: "English", level: "C1", evidence: "IELTS Academic overall 7.0, July 2026" },
    { language: "Portuguese", level: "A2–B1", evidence: "Self-assessed; not certified" },
  ],
  skills: ["Python", "TypeScript", "SQL", "C/C++", "RAG", "AI agents", "Evaluation", "FastAPI", "PostgreSQL", "React", "Docker", "Linux", "STM32", "FreeRTOS", "ESP32", "MQTT"],
  evidenceNotes: [
    "Project volume describes platform activity, not solely personal contribution.",
    "SST cost comparison is retrospective and limited to recorded costs; billing missingness and changing cohorts prevent causal realized-savings claims.",
    "SST 80.73% input-token reduction covers 12 matched synthetic development cases, not actual voice invoices or global quality.",
    "Quiver's reported manual baseline is 6–8 hours per SOP and per flowchart; accepted output counts and net human time saved remain unmeasured.",
    "Personal browser automation was directed and reviewed with agent-assisted implementation; synthetic tests do not establish production-scale reliability.",
  ],
} as const;
