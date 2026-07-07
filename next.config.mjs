export const site = {
  name: "M'Butu Collection",
  tagline: 'Rare African Luxury Hides',
  description:
    "M'Butu Collection presents museum-quality African hides and exotic leathers. Naturally bold, ethically sourced, exceptionally rare. Trusted by luxury designers and collectors across Europe, Australia and the Gulf Cooperation Council.",
  url: 'https://mbutucollection.com',
  contact: {
    email: 'hello@mbutucollection.com',
    phone: '+974 0000 0000',
    instagram: '@mbutucollection',
    instagramUrl: 'https://instagram.com/mbutucollection',
  },
  nav: [
    { label: 'Collection', href: '#collection' },
    { label: 'The Hartmann', href: '#hartmann' },
    { label: 'Availability', href: '#availability' },
    { label: 'Services', href: '#services' },
    { label: 'Provenance', href: '#provenance' },
    { label: 'Enquire', href: '#contact' },
  ],
  // Drop real photography into /public/images and set the paths here. Leave
  // undefined to keep the procedural hide-texture placeholders.
  media: {
    hero: undefined as string | undefined, // e.g. '/images/hero-zebra.jpg'
    about: undefined as string | undefined, // e.g. '/images/about-craft.jpg'
    hartmann: undefined as string | undefined, // e.g. '/images/hartmann.jpg'
  },
}
