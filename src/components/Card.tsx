import ReactHtmlParser from "html-react-parser";
import { useState } from "react";
import x from "@icons/x.svg";
import Text from "./Text";
import Image from "./Image";
import { twMerge } from "tailwind-merge";
import LINK from "@icons/link.svg";

function Card({
  img,
  id,
  className,
  header,
  subheader,
  content,
  headerFirst,
  link,
  hasModal = true,
}: {
  img: string;
  id?: string;
  className?: string;
  header?: string;
  subheader?: string;
  content?: string;
  headerFirst?: boolean;
  link?: string;
  hasModal?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  function handleClick() {
    if (hasModal) {
      setModalOpen(!modalOpen);
    }
  }

  function handleClose() {
    setModalOpen(false);
  }

  const getHeader = () => {
    if (link) {
      return (
        <div className="flex items-center gap-3 ml-5">
          <Text text={header ?? ""} type="Heading3" className="" />
          <a href={link} target="_blank">
            <img src={LINK} className="w-4" />
          </a>
        </div>
      );
    }
    return <Text text={header ?? ""} type="Heading3" className="m-5" />;
  };

  return (
    <>
      <div
        className={twMerge(
          "flex items-center relative rounded-[20px] p-4 h-[300px] bg-white shadow-md transition-all duration-300 ease-in-out",
          hasModal && "hover:shadow-lg hover:-translate-y-1 cursor-pointer",
          className
        )}
        id={id}
        onClick={handleClick}
      >
        <img
          src={img}
          className={
            isImageLoading
              ? "h-full w-72 rounded-2xl bg-slate-500/50 animate-pulse"
              : "w-[160px] rounded-2xl"
          }
          alt={header}
          onLoad={() => setIsImageLoading(false)}
        />

        <div>
          {headerFirst && getHeader()}
          <Text text={subheader ?? ""} type="Heading4" className="mx-5 my-2" />
          {!headerFirst && getHeader()}

          <div className="mx-5 line-clamp-3 font-poppins text-base text-navy">
            {ReactHtmlParser(content ?? "")}
          </div>
        </div>
      </div>

      {hasModal && modalOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black/25 z-10"
          onClick={handleClose}
        >
          <div
            className="bg-white max-w-[65%] max-h-[80%] p-8 rounded-[20px] z-20 overflow-auto mobile:p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={x}
              className="h-4 cursor-pointer"
              alt="close"
              onClick={handleClose}
            />
            <div className="flex justify-center my-12">
              <Image
                src={img}
                alt={header ?? "Image"}
                className="rounded-2xl max-w-48 mobile:w-32 shadow-md"
              />
              <div className="flex flex-col justify-center">
                <Text
                  text={header ?? ""}
                  type="Heading2"
                  className="ml-5 mb-2"
                />
                <Text text={subheader ?? ""} type="Heading3" className="ml-5" />
              </div>
            </div>
            <div className="font-poppins text-base text-navy">
              {ReactHtmlParser(content ?? "")}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
