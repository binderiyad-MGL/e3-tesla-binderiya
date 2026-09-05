import Image from "next/image";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative flex h-[85svh] max-h-[900px] min-h-[560px] w-full items-center justify-center overflow-hidden px-6 md:px-16">
      <Image
        src="/assets/header-30.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative flex w-full max-w-[1280px] flex-col items-center gap-8">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-6 text-center">
          <h1 className="font-display text-5xl leading-tight font-medium tracking-[-0.01em] md:text-7xl">
            Model 3
          </h1>
          <p className="text-lg leading-6 text-white/90">
            0.99% APR Available
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary">Яг одоо захиалах</Button>
          <Button variant="outline">Дэлгэрэнгүйг үзэх</Button>
        </div>
      </div>
    </section>
  );
}
