"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { buttonClasses } from "@/components/Button";
import { calTriggerProps } from "@/lib/cal";

type Fields = { name: string; email: string; phone: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = { name: "", email: "", phone: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Нэрээ бүтэн бичнэ үү.";
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "И-мэйл хаягаа зөв оруулна уу (жишээ: name@mail.com).";
  }
  if (values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Утасны дугаар доод тал нь 8 оронтой байх ёстой.";
  }

  return errors;
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

function Field({ id, label, error, ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-white/70">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:bg-white/10 ${
          error ? "border-amaranth" : "border-white/20 focus:border-white/50"
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-amaranth">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const [values, setValues] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = { ...values, [key]: event.target.value };
    setValues(next);
    // Алдаа гарсан талбарыг засаж эхэлмэгц шууд шинэчилж харуулна.
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Fields) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(values));
  };

  const errorFor = (key: keyof Fields) => (touched[key] ? errors[key] : undefined);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true });
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    // TODO: энд бодит API route руу POST хийнэ (жишээ: await fetch("/api/contact", …)).
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("sent");
  }

  return (
    <section
      id="connect"
      className="flex w-full flex-col items-center overflow-hidden border-t border-white/10 bg-ink px-6 py-20 md:px-16 md:py-28"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-1 flex-col gap-6">
          <h2 className="font-display text-3xl leading-tight font-medium tracking-[-0.01em] md:text-[52px]">
            Холбогдох
          </h2>
          <p className="max-w-[520px] text-lg leading-6 text-white/90">
            Мэдээллээ үлдээгээрэй. Манай зөвлөх ажлын 1 хоногт багтаан тантай
            холбогдож, Model 3-ийн үнэ, санхүүжилт, хүргэлтийн талаар
            дэлгэрэнгүй мэдээлэл өгнө.
          </p>
          <p className="text-base leading-6 text-white/60">
            Яаралтай бол{" "}
            <button
              type="button"
              className="cursor-pointer text-white underline underline-offset-4 transition-colors hover:text-amaranth"
              {...calTriggerProps}
            >
              шууд цаг захиалж
            </button>{" "}
            уулзалтаа товлоорой.
          </p>
        </div>

        <div className="w-full flex-1 border border-white/10 bg-white/[0.03] p-6 md:p-8">
          {status === "sent" ? (
            <div className="flex flex-col items-start gap-4" role="status">
              <div className="flex h-12 w-12 items-center justify-center border border-amaranth bg-amaranth/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium">
                Хүсэлтийг хүлээн авлаа
              </h3>
              <p className="text-base leading-6 text-white/70">
                Баярлалаа, {values.name.trim()}. Бид{" "}
                <span className="text-white">{values.email.trim()}</span> хаягаар
                тантай эргэн холбогдоно.
              </p>
              <button
                type="button"
                onClick={() => {
                  setValues(emptyFields);
                  setErrors({});
                  setTouched({});
                  setStatus("idle");
                }}
                className={buttonClasses("outline")}
              >
                Дахин илгээх
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <Field
                id="contact-name"
                label="Нэр"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Дондов Биндэрья"
                value={values.name}
                onChange={update("name")}
                onBlur={blur("name")}
                error={errorFor("name")}
                required
              />
              <Field
                id="contact-email"
                label="И-мэйл"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@mail.com"
                value={values.email}
                onChange={update("email")}
                onBlur={blur("email")}
                error={errorFor("email")}
                required
              />
              <Field
                id="contact-phone"
                label="Утасны дугаар"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="9911 2233"
                value={values.phone}
                onChange={update("phone")}
                onBlur={blur("phone")}
                error={errorFor("phone")}
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className={buttonClasses("primary", "mt-1 w-full")}
              >
                {status === "sending" ? "Илгээж байна…" : "Хүсэлт илгээх"}
              </button>

              <p className="text-sm leading-5 text-white/50">
                Илгээснээр та мэдээллээ зөвхөн эргэн холбогдох зорилгоор
                ашиглахыг зөвшөөрч байна.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
