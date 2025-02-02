import axios from "axios";
import { Review } from "src/hooks/useBookData";

export const fetchBookData = async (review: Review) => {
  const { data } = await axios.get(
    `https://openlibrary.org/books/${review.olid}.json`
  );
  let authorName = "Unknown Author";
  const authorKey = data.authors?.[0]?.key;
  if (authorKey) {
    const { data } = await axios.get(
      `https://openlibrary.org${authorKey}.json`
    );
    authorName = data.name;
  }
  const title = data.title;
  return {
    title,
    author: authorName,
    coverUrl: `https://covers.openlibrary.org/b/olid/${review.olid}-M.jpg`,
    olid: review.olid,
    content: review.content,
    genre: review.genre,
  };
};
