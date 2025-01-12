import Text from "./Text";
function Footer() {
  return (
    <div className="bg-[#2F4156] mt-28 w-full h-20 rounded-t-[20px] flex items-center p-5 absolute bottom-0">
      <Text
        text="© 2025 Kaylie Rim. All rights reserved."
        type="Paragraph"
        className="text-white"
      />
    </div>
  );
}

export default Footer;
