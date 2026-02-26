"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email.includes("@") || message.length < 20) {
      setStatus("Please provide a valid name, email, and message with at least 20 characters.");
      return;
    }

    setStatus("Thanks! Your message was validated successfully. Connect this form to your API endpoint.");
    event.currentTarget.reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1500);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="card space-y-4 p-6" aria-label="Contact form">
        <h2 className="text-xl font-semibold">Send a message</h2>
        <input name="name" aria-label="Your name" placeholder="Name" className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
        <input name="email" aria-label="Your email" placeholder="Email" className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
        <textarea
          name="message"
          aria-label="Your message"
          placeholder="Message"
          rows={5}
          className="w-full rounded-lg border border-border bg-transparent px-3 py-2"
        />
        <button type="submit" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
          Submit
        </button>
        {status && <p className="text-sm text-foreground/70">{status}</p>}
      </form>
      <aside className="card space-y-4 p-6">
        <h2 className="text-xl font-semibold">Reach me directly</h2>
        <a href={`mailto:${siteConfig.email}`} className="text-primary">
          {siteConfig.email}
        </a>
        <button type="button" onClick={copyEmail} className="w-fit rounded-full border border-border px-4 py-2 text-sm">
          {emailCopied ? "Copied!" : "Copy email"}
        </button>
      </aside>
    </div>
  );
};
