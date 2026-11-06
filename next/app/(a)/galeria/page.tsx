import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/a/Blocks";
import { Gallery } from "@/components/a/Gallery";

export const metadata: Metadata = {
  title: "Galéria",
  description: "A pályák, az edzések és a hegy, ahol mindez történik: fotók és drónfelvétel a Next Tenisz Akadémiáról.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Galéria"
        title={
          <>
            A pályák, az edzések <em>és a hegy.</em>
          </>
        }
        lead="Ahol mindez történik: négy salakpálya az erdőben, a Normafa mellett."
        image="/images/aerial-budapest.jpg"
        imageAlt="Kilátás a pályák fölül a budai hegyekre és a városra"
      />
      <section className="band band--dark band--tight" aria-label="Drónfelvétel">
        <div className="container">
          <div className="videoframe reveal">
            <video controls preload="metadata" poster="/images/hero-poster.jpg" playsInline>
              <source src="/video/dron.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="figcap" style={{ marginTop: 14 }}>
            Drónfelvétel a pályákról és a környékről.
          </p>
        </div>
      </section>
      <section className="band band--raised band--tight" aria-label="Fotók">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <CtaBand title={<>Egy óra a pályán többet mond <em>minden leírásnál.</em></>} />
    </>
  );
}
