import Work1 from "../../assets/pokedex.PNG";
import Work2 from "../../assets/sudplafond.PNG";
import Work3 from "../../assets/ans.PNG";
import Work4 from "../../assets/hygdrasil.png";
import Work5 from "../../assets/pianochat2.PNG";
import { Badge } from "react-bootstrap";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "PokedexAPI",
    description: "The Pokédex application is a Pokémon search tool that allows users to explore and learn about various Pokémon using data from an external API.", 
    category: "web",
    badge: ["React","CSS", "HTML", "Netlify", "RestAPI"],
    link: "https://pokedex-api-original.netlify.app/",
  },
  {
    id: 2,
    image: Work2,
    title: "Sud Plafond Isolation",
    description: "Sud Plafond Isolation is a showcase of a plastering company specializing in drywall and painting services, based in Marseille and serving the surrounding areas. ", 
    category: "showcase site",
    badge: ["Javascript","WordPress", "Elementor", "UX writing"],
    link: "https://sud-plafond-isolation.fr/",
  },
  {
    id: 3,
    image: Work3,
    title: "ANS",
    description: "ANS13 is a company specializing in pest control, rodent extermination, insect removal, and pigeon control services in Marseille.", 
    category: "showcase site",
    badge: ["Javascript","WordPress", "Elementor", "UX writing"],
    link: "https://ans13.com/",
  },
  {
    id: 4,
    image: Work4,
    title: "Hygdrasil",
    description: "Hygdrasil is a native iOS application where e-sport gamers can meet up, take part in the same tournaments and progress together.", 
    category: "web",
    badge: ["SwiftUI","KeyNote", "POO"],
  },
  {
    id: 5,
    image: Work5,
    title: "Piano Chat",
    description: "Design thinking for a fictitious mobile application. PianoChat is a social network that allows piano players to communicate with with each other.", 
    category: "design",
    badge: ["Figma", "UX/UI"],
    link: "https://www.figma.com/design/LlQoGEC5pqvB1ybp6nOk77/Design-v1?node-id=0-1&m=dev&t=kY6NtnLNZDOneE3E-1"
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "design",
  },
  {
    name: "showcase site",
  },
];
