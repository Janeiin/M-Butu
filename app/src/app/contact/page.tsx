import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import StripeRule from '@/components/ui/StripeRule';
import ContactForm from '@/components/sections/ContactForm';
import FaqAccordion from '@/components/sections/FaqAccordion';
import { sustainImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Trade enquiries, wholesale registration and sample requests. Speak with the M\u2019Butu Collection team.',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title={['Let us talk', 'materials.']}
        intro="Whether you are specifying for a single residence or fitting out a hotel, our trade team is here to help."
        image={sustainImage}
      />

      <section className="section-pad py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow mb-6 text-bronze">Enquiries</p>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Trade</p>
                <p className="mt-2 font-display text-2xl font-light">
                  trade@mbutu-collection.com
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">General</p>
                <p className="mt-2 font-display text-2xl font-light">
                  hello@mbutu-collection.com
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Studio</p>
                <p className="mt-2 text-base leading-relaxed text-charcoal/80">
                  By appointment
                  <br />
                  Cape Town, South Africa
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6 text-bronze">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="section-pad">
        <StripeRule />
      </div>

      <section className="section-pad py-24 md:py-32">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4 text-bronze">Questions</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">
            Frequently asked.
          </h2>
        </div>
        <FaqAccordion />
      </section>
    </>
  );
}
