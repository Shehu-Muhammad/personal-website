// data/services.ts
export type Service = {
  title: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    title: "Single Page Website",
    description:
      "A clean, responsive landing page or one-page site for personal brands, events, or small businesses.",
    price: "Starting at $300",
  },
  {
    title: "3-Page Static Website",
    description:
      "A multi-page website for businesses or organizations with essential pages like Home, About, and Contact.",
    price: "Starting at $600",
  },
  {
    title: "Custom Website",
    description:
      "A tailored website or web app built around your specific goals, features, and design needs.",
    price: "Custom Quote",
  },
];