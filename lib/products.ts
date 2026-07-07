export type Product = {
  id: string
  name: string
  latin: string
  index: string
  rarity: 'Signature Rarity' | 'Exceptionally Rare' | 'Rare' | 'Limited'
  origin: string
  texture: string
  interior: string
  lede: string
  // Drives the procedural hide-texture placeholder (see HidePattern)
  pattern: 'zebra-bold' | 'zebra-fine' | 'fawn' | 'oryx' | 'impala' | 'blesbok' | 'waterbuck' | 'ostrich'
  tone: { base: string; mark: string }
  // Optional: drop a photo at /public/images/... and set its path here to
  // replace the procedural texture. Leave undefined to keep the placeholder.
  image?: string
}

export const products: Product[] = [
  {
    id: 'hartmann-zebra',
    name: "Hartmann's Zebra",
    latin: 'Equus zebra hartmannae',
    index: '01',
    rarity: 'Signature Rarity',
    origin: 'Namibian highlands',
    texture: 'Bold, high-contrast striping over a warm ivory ground',
    interior: 'A single statement floor piece or a framed wall artwork',
    lede: 'The mountain zebra of Namibia. Each stripe pattern is a fingerprint that nature never repeats.',
    pattern: 'zebra-bold',
    tone: { base: '#1c150e', mark: '#efe7d8' },
  },
  {
    id: 'burchell-zebra',
    name: "Burchell's Zebra",
    latin: 'Equus quagga burchellii',
    index: '02',
    rarity: 'Rare',
    origin: 'Southern African plains',
    texture: 'Broad stripes softened by warm shadow bands',
    interior: 'Grounding a lounge or library beneath low, considered light',
    lede: 'The classic plains zebra. Broader stripes carry a shadow-line that reads as depth and warmth.',
    pattern: 'zebra-fine',
    tone: { base: '#211913', mark: '#e7ddca' },
  },
  {
    id: 'springbok',
    name: 'Springbok',
    latin: 'Antidorcas marsupialis',
    index: '03',
    rarity: 'Limited',
    origin: 'Kalahari margins',
    texture: 'Fine, close pelage in cinnamon, white and sable',
    interior: 'Draped over seating or layered as an accent throw',
    lede: 'A study in tricolour. The springbok carries the palette of the Kalahari in a single hide.',
    pattern: 'fawn',
    tone: { base: '#2a1d12', mark: '#c99a63' },
  },
  {
    id: 'oryx',
    name: 'Gemsbok Oryx',
    latin: 'Oryx gazella',
    index: '04',
    rarity: 'Rare',
    origin: 'Desert Namibia',
    texture: 'Fawn body with graphic charcoal masking',
    interior: 'A sculptural rug for architectural, minimalist rooms',
    lede: 'The desert antelope. Fawn and charcoal meet in markings as deliberate as brushwork.',
    pattern: 'oryx',
    tone: { base: '#241a11', mark: '#b79068' },
  },
  {
    id: 'impala',
    name: 'Impala',
    latin: 'Aepyceros melampus',
    index: '05',
    rarity: 'Limited',
    origin: 'Savannah woodland',
    texture: 'Three-tone russet, tan and cream',
    interior: 'Warming a study, a reading corner or bench seat',
    lede: 'Quietly luminous. The impala glows with a russet that shifts with the room.',
    pattern: 'impala',
    tone: { base: '#2b1c10', mark: '#a9744a' },
  },
  {
    id: 'blesbok',
    name: 'Blesbok',
    latin: 'Damaliscus pygargus phillipsi',
    index: '06',
    rarity: 'Rare',
    origin: 'Highveld grassland',
    texture: 'Deep mahogany with a distinctive pale blaze',
    interior: 'A dark, grounding note for panelled interiors',
    lede: 'Mahogany depth broken by a single pale blaze. The blesbok is quiet drama.',
    pattern: 'blesbok',
    tone: { base: '#1f130c', mark: '#8a5a3a' },
  },
  {
    id: 'waterbuck',
    name: 'Waterbuck',
    latin: 'Kobus ellipsiprymnus',
    index: '07',
    rarity: 'Exceptionally Rare',
    origin: 'Riverine Africa',
    texture: 'Long, coarse coat in smoke and iron grey',
    interior: 'A generous, tactile floor piece for volume and scale',
    lede: 'Substantial and grave. The waterbuck brings weight, scale and a coat like woven smoke.',
    pattern: 'waterbuck',
    tone: { base: '#1a1712', mark: '#7d766a' },
  },
  {
    id: 'ostrich-leather',
    name: 'Ostrich Leather',
    latin: 'Struthio camelus',
    index: '08',
    rarity: 'Signature Rarity',
    origin: 'Karoo tanneries',
    texture: 'Raised quill follicles across a supple, even ground',
    interior: 'Upholstery, bespoke furniture and fine commissioned pieces',
    lede: 'The most recognisable luxury leather in the world. Every follicle is a mark of authenticity.',
    pattern: 'ostrich',
    tone: { base: '#241a10', mark: '#c6a46a' },
  },
]
