import ProfilePhoto from "@assets/profilephoto.png";
import Text from "@components/Text";
import EMAIL from "@icons/email.svg";
import GITHUB from "@icons/github.svg";
import LINKED_IN from "@icons/linkedin.svg";
import RESUME from "@icons/resume.svg";
import MAP_PIN from "@icons/map_pin.svg";

function Home() {
  return (
    <div className="w-full flex justify-center items-center gap-4">
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
      <img src={ProfilePhoto} className="w-[280px]" />
    </div>
  );
}

export default Home;
