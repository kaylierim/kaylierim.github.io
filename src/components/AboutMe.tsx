import about from "../data/about";
import Text from "@components/Text";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center bg-white/25 py-8 px-24 rounded-[20px] w-3/4">
      <Text text="About Me" type="Heading2" />
      <Text text={about.aboutMe} type="Paragraph" />
    </div>
  );
}
