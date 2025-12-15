import resume from "@assets/kaylie-rim-resume.pdf";
import Text from "@components/Text";
import EMAIL from "@icons/email.svg";
import GITHUB from "@icons/github.svg";
import LINKED_IN from "@icons/linkedin.svg";
import RESUME from "@icons/resume.svg";
import MAP_PIN from "@icons/map_pin.svg";
import profilePhoto from "@media/profilephoto.png";
import Image from "@components/Image";

export default function Header() {
  return (
    <div className="flex items-center gap-5 px-8">
      <Image
        src={profilePhoto}
        alt="Kaylie's profile photo"
        className="w-[280px] mobile:w-[200px]"
      />
      <div className="flex flex-col gap-4">
        <div className="flex">
          <img src={MAP_PIN} className="w-6" />
          <Text
            text="New York, NY & Boston, MA"
            type="Paragraph"
            className="italic"
          />
        </div>
        <Text text="Welcome, I'm Kaylie Rim" type="Heading1" />
        <Text
          text="I am a computer science student at Northeastern University. Nice to meet you!"
          type="Paragraph"
        />
        <div className="flex gap-4">
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
  );
}
