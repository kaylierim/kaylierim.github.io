import ReactHtmlParser from "html-react-parser";
import { useState } from "react";
import x from "@icons/x.svg";
import Text from "./Text";

function Card({
  img,
  id,
  header,
  subheader,
  content,
  headerFirst,
}: {
  img: string;
  id?: string;
  header?: string;
  subheader?: string;
  content?: string;
  headerFirst?: boolean;
}) {
  const truncatedContent =
    content && content.length > 100
      ? content.substring(0, 150) + "..."
      : content;
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick() {
    setModalOpen(!modalOpen);
  }

  function handleClose() {
    setModalOpen(false);
  }

  // header, subheader, text, icon image use this instead of rigid review card structure

  return (
    <>
      <div
        className="flex items-center relative rounded-[20px] p-2 h-[300px]"
        id={id}
        onClick={handleClick}
      >
        <div>
          <style>{`
                #${id}::before {
                    background-image: url(${img});
                }
            `}</style>
          <img src={img} className="h-[260px] rounded-2xl" alt={header} />
        </div>

        <div className="review-box-right">
          {headerFirst && (
            <Text text={header ?? ""} type="Heading2" className="m-5" />
          )}
          <Text text={subheader ?? ""} type="Heading3" className="m-5" />
          {!headerFirst && (
            <Text text={header ?? ""} type="Heading2" className="m-5" />
          )}
          <Text
            text={ReactHtmlParser(truncatedContent ?? "")}
            type="Paragraph"
            className="m-5"
          />
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black/25 z-10"
          onClick={() => handleClose()}
        >
          <div className="bg-white max-w-[70%] max-h-[80%] p-8 rounded-[20px] z-20 overflow-auto">
            <img
              src={x}
              className="h-4 cursor-pointer"
              alt="close"
              onClick={handleClose}
            />
            <img
              className="m-20 rounded-2xl float-right h-[400px]"
              src={img}
              alt={header}
            />
            <h2 className="modal-title">{header}</h2>
            <h3 className="modal-author">{subheader}</h3>
            <div className="modal-content">
              {ReactHtmlParser(content ?? "")}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
