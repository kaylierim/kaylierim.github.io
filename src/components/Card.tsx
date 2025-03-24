import ReactHtmlParser from "html-react-parser";
import { useState } from "react";
import x from "@icons/x.svg";
import Text from "./Text";
import Image from "./Image";
import { twMerge } from "tailwind-merge";

function Card({
  img,
  id,
  className,
  header,
  subheader,
  content,
  headerFirst,
}: {
  img: string;
  id?: string;
  className?: string;
  header?: string;
  subheader?: string;
  content?: string;
  headerFirst?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  function handleClick() {
    setModalOpen(!modalOpen);
  }

  function handleClose() {
    setModalOpen(false);
  }

  return (
    <>
      <div
        className={twMerge(
          "flex items-center relative rounded-[20px] p-4 h-[300px] bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out",
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
          {headerFirst && (
            <Text text={header ?? ""} type="Heading3" className="m-5" />
          )}
          <Text text={subheader ?? ""} type="Heading4" className="m-5" />
          {!headerFirst && (
            <Text text={header ?? ""} type="Heading3" className="m-5" />
          )}

          <div className="m-5 line-clamp-3 font-poppins text-md text-navy">
            {ReactHtmlParser(content ?? "")}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black/25 z-10"
          onClick={handleClose}
        >
          <div
            className="bg-white max-w-[70%] max-h-[80%] p-8 rounded-[20px] z-20 overflow-auto mobile:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={x}
              className="h-4 cursor-pointer"
              alt="close"
              onClick={handleClose}
            />
            <Image
              src={img}
              alt={header ?? "Image"}
              className="ml-20 mb-20 rounded-2xl float-right w-96 mobile:w-32"
            />
            <Text text={header ?? ""} type="Heading3" className="m-5" />
            <Text text={subheader ?? ""} type="Heading4" className="m-5" />
            <div className="m-5 font-poppins text-md text-navy">
              {ReactHtmlParser(content ?? "")}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
