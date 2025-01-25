import { twMerge } from "tailwind-merge";

export const Type = {
  Custom: "",
  Heading1: "font-vanilla-ravioli text-5xl",
  Heading2: "font-vanilla-ravioli text-4xl",
  Heading3: "font-vanilla-ravioli text-2xl",
  Heading4: "font-vanilla-ravioli text-lg",
  Paragraph: "font-poppins text-md",
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
    <div className={twMerge("text-navy", Type[type], className)}>{text}</div>
  );
}

export default Text;
