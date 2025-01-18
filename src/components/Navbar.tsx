import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import Text from "./Text";

function Navbar({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex justify-between mb-28", className)}>
      <Link to="/">
        <Text text="Kaylie Rim" type="Heading3" />
      </Link>
      <div className="flex gap-6">
        <Link to="/">
          <Text text="Home" type="Heading3" />
        </Link>
        <Link to="/library">
          <Text text="Library" type="Heading3" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
