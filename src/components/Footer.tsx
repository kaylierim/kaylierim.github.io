import EMAIL from "@icons/email.svg";
import GITHUB from "@icons/github.svg";
import LINKED_IN from "@icons/linkedin.svg";
import RESUME from "@icons/resume.svg";
import resume from "@assets/Kaylie's Resume 2025.pdf";
import Text from "./Text";

function Footer() {
  return (
    <div className="bg-[#2F4156] mt-auto w-full h-16 rounded-t-[20px] flex items-center justify-between p-4">
      <div className="flex gap-5">
        <a
          href="mailto:rim.k@northeastern.edu"
          className="flex gap-3 cursor-pointer"
        >
          <img src={EMAIL} className="w-6" />
        </a>
        <a
          href="https://github.com/kaylierim"
          target="_blank"
          className="flex gap-3 cursor-pointer"
        >
          <img src={GITHUB} className="w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kaylie-rim/"
          target="_blank"
          className="flex gap-3 cursor-pointer"
        >
          <img src={LINKED_IN} className="w-6" />
        </a>
        <a href={resume} target="_blank" className="flex gap-3 cursor-pointer">
          <img src={RESUME} className="w-6" />
        </a>
      </div>
      <Text
        text="© 2025 Kaylie Rim. All rights reserved."
        type="Paragraph"
        className="text-[#F5EFEB]"
      />
    </div>
  );
}

export default Footer;
