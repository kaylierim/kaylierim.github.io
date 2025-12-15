import globaleurEngineeringTeam from "@media/globaleurengineeringteam.jpg";
import globaleurManager from "@media/globaleurmanager.jpg";
import hallasan from "@media/hallasan.jpg";
import galleryModalDemo from "@media/galleryModalDemo.mp4";
import Text from "@components/Text";
import Image from "@components/Image";

export default function Globaleur() {
  return (
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
      <video src={galleryModalDemo} controls muted className="rounded-[20px]" />
    </div>
  );
}
