import {
  Sparkles,
  Leaf,
  CircleCheck,
  Users,
  Globe,
  Heart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const benefits: Benefit[] = [
  { icon: Sparkles, title: 'Energía natural', text: 'Acompaña tus mañanas con vitalidad de origen vegetal.' },
  { icon: Leaf, title: '100% peruana', text: 'Cultivada en la sierra central, cerca de su origen.' },
  { icon: CircleCheck, title: 'Fácil de integrar', text: 'Una cucharadita en tus batidos, bowls o café.' },
];

export interface SierraImage {
  url: string;
  title: string;
  subtitle: string;
}

export const sierraImages: SierraImage[] = [
  {
    url: 'https://images.pexels.com/photos/33569049/pexels-photo-33569049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Sierra Central del Perú',
    subtitle: 'Cultivo a más de 3,500 m.s.n.m.',
  },
  {
    url: 'https://images.pexels.com/photos/17000621/pexels-photo-17000621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Junín y Cerro de Pasco',
    subtitle: 'Suelos ricos y clima extremo',
  },
  {
    url: 'https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=940',
    title: 'Tradición Ancestral',
    subtitle: 'Superfood consumido desde épocas pre-incas',
  },
];

export interface HistoriaImage {
  url: string;
  title: string;
  subtitle: string;
}

export const historiaImages: HistoriaImage[] = [
  { url: '/cosecha.jpg', title: 'Cosecha ancestral', subtitle: 'Recolectada a mano en la sierra' },
  { url: '/mujeres_trabajando.jpg', title: 'Comunidad y tradición', subtitle: 'Trabajo honesto en origen' },
  { url: '/paisaje.jpg', title: 'Sierra central del Perú', subtitle: 'Donde todo comienza' },
  { url: '/maca_granel.jpg', title: 'Maca en estado puro', subtitle: 'Calidad seleccionada' },
];

export interface infoProducts {
  id: number;
  name: string;
  description: string;
  tag: string;
  url: string
}

export const infoProducts: infoProducts[] = [
    {
      id: 1,
      name: 'Maca Gelatinizada 150g',
      description: 'Perfecta para iniciarte en el consumo diario de maca. Tamaño ideal para llevar o probar.',
      tag: 'Más vendido',
      url: '/doypack_150g_macapolvo.png',
    },
    {
      id: 2,
      name: 'Maca Gelatinizada 10Kg',
      description: 'Formato granel. Ideal para su uso como ingrediente e insumo industrial.',
      tag: 'Industria',
      url: '/granel_10kg_macapolvo.png',
    },
  ];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  ['¿Cómo se consume?', 'Agrega 1/2 cucharadita al día en batidos, avena, café o yogurt. Puedes aumentar gradualmente hasta 1 cucharadita.'],
  ['¿Tiene gluten?', 'No. Apollo es naturalmente libre de gluten y está elaborado con maca peruana gelatinizada.'],
  ['¿Qué significa gelatinizada?', 'Es un proceso suave que elimina el almidón y hace que la maca sea más fácil de digerir, manteniendo sus propiedades.'],
  ['¿Qué beneficios me aporta?', 'Entre sus principales componentes la maca aporta: Carbohidratos; Fibras; Proteínas; Minerales: K, Mg, Fe; Glucosinatos; Aminoácidos; Vitaminas del complejo B, C y E'],
  ['¿Qué variedad es?', 'Nuestra maca es un blend natural de las tres variedades: amarilla, roja y negra. Mantenemos la mezcla tal como nace en la tierra para ofrecerte un perfil nutricional completo, combinando lo mejor de cada una.'],
  ['¿Es 100% Maca?', 'Sí, 100% maca pura y original.Frente a la abundancia de productos de dudosa procedencia, nos aseguramos de ofrecerte un superalimento certificado desde su origen, que cumple estrictamente con las normativas y controles sanitarios del país.'],
].map(([question, answer]) => ({ question, answer }));

export interface ValueCard {
  icon: LucideIcon;
  title: string;
  text: string;
  span?: boolean;
}

export const valueCards: ValueCard[] = [
  {
    icon: Users,
    title: '20+ años de trayectoria',
    text: 'Experiencia compartida en el mundo corporativo y desarrollo de marcas en el sector PYME.',
  },
  {
    icon: Globe,
    title: 'Triple Impacto',
    text: 'Compromiso social, ambiental y económico sustentable en cada paso de nuestra cadena de valor.',
  },
  {
    icon: Heart,
    title: 'El comienzo de algo más grande',
    text: 'Apollo nace con la maca peruana como su primer superfood insignia, pero proyecta un ecosistema continuo de productos dedicados al bienestar cotidiano.',
    span: true,
  },
];
