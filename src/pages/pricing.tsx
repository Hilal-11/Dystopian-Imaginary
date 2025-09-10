import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
export default function DocsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <DefaultLayout>
      
    <section className="flex flex-col items-center justify-center">
          <div className="pt-5 lg:pt-28 text-center px-0">
            <h1 className="Inter-bold text-3xl lg:text-7xl heading-lg">Flexible, Transparent, and Growth-Focused Pricing Plans.</h1>
            <p className="pt-6 Inter-medium text-[16px] lg:px-20">At Prime Deck, we believe pricing should be simple, transparent, and built to support growth — not limit it. Whether you’re launching your first startup, managing a growing business, or running a large-scale enterprise, our plans are tailored to meet your needs at every stage. With no hidden fees, no long-term commitments, and the flexibility to upgrade or downgrade anytime.</p>
          </div>
          <Pricing />
          {/* <Reviews /> */}
          <FAQ />
      </section>
    </DefaultLayout>
  );
}
