import { Search, Clock, Bell, Filter, Target, TrendingUp, Star, Zap, Shield, Users, CheckCircle } from 'lucide-react';

export const stats = [
  { number: "100+", label: "Quellen täglich", icon: Search },
  { number: "24/7", label: "Portal Zugang", icon: Clock },
  { number: "Täglich", label: "Benachrichtigungen", icon: Bell },
  { number: "Smart", label: "Kategorisierung", icon: Filter }
];

export const benefits = [
  {
    title: "Zeit sparen",
    description: "Keine manuelle Suche mehr nötig",
    icon: Clock,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Geld sparen", 
    description: "Effiziente Auftragsakquise",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Vollständige Abdeckung",
    description: "Hunderte Quellen überwacht",
    icon: Target,
    color: "from-purple-500 to-indigo-600"
  }
];

export const features = [
  {
    title: "Täglich aktuelle Ausschreibungen",
    description: "Automatische Beschaffung aus hunderten Quellen"
  },
  {
    title: "Kategorisiert nach Fachrichtung & Region",
    description: "Präzise Filterung für maximale Relevanz"
  },
  {
    title: "24/7 Portalzugang mit Benachrichtigungen",
    description: "Immer aktuell informiert bleiben"
  }
];

export const processSteps = [
  {
    number: 1,
    title: "Beschaffung",
    description: "Wir beschaffen täglich aktuelle Ausschreibungen aus hunderten verschiedenen Quellen automatisch für Sie.",
    icon: Search,
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    number: 2,
    title: "Kategorisierung",
    description: "Intelligente Kategorisierung nach Fachrichtung, Region und Objektkategorie für maximale Relevanz.",
    icon: Filter,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    number: 3,
    title: "Benachrichtigung",
    description: "24/7 Portalzugang mit sofortigen Benachrichtigungen bei neuen, passenden Ausschreibungen.",
    icon: Bell,
    gradient: "from-pink-500 to-red-600"
  }
];

export const testimonials = [
  {
    quote: "Dank INLOCON haben wir unsere Akquisitionszeit um 70% reduziert. Die täglichen Benachrichtigungen sind präzise und sparen uns unglaublich viel Zeit.",
    name: "Michael Weber",
    role: "Geschäftsführer, WeberBau GmbH",
    image: "team1"
  },
  {
    quote: "Die Kategorisierung ist brilliant. Wir bekommen nur noch relevante Ausschreibungen und verpassen keine wichtigen Projekte mehr.",
    name: "Sarah Müller",
    role: "Projektleiterin, TechSolutions AG",
    image: "team2"
  },
  {
    quote: "ROI bereits nach 2 Monaten erreicht. Das Portal ist intuitiv und die Datenqualität überzeugt auf ganzer Linie.",
    name: "Thomas Schmidt",
    role: "Vertriebsleiter, Schmidt Energie",
    image: "success"
  }
];

export const trustIndicators = [
  { number: "500+", label: "Zufriedene Kunden" },
  { number: "98%", label: "Kundenzufriedenheit" },
  { number: "24/7", label: "Support verfügbar" },
  { number: "D-A-CH", label: "Marktabdeckung" }
];

export const partnerBenefits = [
  {
    title: "Qualitätsgarantie",
    description: "Durch starke Partnerschaften gewährleisten wir höchste Datenqualität",
    icon: Shield,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Erweiterte Reichweite",
    description: "Unser Partnernetzwerk ermöglicht umfassende Marktabdeckung",
    icon: Users,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Innovation",
    description: "Gemeinsame Entwicklung zukunftsweisender Lösungen",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-emerald-600"
  }
];

export const contactInfo = [
  {
    title: "Standort",
    detail: "Erich-Zeigner-Allee 36, 04229 Leipzig",
    icon: "Building"
  },
  {
    title: "E-Mail",
    detail: "gf@inlocon.de",
    icon: "Users"
  },
  {
    title: "Telefon",
    detail: "+49 (0) 341 253479111",
    icon: "Zap"
  }
];

export const footerLinks = {
  services: [
    "Ausschreibungsüberwachung",
    "Automatische Kategorisierung",
    "24/7 Portal-Zugang",
    "Tägliche Benachrichtigungen"
  ],
  company: [
    "Über INLOCON",
    "Team",
    "Standort Leipzig",
    "Kontakt"
  ]
};