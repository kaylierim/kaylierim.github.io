import { twMerge } from "tailwind-merge";
import Text from "./Text";

function Navbar({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex justify-between mb-28", className)}>
      <a href="/">
        <Text text="Kaylie Rim" type="Heading3" />
      </a>
      <div className="flex gap-6">
        <a href="/">
          <Text text="Home" type="Heading3" />
        </a>
        <a href="/library">
          <Text text="Library" type="Heading3" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
