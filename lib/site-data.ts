export const businessName = "Richie Rich Gaming & Cafe";
export const businessCategory = "Gaming lounge and pool billiards club";
export const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Richie+Rich+Gaming+%26+Cafe%2C+P-15%2C+Budh+Vihar+Phase+I%2C+Delhi+110085";

export const phone = "079825 39359";
export const phoneHref = "tel:+917982539359";
export const address = "P-15, Budh Vihar Phase I, Budh Vihar, Delhi, 110085";
export const hoursNote =
  "The listed closing time is 11:30 PM. Opening hours are not independently verified, so please call ahead before visiting.";

export const experiences = [
  {
    number: "01",
    title: "Gaming Zone",
    description: "PlayStation gaming in a dedicated lounge setting.",
    href: "/gaming",
    tone: "yellow" as const
  },
  {
    number: "02",
    title: "8-Ball Pool",
    description: "A focused game of 8-ball pool with friends.",
    href: "/pool",
    tone: "orange" as const
  },
  {
    number: "03",
    title: "Rooftop Cafe",
    description: "A relaxed rooftop cafe option for your visit.",
    href: "/cafe",
    tone: "green" as const
  }
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Gaming", href: "/gaming" },
  { label: "8-ball pool", href: "/pool" },
  { label: "Rooftop cafe", href: "/cafe" },
  { label: "Visit us", href: "/visit" }
];
