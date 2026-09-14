"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading, btnBlack, container } from "./ui";
import { LinkedInIcon, MailIcon, PlayStoreIcon, Send } from "./icons";

const contacts = [
  { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedInIcon, label: "LinkedIn", value: "Connect with me", href: profile.linkedin, external: true },
  { icon: PlayStoreIcon, label: "Google Play", value: "See my published apps", href: profile.playStore, external: true },
];

const input =
  "w-full rounded-xl border-2 border-transparent bg-stone px-4 py-3.5 text-[15px] text-black outline-none transition placeholder:text-black/40 focus:border-black focus:bg-white";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // No backend needed: opens the visitor's email app with the message filled in.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = form.subject || "Hello from your portfolio";
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="sheet bg-graphite pb-32 pt-24 text-white">
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]`}>
        <div>
          <SectionHeading
            dark
            eyebrow="Contact"
            title="Let's build something together"
            description="I'm open to full-time roles in software development and to freelance projects. Send me a message and I'll get back to you soon."
          />
          <div className="-mt-4 grid gap-3">
            {contacts.map(({ icon: Icon, label, value, href, external }) => (
              <Reveal key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl bg-white/[0.05] p-4 transition-colors hover:bg-white/[0.09]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <small className="block text-[13px] text-white/50">{label}</small>
                    <span className="block break-all font-semibold">{value}</span>
                  </span>
                  <span className="pr-2 text-xl text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="rounded-3xl bg-paper p-6 text-black sm:p-8">
          <h3 className="mb-6 text-2xl font-bold tracking-tight">Send a message</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input required value={form.name} onChange={set("name")} placeholder="Your name" className={input} />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className={input} />
              </Field>
            </div>
            <Field label="Subject">
              <input value={form.subject} onChange={set("subject")} placeholder="Job opportunity / project" className={input} />
            </Field>
            <Field label="Message">
              <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Tell me a bit about it..." className={`${input} resize-y`} />
            </Field>
            <button type="submit" className={`${btnBlack} w-full py-4 text-base`}>
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-black/70">{label}</span>
      {children}
    </label>
  );
}
