"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wine, IceCream, Waves, GlassWater } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const categories = [
  { id: "cocktails", label: "Cocktails", icon: Wine },
  { id: "sans-alcool", label: "Sans Alcool", icon: Waves },
  { id: "glacier", label: "Coupes Glacées", icon: IceCream },
  { id: "boissons", label: "Boissons", icon: GlassWater },
] as const;

type CategoryId = (typeof categories)[number]["id"];

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuData: Record<CategoryId, MenuSection[]> = {
  cocktails: [
    {
      title: "Tequila",
      items: [
        { name: "Tequila Sunrise", description: "Tequila, jus d'orange, sirop de grenadine", price: "10.50 €" },
        { name: "Margarita", description: "Tequila, citron pressé, Triple sec", price: "10.50 €" },
        { name: "Cactus", description: "Tequila, jus d'ananas, citron pressé, sirop de kiwi", price: "10.50 €" },
        { name: "Frozen Strawberry", description: "Tequila, Liqueur de fraises des bois, citron pressé, purée de fraise", price: "10.50 €" },
      ],
    },
    {
      title: "Vodka",
      items: [
        { name: "Bleu Azur", description: "Vodka, jus d'orange, Curaçao bleu", price: "10.50 €" },
        { name: "Cosmopolitan", description: "Vodka, Triple sec, Cranberry, jus de citron vert", price: "10.50 €" },
        { name: "Expresso Martini", description: "Vodka, Liqueur de café, expresso, sirop de sucre de canne", price: "10.50 €" },
        { name: "Blue Lagoon", description: "Vodka, citron pressé, limonade, Curaçao", price: "10.50 €" },
        { name: "Sex on the Beach", description: "Vodka, jus d'ananas, de pêche, de cranberry, Liqueur de fraises des bois, sirop de fruits rouges", price: "11.80 €" },
        { name: "Purple Street", description: "Vodka, jus de goyave, citron pressé, sirop de fraise et limonade", price: "11.20 €" },
        { name: "Moscow Mule", description: "Vodka, Ginger beer, jus de citron vert", price: "11.20 €" },
      ],
    },
    {
      title: "Gin",
      items: [
        { name: "Gin Fizz", description: "Gin, sirop de sucre de canne, jus de citron, trait de lait, tonic", price: "10.50 €" },
        { name: "Gin Basil Smash", description: "Gin, citron pressé, feuilles de basilic, sirop de sucre de canne", price: "9.50 €" },
        { name: "Miami Ice", description: "Gin, Vodka, Curaçao, limonade", price: "11.20 €" },
        { name: "Sex Appeal", description: "Gin, Malibu, jus de Cranberry, sirop de fraise", price: "11.20 €" },
        { name: "Gin Tonic", description: 'Gin Bombay "Saphire", schweppes tonic premium', price: "10.50 €" },
      ],
    },
    {
      title: "Rhum",
      items: [
        { name: "Ti Punch", description: "Rhum Brun, cassonade, morceaux de citron vert", price: "8.90 €" },
        { name: "Cuba Libre", description: "Havana, jus de citron vert, Coca Cola", price: "10.50 €" },
        { name: "Daïquiri", description: "Rhum Brun, Triple sec, sirop de sucre de canne, jus de citron vert", price: "10.50 €" },
        { name: "Naï Taï", description: "Rhum Brun, Rhum Blanc, Triple sec, sirop de sucre de canne, jus de citron vert, sirop d'orgeat", price: "10.50 €" },
        { name: "Banana Mama", description: "Rhum Brun, Rhum Blanc, jus d'ananas, d'orange, de banane, de citron vert, Malibu, sirop de grenadine", price: "10.50 €" },
        { name: "Planteur Punch", description: "Rhum Blanc, Rhum Brun, jus d'orange, d'ananas, sirop de grenadine", price: "12.50 €" },
        { name: "Piña Colada", description: "Rhum Blanc, sorbet coco, lait, jus d'ananas", price: "" },
        { name: "Macumba", description: "Rhum Blanc, Liqueur de fraises des bois, citron pressé, sirop de sucre de canne", price: "11.20 €" },
        { name: "Caprice", description: "Rhum Blanc, Rhum Brun, jus de goyave, d'ananas, d'orange, sirop de grenadine", price: "10.50 €" },
        { name: "Mojito", description: "Rhum Havana, eau gazeuse, cassonade, morceaux de citron vert, menthe fraîche", price: "11.80 €" },
        { name: "Mojito Fraise ou Passion", description: "Rhum Havana, eau gazeuse, cassonade, morceaux de citron vert, menthe fraîche, purée de fraise ou passion", price: "" },
        { name: "Mojito Royal", description: "Rhum Havana, Champagne, cassonade, morceaux de citron vert, menthe fraîche", price: "" },
        { name: "Mojito La Vitrola", description: "Rhum Havana, Bière San Miguel, cassonade, morceaux de citron vert, menthe fraîche", price: "11.20 €" },
      ],
    },
    {
      title: "Champagne",
      items: [
        { name: "Mambo", description: "Champagne, jus de fraise, liqueur de fraise des bois", price: "11.80 €" },
        { name: "Champagne Orange", description: "Champagne, Grand Marnier, jus d'orange", price: "11.80 €" },
        { name: "Kir Royal", description: "", price: "9.90 €" },
        { name: "Blue Up", description: "Champagne, jus de poire, Curaçao", price: "11.00 €" },
      ],
    },
    {
      title: "Cocktails Mixtes",
      items: [
        { name: "Aphrodisiak", description: "Vodka, jus de pêche, jus de cranberry, crème de pêche", price: "11.20 €" },
        { name: "Ultra Violet", description: "Triple sec, Vodka, sirop de violettes, citron pressé", price: "10.50 €" },
        { name: "Pornstar Martini", description: "Vodka, Passoa, jus de passion, jus de citron vert, sirop de vanille", price: "10.50 €" },
        { name: "Hugo", description: "Prosecco, eau gazeuse, sirop de fleur de sureau, morceaux de citron vert, feuille de menthe fraîche", price: "9.90 €" },
        { name: "New York", description: "Whisky, Coca Cola, Liqueur de fraises des bois, jus de citron vert", price: "10.50 €" },
        { name: "Cardinal", description: "Malibu, jus d'ananas, Curaçao bleu", price: "10.50 €" },
        { name: "Caïpirinha", description: "Cachaça, morceaux de citron vert, cassonade", price: "8.90 €" },
        { name: "Long Island Ice Tea", description: "Tequila, Gin, Vodka, Rhum Blanc, Triple sec, Coca Cola, jus de citron vert", price: "13.80 €" },
        { name: "Spritz", description: "Apérol, Prosecco, eau gazeuse", price: "9.90 €" },
        { name: "Spritz St Germain", description: "St Germain, Prosecco, eau gazeuse", price: "10.90 €" },
      ],
    },
    {
      title: "Hot Coffee",
      items: [
        { name: "Irish Coffee", description: "Café, Whisky, sirop de sucre de canne, chantilly", price: "10.00 €" },
        { name: "Hot Coffee Havana", description: "Café, Havana, sirop de sucre de canne, chantilly", price: "10.00 €" },
        { name: "Marnissimo", description: "Café, Grand Marnier, sirop de sucre de canne, chantilly", price: "10.00 €" },
        { name: "Mexican Coffee", description: "Café, Tequila, sirop de sucre de canne, chantilly", price: "10.00 €" },
      ],
    },
  ],
  "sans-alcool": [
    {
      title: "Cocktails sans alcool",
      items: [
        { name: "Grenadine", description: "Jus de passion, ananas, orange, sirop de grenadine", price: "9.20 €" },
        { name: "Ibiza", description: "Jus d'abricot, banane, passion", price: "9.20 €" },
        { name: "Chantaco", description: "Jus d'orange et citron pressé, sirop de grenadine", price: "9.20 €" },
        { name: "Magnolia", description: "Jus d'ananas, orange et citron pressés, sorbet passion mixée", price: "9.90 €" },
        { name: "Light Pleasure", description: "Citron pressé, jus de fraise, cranberry, limonade", price: "9.20 €" },
        { name: "Zombi", description: "Jus de pêche, de poire, d'orange, passion", price: "9.20 €" },
        { name: "Virgin Planteur", description: "Sirop de Rhum, jus d'orange, d'ananas, citron pressé, sirop de grenadine", price: "9.20 €" },
        { name: "Barracuda", description: "Jus de cranberry, d'orange, d'ananas, de fraise, citron pressé, sirop de fruits rouges, sirop de sucre de canne", price: "9.20 €" },
        { name: "Pink Lady", description: "Jus de pêche, de poire, d'abricot, sirop de fraise", price: "9.20 €" },
        { name: "Virgin Mojito", description: "Morceaux de citron vert, feuille de menthe, cassonade, sirop de rhum, eau gazeuse", price: "8.90 €" },
        { name: "Florida", description: "Jus d'ananas, de passion, citron pressé, sirop de grenadine", price: "9.20 €" },
        { name: "Virgin Colada", description: "Jus d'ananas, sorbet coco, lait", price: "9.20 €" },
        { name: "Banana Moon", description: "Jus de banane, lait, sorbet coco mixée, sirop de fraise", price: "9.20 €" },
        { name: "Coco Beach", description: "Jus d'ananas, de fraise, sirop de noix de coco", price: "9.20 €" },
        { name: "Milk Shake", description: "Lait, parfum de glace au choix", price: "8.90 €" },
      ],
    },
  ],
  glacier: [
    {
      title: "Les Incontournables",
      items: [
        { name: "Petit Damier", description: "3 parfums au choix, chantilly", price: "9.20 €" },
        { name: "Café ou Chocolat Liégeois", description: "3 boules · glace café ou chocolat craquant, vanille, coulis café ou chocolat, chantilly", price: "9.90 €" },
        { name: "Poire Belle Hélène", description: "3 boules · vanille, vanille pécan, sorbet poire, morceaux de poire, coulis chocolat, chantilly", price: "10.90 €" },
        { name: "Aloha", description: "4 boules · sorbet ananas, banane, fruits de la passion, mangue, coulis de fruits rouges, amandes effilées, chantilly", price: "12.00 €" },
        { name: "Snickers", description: "4 boules · 2 boules snickers, caramel beurre salé, chocolat, coulis de chocolat, chantilly", price: "12.00 €" },
        { name: "Dune", description: "4 boules · pistache de Sicile, chocolat, nougat, spéculoos, coulis chocolat, chantilly", price: "12.00 €" },
        { name: "Menthe Religieuse", description: "3 boules · chocolat craquant, 2 boules menthe-chocolat, copeaux de chocolat, coulis de menthe, chantilly", price: "10.50 €" },
        { name: "Péché Mignon", description: "3 boules · sorbet pêche, fraise, vanille, morceaux de pêche, amandes effilées, coulis de fruits rouges, chantilly", price: "10.90 €" },
        { name: "Dame Blanche", description: "3 boules · 3 boules vanille, coulis chocolat, chantilly", price: "9.90 €" },
        { name: "Fraise Melba", description: "3 boules · 2 boules sorbet fraise, vanille, fraises fraîches, coulis de fruits rouges, chantilly", price: "10.90 €" },
        { name: "Banana Split", description: "4 boules · vanille, sorbet fraise, chocolat craquant, banane, morceaux de banane, coulis chocolat, chantilly", price: "12.00 €" },
      ],
    },
    {
      title: "Les Spéciales",
      items: [
        { name: "Cocotier", description: "4 boules · noix de coco, sorbet fruits de la passion, banane, framboise, tranches de kiwi, morceaux de fraises, noix de coco râpée, coulis de fruits rouges, chantilly", price: "12.50 €" },
        { name: "Mareva", description: "4 boules · sorbet pêche de vigne, framboise, fraise, menthe-chocolat, menthe fraîche, coulis de fruits rouges", price: "12.00 €" },
        { name: "Sous Bois", description: "4 boules · sorbet framboise, fraise, cassis, cerise, morceaux de fraise, amandes effilées, coulis de fruits rouges, chantilly", price: "12.00 €" },
        { name: "Marronnier", description: "4 boules · 2 boules marron, praliné, vanille pécan, crème de marron, copeaux de chocolat, chantilly", price: "12.00 €" },
        { name: "Copacabana", description: "4 boules · vanille, sorbet mangue, cassis, banane, morceaux de banane, coulis chocolat, chantilly", price: "12.00 €" },
        { name: "America", description: "4 boules · cookies, oreo, Bueno, vanille pécan, coulis chocolat, morceaux de brownies, chantilly", price: "12.50 €" },
        { name: "À la Folie", description: "6 boules · caramel beurre salé, chocolat craquant, praliné, Bueno, marron, nougat, coulis caramel beurre salé, brisures de pralin, chantilly", price: "13.50 €" },
        { name: "Tiramisu", description: "4 boules · 2 boules tiramisu, vanille pécan, café, chantilly, coulis de café", price: "12.00 €" },
        { name: "Noir et Blanc", description: "4 boules · chocolat craquant, Snickers, Bueno, vanille pécan, copeaux de chocolat, coulis chocolat, chantilly", price: "12.00 €" },
        { name: "Spéculoos", description: "4 boules · 2 boules spéculoos, caramel beurre salé, vanille pécan, coulis de spéculoos, chantilly", price: "12.00 €" },
        { name: "Riva", description: "4 boules · sorbet cassis, poire, framboise, vanille, amandes effilées, coulis de fruits rouges, chantilly", price: "12.00 €" },
        { name: "Boum Caramel", description: "4 boules · 2 boules caramel beurre salé, tatin, vanille pécan, coulis caramel beurre salé, chantilly", price: "12.00 €" },
        { name: "Papagayo", description: "6 boules · sorbet banane, mangue, ananas, cerise, noix de coco, fruits de la passion, morceaux de fruits, coulis de fruits rouges, amandes effilées, chantilly", price: "13.50 €" },
        { name: "Madison", description: "4 boules · nougat, vanille pécan, caramel beurre salé, chocolat craquant, copeaux de chocolat, coulis chocolat, chantilly", price: "12.00 €" },
        { name: "Nougatine", description: "4 boules · 2 boules nougat, Bueno, praliné, coulis chocolat, brisures de pralin, chantilly", price: "12.00 €" },
      ],
    },
    {
      title: "Les Alcoolisées",
      items: [
        { name: "Antillaise", description: "3 boules · sorbet ananas, noix de coco, rhum-raisins, morceaux d'ananas, alcool Rhum, coulis chocolat, raisins secs, chantilly", price: "12.80 €" },
        { name: "After Eight", description: "3 boules · 2 boules menthe-chocolat, chocolat, alcool Get 27", price: "11.50 €" },
        { name: "Colonel", description: "3 boules · sorbet citron, Vodka", price: "11.50 €" },
        { name: "Williamine", description: "3 boules · sorbet poire, alcool de Poire", price: "11.50 €" },
        { name: "Mojito Glacé", description: "3 boules · sorbet citron, menthe fraîche, tranche de citron vert, Rhum", price: "11.50 €" },
      ],
    },
  ],
  boissons: [
    {
      title: "Bières Pression",
      items: [
        { name: "Kronenbourg 1664", description: "25 cl · 50 cl", price: "" },
        { name: "Kronenbourg 1664 + sirop", description: "25 cl · 50 cl", price: "" },
        { name: "Kronenbourg 1664 Blanche", description: "5°", price: "" },
        { name: "La Bête Ambrée", description: "4°", price: "" },
        { name: "Grimbergen Blonde", description: "6.7°", price: "" },
        { name: "Grimbergen Fruits Rouges", description: "5.5°", price: "" },
        { name: "Picon Bière", description: "", price: "" },
      ],
    },
    {
      title: "Bières du Monde",
      items: [
        { name: "Budweiser", description: "3° · 25 cl", price: "" },
        { name: "Carlsberg", description: "5° · 25 cl", price: "" },
        { name: "Brooklyn Defender IPA", description: "5.5° · 33 cl", price: "" },
        { name: "Corona", description: "4° · 35 cl", price: "" },
        { name: "Licorne Black", description: "6.2°", price: "" },
        { name: "Chimay Bleue", description: "9°", price: "" },
        { name: "La Chouffe", description: "8°", price: "" },
        { name: "Desperados", description: "4.5°", price: "" },
        { name: "Hoegaarden", description: "5°", price: "" },
        { name: "Pelforth Brune", description: "6.5°", price: "" },
        { name: "Leffe Blonde", description: "6.6°", price: "" },
        { name: "Tourtel Twist", description: "sans alcool", price: "" },
      ],
    },
    {
      title: "Gin",
      items: [
        { name: "Gin Traditionnel", description: "4 cl", price: "7.50 €" },
        { name: 'Gin Bombay "Saphire"', description: "4 cl", price: "8.00 €" },
        { name: "Gin Hendrick's", description: "4 cl", price: "8.50 €" },
      ],
    },
    {
      title: "Vodka",
      items: [
        { name: "Vodka Traditionnelle", description: "4 cl", price: "7.50 €" },
        { name: "Grey Goose", description: "4 cl", price: "8.50 €" },
        { name: "Belvedere", description: "4 cl", price: "8.50 €" },
        { name: "Cîroc Pêche ou Fruits Rouges", description: "4 cl", price: "8.50 €" },
      ],
    },
    {
      title: "Rhum",
      items: [
        { name: "Havana Club 3 ans", description: "4 cl", price: "" },
        { name: "Havana Club Ambré Especial", description: "4 cl", price: "" },
        { name: "Captain Morgan", description: "4 cl", price: "" },
        { name: "Diplomatico", description: "4 cl", price: "" },
        { name: "Don Papa", description: "4 cl", price: "" },
      ],
    },
  ],
};

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 mt-8 first:mt-0">
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="font-accent text-xs uppercase tracking-widest text-muted-foreground px-1">
        {title}
      </span>
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

function MenuCard({
  name,
  description,
  price,
  isLast,
}: {
  name: string;
  description: string;
  price: string;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 py-4",
        !isLast && "border-b border-border"
      )}
    >
      <div className="flex-1 min-w-0">
        <p className="font-heading font-semibold text-foreground text-base">{name}</p>
        {description && (
          <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {price && (
        <p className="shrink-0 font-semibold text-primary text-base tabular-nums">
          {price}
        </p>
      )}
    </div>
  );
}

export default function CartePage() {
  const [activeTab, setActiveTab] = useState<CategoryId>("cocktails");

  const switchTab = (id: CategoryId) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeCategory = categories.find((c) => c.id === activeTab)!;
  const sections = menuData[activeTab];

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
              La Carte
            </h1>
            <p className="mt-3 text-lg text-muted-foreground font-heading italic">
              Cocktails · Glacier · Boissons
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Carte susceptible d&apos;évoluer selon les saisons
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <nav
            className="flex gap-1 overflow-x-auto py-2 scrollbar-none"
            role="tablist"
            aria-label="Catégories de la carte"
          >
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => switchTab(id)}
                className={cn(
                  "relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer",
                  activeTab === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <activeCategory.icon size={18} className="text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-2xl font-semibold">
                {activeCategory.label}
              </h2>
            </div>

            {/* Sub-sections */}
            <div className="space-y-1">
              {sections.map((section) => (
                <div key={section.title}>
                  <SectionDivider title={section.title} />
                  <div className="rounded-2xl border border-border bg-card px-6 md:px-8">
                    {section.items.map((item, i) => (
                      <MenuCard
                        key={i}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        isLast={i === section.items.length - 1}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground pt-10 pb-4">
              Tous nos prix sont indiqués en euros TTC · Carte susceptible d&apos;évoluer selon les saisons
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
