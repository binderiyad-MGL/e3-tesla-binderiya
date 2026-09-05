import Image from "next/image";
import { Button } from "@/components/Button";
import { calTriggerProps } from "@/lib/cal";

const stats = [
  { number: "7x", label: "Fewer Collisions" },
  { number: "13,599,898,816", label: "Miles Driven" },
];

export function FullSelfDriving() {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-ink px-6 py-20 md:px-16 md:py-28">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-1 flex-col items-start gap-8">
          <div className="flex w-full flex-col gap-6">
            <h2 className="font-display text-3xl leading-tight font-medium tracking-[-0.01em] md:text-[52px]">
              Full Self-Driving (Supervised)
            </h2>
            <p className="text-lg leading-6 text-white/90">
              Makes every drive easier. Subscribe for $99/mo.
            </p>
          </div>

          <dl className="flex w-full flex-col gap-4 py-2 sm:flex-row sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-1 flex-col gap-2">
                <dt className="font-display text-[clamp(1.75rem,3.2vw,3.25rem)] leading-tight font-medium tracking-[-0.01em]">
                  {stat.number}
                </dt>
                <dd className="text-base leading-6 text-white/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-6">
            <Button
              variant="outline"
              aria-label="Демо үзэх, цаг захиалах"
              {...calTriggerProps}
            >
              Демо үзэх / Цаг авах
            </Button>
            <Button variant="link" className="group">
              Дэлгэрэнгүй үзэх
              <Image
                src="/assets/chevron-vector.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>

        <div className="relative aspect-[600/640] w-full flex-1">
          <Image
            src="/assets/placeholder-image.png"
            alt="Full Self-Driving view"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
