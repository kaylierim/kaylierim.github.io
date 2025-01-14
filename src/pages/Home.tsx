import profilePhoto from "@images/profilephoto.png";
import globaleurSign from "@images/globaleursign.jpg";
import globaleurManager from "@images/globaleurmanager.jpg";
import jejuTeaFields from "@images/jejuteafields.jpg";
import hallasan from "@images/hallasan.jpg";
import Text from "@components/Text";
import EMAIL from "@icons/email.svg";
import GITHUB from "@icons/github.svg";
import LINKED_IN from "@icons/linkedin.svg";
import RESUME from "@icons/resume.svg";
import MAP_PIN from "@icons/map_pin.svg";
import Image from "@components/Image";

function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-28 mb-28">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4">
          <Text text="Welcome, I'm Kaylie Rim" type="Heading1" />
          <Text
            text="I am a computer science student at Northeastern University. Nice to meet you!"
            type="Paragraph"
          />
          <div className="flex justify-between">
            <div className="flex">
              <img src={MAP_PIN} className="w-6" />
              <Text
                text="New York, NY & Boston, MA"
                type="Paragraph"
                className="italic"
              />
            </div>
            <div className="flex gap-4">
              <img src={EMAIL} className="w-6" />
              <img src={GITHUB} className="w-6" />
              <img src={LINKED_IN} className="w-6" />
              <img src={RESUME} className="w-6" />
            </div>
          </div>
        </div>
        <img src={profilePhoto} className="w-[280px]" />
      </div>
      <div className="flex gap-20">
        <div>
          <Text text="About Me" type="Heading2" />
          <Text
            text="I am actively searching for a Fall 2025 internship in the software field. I have been a front-end engineer co-op and a teaching assistant for Fundamentals of Computer Science 2. My diverse experience also includes being a teaching assistant, a waitress, a cashier, and a tutor."
            type="Paragraph"
            className="w-96"
          />
        </div>
        <div>
          <Text text="Skills" type="Heading2" />
          <div className="flex gap-10 font-poppins text-[#2F4156]">
            <ul className="list-disc">
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>Kotlin</li>
            </ul>
            <ul className="list-disc">
              <li>Jira</li>
              <li>Git/Github</li>
              <li>Confluence</li>
              <li>Figma</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>ESLint</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[800px]">
        <Text text="My Co-op in Korea" type="Heading2" />
        <Text text="July-December 2024" type="Paragraph" className="italic" />
        <Image
          src={globaleurSign}
          alt="Kaylie posing with the Globaleur sign"
          caption="Globaleur sign"
        />
        <Text
          text="I had the wonderful opportunity to have my first co-op in Seoul, South Korea as a front-end engineer at  Globaleur . Globaleur is a company that connects travelers to their destinations for a personalized travel experience. I contributed to Globaleur's white label product by working on tour pages, points of interests pages, and city pages."
          type="Paragraph"
        />
        <Text
          text="I also worked on individual components such as the navigation bar, footer, and two-step gallery view! I deepened my knowledge in React, Typescript, and Tailwind CSS. The most rewarding experience was brainstorming a product with the team and seeing it come to life through implementation. "
          type="Paragraph"
        />
        <Image
          src={globaleurManager}
          alt="Kaylie and her manager posing with the Globaleur sign"
          caption="My Globaleur manager, Daniel, and I"
        />
        <Image
          src={jejuTeaFields}
          alt="Kaylie posing in Osulloc Jeju Island tea field"
          caption="Osulloc Jeju Island tea field"
        />
        <Text
          text="Through this global co-op, I was able to do plenty of traveling and exploring! I traveled to Busan, Japan, and Jeju Island, all of which I recommend taking a trip to (especially Jeju Island).
Exploring Asia and working with such talented people was an unforgettable experience."
          type="Paragraph"
        />
        <Image
          src={hallasan}
          alt="View from the top of Hallasan"
          caption="View from the top of Hallasan"
        />
      </div>
      <div>
        <Text text="My Projects" type="Heading2" />
      </div>
    </div>
  );
}

export default Home;
