import reviews from "../../reviews";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Text from "@components/Text";

function Library() {
  const [bookData, setBookData] = useState<
    {
      olid: string;
      title: string;
      author: string;
      coverUrl: string;
      content: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchBookData = async () => {
      const promises = reviews.map(async (review) => {
        try {
          const olid = review.olid;
          const content = review.content;
          const response = await axios.get(
            `https://openlibrary.org/works/${olid}.json`
          );

          const bookInfo = response.data;
          const title = bookInfo.title;
          const authorKey = bookInfo.authors?.[0]?.key;
          let authorName = "Unknown Author";
          if (authorKey) {
            const authorResponse = await axios.get(
              `https://openlibrary.org${authorKey}.json`
            );
            authorName = authorResponse.data.name;
          }

          return {
            title,
            author: authorName,
            coverUrl: `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`,
            olid,
            content,
          };
        } catch (error) {
          console.error("Error fetching book data:", error);
          return null;
        }
      });

      const results = (await Promise.all(promises)).filter(
        (book) => book !== null
      );

      setBookData(results);
    };

    fetchBookData();
  }, []);

  return (
    <div className="px-28">
      <Text
        text="⋆｡°✩ Kaylie's Library ⋆｡°✩"
        type="Heading1"
        className="flex justify-center"
      />
      <div className="flex justify-center p-4">
        <Text
          text="I have been an avid reader since junior year of high school. In 2023,
          I read 50 books and this year, my goal is 40 books. I read nonfiction,
          fantasy, romance, and literary fiction."
          type="Paragraph"
        />
        <Text
          text="This page serves as a curated space to document and share the books
          that leave a lasting impression on me. If you share my love for books,
          don't hesitate to reach out!"
          type="Paragraph"
        />
      </div>

      <div className="py-10">
        {bookData.map((book, index) => {
          return (
            <Card
              key={index}
              id={book.olid}
              header={book.title}
              subheader={book.author}
              content={book.content}
              img={book.coverUrl}
              className="mb-5"
            />
          );
        })}
      </div>

      {/*
      <img src={Books} id="books" />
      <img src={Candle} id="candle" />
      <img src={Cup} id="cup" /> */}
    </div>
  );
}

export default Library;
