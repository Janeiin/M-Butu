import type {
  Collection,
  Project,
  Testimonial,
  WhyReason,
  TimelineEntry,
} from './types';

const U = 'https://images.unsplash.com/photo-';

export const collections: Collection[] = [
  {
    slug: 'hartmann-zebra',
    index: '01',
    title: 'Hartmann Zebra',
    species: 'Equus zebra hartmannae',
    summary: 'The rarest of our hides. Bold striping, exceptional presence.',
    description:
      'Sourced from the mountainous regions of Namibia, the Hartmann mountain zebra is the most sought-after hide we offer. Each is hand-selected for the clarity and rhythm of its striping, and exported fully under CITES certification.',
    image: `${U}1516426122078-c23e76319801?q=80&w=1400&auto=format&fit=crop`,
    size: 'tall',
    origin: 'Namibia',
    grades: ['A (Premium)', 'B (Standard)'],
  },
  {
    slug: 'plains-zebra',
    index: '02',
    title: 'Plains Zebra',
    species: 'Equus quagga',
    summary: 'Classic broad striping, warm and graphic.',
    description:
      'The plains zebra offers a broader, warmer stripe pattern that reads beautifully across floors and walls. A versatile signature material for statement interiors.',
    image: `${U}1509316785289-025f5b846b35?q=80&w=1400&auto=format&fit=crop`,
    size: 'mid',
    origin: 'South Africa',
    grades: ['A (Premium)', 'B (Standard)'],
  },
  {
    slug: 'springbok',
    index: '03',
    title: 'Springbok',
    species: 'Antidorcas marsupialis',
    summary: 'Soft, tonal and refined in sand and cocoa.',
    description:
      'Springbok hides bring a softer, tonal palette of sand, cocoa and cream. Prized for cushions, throws and delicate upholstery in residential interiors.',
    image: `${U}1534567110243-8875d64ca8ff?q=80&w=1400&auto=format&fit=crop`,
    size: 'mid',
    origin: 'South Africa',
    grades: ['A (Premium)'],
  },
  {
    slug: 'nguni-cowhide',
    index: '04',
    title: 'Nguni Cowhide',
    species: 'Bos taurus africanus',
    summary: 'Endlessly individual, never repeated.',
    description:
      'The Nguni cow of southern Africa produces hides of extraordinary variety, no two markings ever alike. A hard-wearing, characterful choice for floors and large surfaces.',
    image: `${U}1500595046743-cd271d694d30?q=80&w=1400&auto=format&fit=crop`,
    size: 'tall',
    origin: 'South Africa',
    grades: ['A (Premium)', 'B (Standard)', 'Patchwork'],
  },
  {
    slug: 'leather-rugs',
    index: '05',
    title: 'Leather Rugs',
    species: 'Bespoke construction',
    summary: 'Panelled and stitched to specification.',
    description:
      'Hand-stitched leather and hide rugs, built to your dimensions and palette. A refined bespoke option for hospitality and high-end residential projects.',
    image: `${U}1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop`,
    size: 'wide',
    origin: 'Atelier, Windhoek',
    grades: ['Bespoke'],
  },
  {
    slug: 'decor-accessories',
    index: '06',
    title: 'Décor Accessories',
    species: 'Mixed materials',
    summary: 'Cushions, ottomans and finishing pieces.',
    description:
      'A curated range of finishing pieces, cushions, ottomans and accents, crafted from offcuts of our premium hides. The details that complete a room.',
    image: `${U}1616627561950-9f746e330187?q=80&w=1400&auto=format&fit=crop`,
    size: 'mid',
    origin: 'Atelier, Windhoek',
    grades: ['Standard'],
  },
];

export const timeline: TimelineEntry[] = [
  { year: "'62", title: 'The first sourcing routes', description: "A family trade begins across southern Africa's grasslands." },
  { year: "'89", title: 'Ethical partnerships formalised', description: 'Community agreements and conservation-linked sourcing established.' },
  { year: "'04", title: 'Designers of the world', description: 'Wholesale to interior houses across Europe, the Gulf and the Americas.' },
  { year: 'Now', title: 'CITES-certified export', description: 'Fully legal, traceable exports to more than forty countries.' },
];

export const whyReasons: WhyReason[] = [
  { title: 'Ethically Sourced', description: 'Every hide traceable to community partnerships that fund conservation.', icon: 'Leaf' },
  { title: 'Export Worldwide', description: 'Fully legal CITES-certified shipping to more than forty countries.', icon: 'Globe' },
  { title: 'Natural Uniqueness', description: 'No two hides are alike. Each is a singular, hand-selected material.', icon: 'Sparkles' },
  { title: 'Luxury Quality', description: 'Grading and finishing to the standard the finest interiors demand.', icon: 'Gem' },
  { title: 'Trusted by Designers', description: 'Specified by leading studios, architects and hospitality groups.', icon: 'Compass' },
  { title: 'Hospitality Expertise', description: 'Volume sourcing for hotels, lodges and large residential projects.', icon: 'Building2' },
];

export const projects: Project[] = [
  { slug: 'villa-serengeti', title: 'Villa Serengeti', location: 'Marrakech', category: 'Private Residence', description: 'A private residence layered in Hartmann zebra and warm bronze.', image: `${U}1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop` },
  { slug: 'the-sabi-lodge', title: 'The Sabi Lodge', location: 'South Africa', category: 'Safari Hospitality', description: 'Safari hospitality where every suite features natural hide.', image: `${U}1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop` },
  { slug: 'maison-camel', title: 'Maison Camel', location: 'Paris', category: 'Boutique Hotel', description: 'A boutique hotel lobby anchored by a bespoke Nguni floor.', image: `${U}1631049307264-da0ec9d70304?q=80&w=1400&auto=format&fit=crop` },
  { slug: 'desert-house', title: 'Desert House', location: 'Doha', category: 'Residential', description: 'High-end residential interiors in springbok and sand tones.', image: `${U}1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop` },
  { slug: 'atelier-nord', title: 'Atelier Nord', location: 'Copenhagen', category: 'Showroom', description: 'A design studio showroom built around natural material.', image: `${U}1567016432779-094069958ea5?q=80&w=1400&auto=format&fit=crop` },
];

export const testimonials: Testimonial[] = [
  { quote: 'The Hartmann zebra from M\u2019Butu is the most exquisite natural material we specify. Nothing else has the same presence in a room.', name: 'Amara Vidal', role: 'Principal \u00b7 Vidal Interiors, London', avatar: `${U}1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop` },
  { quote: 'Their sourcing is impeccable and completely transparent. For our lodges, authenticity is non-negotiable, and M\u2019Butu delivers it every time.', name: 'Thabo Nkosi', role: 'Creative Director \u00b7 Sabi Hospitality', avatar: `${U}1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop` },
  { quote: 'Working with M\u2019Butu feels like working with a fellow craftsman. The quality, the ethics, the care, it is a rare partnership.', name: '\u00c9lise Moreau', role: 'Architect \u00b7 Studio Moreau, Paris', avatar: `${U}1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop` },
];

export const heroImage = `${U}1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop`;
export const heritageImage = `${U}1620207418302-439b387441b0?q=80&w=1400&auto=format&fit=crop`;
export const sustainImage = `${U}1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop`;
export const tradeImage = `${U}1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop`;

export const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Heritage', href: '/about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Sustainability', href: '/#sustainability' },
  { label: 'Trade', href: '/trade' },
];
