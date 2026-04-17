import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-context";

const TITLE = "Studio Le Garage";

const heroPublicUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}${filename}`;

const HERO_IMAGE = {
  file: "home-hero-dance.jpg",
  alt: "Zwart-witfoto van tieners die een dansroutine repeteren op een podium.",
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <section
        className="relative w-full overflow-hidden bg-black"
        aria-label="Studio Le Garage hero"
      >
        <div className="relative aspect-[1280/650] min-h-[560px] w-full">
          <img
            src={heroPublicUrl(HERO_IMAGE.file)}
            alt={HERO_IMAGE.alt}
            className="absolute inset-0 size-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55"
            aria-hidden
          />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white">
              <h1
                className="font-semibold leading-[0.9] tracking-[-0.02em] text-[clamp(3rem,11vw,7.875rem)] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] flex flex-wrap justify-center gap-x-[0.04em]"
                style={{ fontFamily: "var(--font-display)" }}
                aria-label={TITLE}
              >
                {TITLE.split("").map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00a0" : char}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.35,
                }}
                className="mt-4 font-bold tracking-[-0.02em] text-[clamp(1.25rem,2.5vw,2rem)]"
                style={{ fontFamily: "var(--font-semicond)" }}
              >
                {t.home.heroLine}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-[#1f41ff] text-white"
        aria-label="Contactgegevens"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-4 text-[clamp(0.95rem,1.4vw,1.25rem)] font-semibold tracking-[-0.02em] md:flex-row md:gap-6 md:py-[18px]">
          <p
            className="whitespace-nowrap"
            style={{ fontFamily: "var(--font-semicond)" }}
          >
            {t.home.infoAddress}
          </p>
          <a
            href="mailto:info@studiolegarage.nl"
            className="underline decoration-solid underline-offset-[3px] hover:opacity-90"
            style={{ fontFamily: "var(--font-semicond)" }}
          >
            info@studiolegarage.nl
          </a>
          <p
            className="whitespace-nowrap"
            style={{ fontFamily: "var(--font-semicond)" }}
          >
            <a
              href="tel:0206253513"
              className="underline decoration-solid underline-offset-[3px] hover:opacity-90"
            >
              020 625 35 13
            </a>
            <span aria-hidden> {" - "} </span>
            <a
              href="tel:0621587273"
              className="underline decoration-solid underline-offset-[3px] hover:opacity-90"
            >
              06 2158 7273
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-[clamp(1.5rem,8vw,7rem)] pt-[clamp(3.5rem,8vw,6.5rem)] pb-[clamp(2rem,4vw,3rem)]">
        <h2
          className="font-bold tracking-[-0.02em] text-[clamp(1.5rem,3vw,2rem)] text-black"
          style={{ fontFamily: "var(--font-semicond)" }}
        >
          {t.home.aboutTitle}
        </h2>
        <div
          className="mt-8 space-y-6 text-black text-[clamp(1rem,1.4vw,1.25rem)] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-body-dm)" }}
        >
          <p>{t.home.aboutP1}</p>
          <p>{t.home.aboutP2}</p>
          <p>{t.home.aboutP3}</p>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1280px] px-[clamp(1.5rem,8vw,7rem)] pb-[clamp(3.5rem,8vw,6.5rem)]"
        aria-label="Studio impressie"
      >
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2">
          <div
            className="aspect-[305/383] w-full max-w-[305px] bg-[#d9d9d9]"
            role="img"
            aria-label="Studio impressie 1"
          />
          <div
            className="aspect-[305/383] w-full max-w-[305px] bg-[#d9d9d9]"
            role="img"
            aria-label="Studio impressie 2"
          />
        </div>
      </section>
    </div>
  );
}
