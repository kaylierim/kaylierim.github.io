import { twMerge } from "tailwind-merge";

export const Type = {
  Custom: "",
  Heading1: "font-vanilla-ravioli text-7xl",
  Heading2: "font-vanilla-ravioli text-6xl",
  Heading3: "font-vanilla-ravioli text-4xl",
  Heading4: "font-vanilla-ravioli text-2xl",
  Paragraph: "font-poppins text-xl",
} as const;

function Text({
  type = "Custom",
  text,
  className,
}: {
  type?: keyof typeof Type;
  text: string;
  className?: string;
}) {
  return (
    <div className={twMerge("text-[#2F4156]", Type[type], className)}>
      {text}
    </div>
  );
}

export default Text;
