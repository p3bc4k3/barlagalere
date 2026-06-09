"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: connecter à un service d'envoi (Resend, Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="font-accent text-xs uppercase tracking-widest text-primary mb-3">
              La Galère · Valras-Plage
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              Contact
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Retrouvez-nous en front de mer à Valras-Plage
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — infos pratiques + carte */}
            <FadeIn direction="right" className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold mb-6">
                  Infos pratiques
                </h2>
                <ul className="space-y-5">
                  {/* Adresse */}
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-accent text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                        Adresse
                      </p>
                      <address className="not-italic text-sm font-medium leading-relaxed">
                        1 Boulevard Jean Moulin
                        <br />
                        34350 Valras-Plage
                        <br />
                        France
                      </address>
                    </div>
                  </li>

                  {/* Téléphone */}
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-accent text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                        Téléphone
                      </p>
                      <a
                        href="tel:+33467323457"
                        className="text-sm font-medium hover:text-primary transition-colors duration-150 cursor-pointer"
                      >
                        04 67 32 34 57
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-accent text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                        Email
                      </p>
                      {/* [À COMPLÉTER PAR LE CLIENT] */}
                      <p className="text-sm font-medium text-muted-foreground italic">
                        [À COMPLÉTER PAR LE CLIENT]
                      </p>
                    </div>
                  </li>

                  {/* Horaires */}
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-accent text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                        Horaires
                      </p>
                      <dl className="text-sm font-medium space-y-1">
                        <div className="flex gap-2">
                          <dt className="text-muted-foreground shrink-0">Lun. – Ven.</dt>
                          <dd>8h00 – 19h30</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="text-muted-foreground shrink-0">Sam. & Dim.</dt>
                          <dd>8h00 – 20h00</dd>
                        </div>
                        <div className="flex gap-2 pt-1">
                          <dt className="text-primary font-semibold shrink-0">Haute saison</dt>
                          <dd className="text-primary font-semibold">7h00 – 01h00</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  {/* Facebook */}
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Facebook size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-accent text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                        Facebook
                      </p>
                      <a
                        href="https://www.facebook.com/lagalereplage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors duration-150 cursor-pointer"
                      >
                        facebook.com/lagalereplage
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=1+Boulevard+Jean+Moulin+34350+Valras-Plage&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Galère sur Google Maps — 1 Boulevard Jean Moulin, Valras-Plage"
                  aria-label="Carte Google Maps : La Galère, 1 Boulevard Jean Moulin, 34350 Valras-Plage"
                />
              </div>
            </FadeIn>

            {/* Right — formulaire */}
            <FadeIn direction="left">
              <h2 className="font-heading text-2xl font-semibold mb-6">
                Envoyez-nous un message
              </h2>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 rounded-2xl border border-border bg-muted/30"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Send size={22} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    Message envoyé !
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm max-w-xs leading-relaxed">
                    Merci pour votre message. Nous vous répondrons dans les plus
                    brefs délais.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 cursor-pointer"
                    onClick={() => setStatus("idle")}
                  >
                    Envoyer un autre message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jean Dupont"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean@exemple.fr"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Objet de votre message"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group cursor-pointer"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer le message
                        <Send
                          size={15}
                          className="ml-2 group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Retrouvez-nous aussi sur{" "}
                    <a
                      href="https://www.facebook.com/lagalereplage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground transition-colors cursor-pointer"
                    >
                      Facebook
                    </a>
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
