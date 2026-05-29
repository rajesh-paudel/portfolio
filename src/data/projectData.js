import thehalton from "../assets/thehalton.png";
import workmonk from "../assets/workmonk.png";
const projectData = [
  {
    title: "The Halton",
    image: thehalton,
    tech: ["HTML", "CSS", "JavaScript", "React"],
    description: [
      "Built a clean UI for a real estate listing website.",
      "Worked with a static rendering strategy for faster page delivery.",
      "Handled filtering, sorting, and pagination for listing data.",
      "Used optimized techniques for large image fetching and CDN rendering.",
    ],
  },
  {
    title: "WorkMonk",
    image: workmonk,
    tech: ["React", "Next.js", "Python"],
    description: [
      "Updated email sending from Resend to Mailgun for a more reliable workflow.",
      "Improved UI details for a smoother user experience.",
      "Integrated a component-based email creation tool.",
      "Built a component-based form generation flow inspired by Typeform.",
    ],
  },
];
export default projectData;
