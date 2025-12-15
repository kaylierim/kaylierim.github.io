import reversiGame from "@media/ReversiGame.png";
import solitaireGame from "@media/SolitaireGame.png";
import webPortfolio2024 from "@media/webPortfolio2024.png";

export interface Project {
  img: string;
  header: string;
  subheader: string;
  content: string;
  link: string;
}

const projects: Project[] = [
  {
    img: webPortfolio2024,
    header: "2024 Web Portfolio",
    subheader: "Personal project",
    content:
      "First website portfolio made using all concepts learned from a Front End Udemy Bootcamp course.",
    link: "https://kaylierim.github.io/2024-web-portfolio/",
  },
  {
    img: reversiGame,
    header: "Reversi Game",
    subheader: "Partner project",
    content:
      "Developed Java Reversi with score tracking, AI using strategy pattern, Java Swing GUI, and MVC framework following SOLID principles, tested with JUnit.",
    link: "https://github.com/kaylierim/ReversiGame",
  },
  {
    img: solitaireGame,
    header: "Solitaire Game",
    subheader: "Solo project",
    content:
      "Developed Java Solitaire with three gameplay versions, user-friendly text commands, and adhered to SOLID principles using MVC, tested with JUnit.",
    link: "https://github.com/kaylierim/SolitaireGame",
  },
];

export default projects;
