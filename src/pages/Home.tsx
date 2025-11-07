import profilePhoto from "@media/profilephoto.png";
import globaleurEngineeringTeam from "@media/globaleurengineeringteam.jpg";
import globaleurManager from "@media/globaleurmanager.jpg";
import hallasan from "@media/hallasan.jpg";
import reversiGame from "@media/ReversiGame.png";
import solitaireGame from "@media/SolitaireGame.png";
import webPortfolio2024 from "@media/webPortfolio2024.png";
import galleryModalDemo from "@media/galleryModalDemo.mp4";
import resume from "@assets/Kaylie's Resume 2025.pdf";
import Text from "@components/Text";
import EMAIL from "@icons/email.svg";
import GITHUB from "@icons/github.svg";
import LINKED_IN from "@icons/linkedin.svg";
import RESUME from "@icons/resume.svg";
import MAP_PIN from "@icons/map_pin.svg";
import Image from "@components/Image";
import Card from "@components/Card";

function Home() {
  const skills1 = [
    "Typescript",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "Kotlin",
  ];

  const skills2 = [
    "Jira",
    "Git/Github",
    "Confluence",
    "Figma",
    "React",
    "Tailwind CSS",
    "ESLint",
  ];
  return (
    <div className="w-full flex flex-col items-center gap-28 mb-28">
      <div className="flex items-center gap-5 px-8">
        <Image
          src={profilePhoto}
          alt="Kaylie's profile photo"
          className="w-[280px] mobile:w-[200px]"
        />
        <div className="flex flex-col gap-4">
          <Text text="Welcome, I'm Kaylie Rim" type="Heading1" />
          <Text
            text="I am a computer science student at Northeastern University. Nice to meet you!"
            type="Paragraph"
          />
          <div className="flex justify-between mobile:flex-col mobile:gap-3">
            <div className="flex">
              <img src={MAP_PIN} className="w-6" />
              <Text
                text="New York, NY & Boston, MA"
                type="Paragraph"
                className="italic"
              />
            </div>
            <a
              href="mailto:rim.k@northeastern.edu"
              className="flex gap-3 cursor-pointer"
            >
              <img src={EMAIL} className="w-6" />
              <Text text="rim.k@northeastern.edu" type="Paragraph" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex tablet:gap-10 tablet:flex-col mobile:px-4">
        <div className="pr-10">
          <Text text="About Me" type="Heading2" />
          <Text
            text="I am an incoming Front-End Engineer Intern at Amazon. I have been a front-end engineer co-op and a teaching assistant for Fundamentals of Computer Science 2. My diverse experience also includes being a teaching assistant, a waitress, a cashier, and a tutor."
            type="Paragraph"
            className="w-96 tablet:w-[600px] mobile:w-full"
          />
        </div>
        <div className="flex tablet:gap-0">
          <div className="border-solid border-y-0 border-r-0 border-gray-300 border-4 pl-16 pr-10 tablet:border-none mobile:pl-5">
            <Text text="Skills" type="Heading2" />
            <div className="flex gap-12">
              <ul className="list-disc">
                {skills1.map((item, index) => (
                  <li key={index}>
                    <Text type="Paragraph" text={item} />
                  </li>
                ))}
              </ul>
              <ul className="list-disc">
                {skills2.map((item, index) => (
                  <li key={index}>
                    <Text type="Paragraph" text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-solid border-y-0 border-r-0 border-gray-300 border-4 pl-12 tablet:border-none tablet:pl-14 mobile:pl-0">
            <Text text="Links" type="Heading2" className="mb-4" />
            <div className="flex flex-col gap-5">
              <a
                href="https://github.com/kaylierim"
                target="_blank"
                className="flex gap-3 cursor-pointer"
              >
                <img src={GITHUB} className="w-6" />
                <Text text="GitHub" type="Paragraph" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaylie-rim/"
                target="_blank"
                className="flex gap-3 cursor-pointer"
              >
                <img src={LINKED_IN} className="w-6" />
                <Text text="LinkedIn" type="Paragraph" />
              </a>
              <a
                href={resume}
                target="_blank"
                className="flex gap-3 cursor-pointer"
              >
                <img src={RESUME} className="w-6" />
                <Text text="Resume" type="Paragraph" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[1023px] items-center tablet:w-full tablet:px-4">
        <div className="gap-3 flex flex-col">
          <Text text="My Co-op in Korea" type="Heading2" />
          <a href="https://www.globaleur.com/" className="underline">
            <Text text="Globaleur" type="Paragraph" />
          </a>
          <Text text="July-December 2024" type="Paragraph" className="italic" />
          <Text
            text="I had the wonderful opportunity to have my first co-op in Seoul, South Korea as a front-end engineer at  Globaleur . Globaleur is a company that connects travelers to their destinations for a personalized travel experience. I contributed to Globaleur's white label product by working on tour pages, points of interests pages, and city pages."
            type="Paragraph"
            className="flex items-center"
          />{" "}
          <Text
            text="I also worked on individual components such as the navigation bar, footer, and two-step gallery view! I deepened my knowledge in React, Typescript, and Tailwind CSS. The most rewarding experience was brainstorming a product with the team and seeing it come to life through implementation. "
            type="Paragraph"
            className="flex items-center"
          />
          <Text
            text="Through this global co-op, I was able to do plenty of traveling and exploring! I traveled to Busan, Japan, and Jeju Island, all of which I recommend taking a trip to (especially Jeju Island)."
            type="Paragraph"
          />
          <Text
            text="Exploring Asia and working with such talented people was an unforgettable experience."
            type="Paragraph"
          />
        </div>
        <div className="flex gap-3">
          <Image
            src={globaleurEngineeringTeam}
            alt="Kaylie and the Gloableur Engineering Team"
            caption="Globaleur Engineering Team"
            className="w-1/3"
          />
          <Image
            src={globaleurManager}
            alt="Kaylie and her manager"
            caption="Daniel (my manager) and I"
            className="w-1/3"
          />
          <Image
            src={hallasan}
            alt="View from the top of Hallasan"
            caption="View from the top of Hallasan"
            className="w-1/3"
          />
        </div>
        <video
          src={galleryModalDemo}
          controls
          muted
          className="rounded-[20px]"
        />
      </div>
      <div className="tablet:px-4">
        <Text text="My Projects" type="Heading2" className="flex mb-5" />
        <Card
          img={webPortfolio2024}
          header="2024 Web Portfolio"
          subheader="Personal project"
          content="First website portfolio made using all concepts learned from a Front End Udemy Bootcamp course."
          headerFirst={false}
          className="w-[1000px] mb-5 h-[250px] tablet:w-full"
        />
        <Card
          img={reversiGame}
          header="Reversi Game"
          subheader="Partner project"
          content="Developed Java Reversi with score tracking, AI using strategy
              pattern, Java Swing GUI, and MVC framework following SOLID
              principles, tested with JUnit."
          headerFirst={false}
          className="w-[1000px] mb-5 h-[250px] tablet:w-full"
        />
        <Card
          img={solitaireGame}
          header="Solitaire Game"
          subheader="Solo project"
          content="Developed Java Solitaire with three gameplay versions,
              user-friendly text commands, and adhered to SOLID principles
              using MVC, tested with JUnit."
          headerFirst={false}
          className="w-[1000px] h-[250px] tablet:w-full"
        />
      </div>
    </div>
  );
}

export default Home;
