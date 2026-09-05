# Tesla Model 3 — Next.js + Tailwind CSS

Tesla Model 3 landing хуудсыг Next.js (App Router, TypeScript) болон Tailwind CSS v4 дээр дахин бүтээв.

## Ажиллуулах

Node.js 18.18+ шаардлагатай (одоогоор энэ машин дээр суугаагүй байна — https://nodejs.org эсвэл `brew install node`).

```bash
npm install
npm run dev
```

Дараа нь http://localhost:3000 нээнэ.

## Бүтэц

```
app/
  layout.tsx        # root layout, Inter + Raleway фонт, Cal.com provider
  page.tsx          # хуудасны бүтэц
  globals.css       # Tailwind import + @theme дизайн токенууд
components/
  Navbar.tsx        # sticky navbar, мобайл цэс
  Hero.tsx          # Model 3 hero
  FullSelfDriving.tsx
  Button.tsx        # primary / outline / link вариант
  CalProvider.tsx   # Cal.com embed-ийг эхлүүлнэ
lib/
  cal.ts            # Cal.com линк + trigger props
public/assets/      # зураг, лого, icon
```

## Дизайн токен

`app/globals.css` доторх `@theme` блокт өнгө, фонт тодорхойлогдсон:

| Токен | Утга | Tailwind класс |
| --- | --- | --- |
| `--color-ink` | `#020807` | `bg-ink`, `text-ink` |
| `--color-amaranth` | `#e63946` | `bg-amaranth` |
| `--font-sans` | Inter | `font-sans` |
| `--font-display` | Raleway | `font-display` |

## Cal.com цаг захиалга

`lib/cal.ts`-д линк тодорхойлогдсон (`binderiya-dondov-5wnoh0/webdev20`). Аль ч товч дээр
`{...calTriggerProps}` тараахад дарахад pop-up нээгдэнэ:

```tsx
import { calTriggerProps } from "@/lib/cal";

<Button {...calTriggerProps}>Жолоодож үзэх</Button>
```

Одоогоор navbar-ийн "Жолоодож үзэх" болон "Демо үзэх / Цаг авах" товч холбогдсон.
