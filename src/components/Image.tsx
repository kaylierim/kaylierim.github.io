import { twMerge } from "tailwind-merge";
import Text from "./Text";

function Image({
  src,
  alt,
  className,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <div className={twMerge("relative", className)}>
      {caption && (
        <Text
          text={caption}
          type="Paragraph"
          className="text-[#F5EFEB] w-full h-full absolute rounded-[20px] opacity-0 hover:bg-[#2F4156]/50 hover:opacity-100 flex items-center justify-center transition-all duration-300 ease-in-out"
        />
      )}
      <img src={src} alt={alt} className="rounded-[20px]" />
    </div>
  );
}

export default Image;
