// data/projects.ts
export type Project = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Recipe Website",
    description:
      "A recipe discovery site with categorized meals, search, and API-powered recipe data.",
    image: "/images/projects/recipe-website.png",
    githubUrl: "https://github.com/Shehu-Muhammad/Recipe_Website",
    liveUrl: "https://recipe-website-teal-ten.vercel.app/",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "A weather application that fetches forecast data and displays conditions in a simple interface.",
    image: "/images/projects/weather-app.png",
    githubUrl: "https://github.com/Shehu-Muhammad/Quick-Projects/tree/main/WeatherApp",
    liveUrl: "https://quick-projects-murex.vercel.app/",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    featured: true,
  },
];