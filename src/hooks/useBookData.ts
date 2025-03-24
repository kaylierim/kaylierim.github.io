import { useQueries } from "@tanstack/react-query";
import { fetchBookData } from "../services/bookService";
import { Genre } from "src/utils/constants";

export interface Review {
  olid: string;
  content: string;
  genre: Genre;
}

export const useBookData = (reviews: Review[]) => {
  const bookQueries = useQueries({
    queries: reviews.map((review) => ({
      queryKey: [review.olid],
      queryFn: () => fetchBookData(review),
    })),
  });
  const bookData = bookQueries
    .map((query) => query.data)
    .filter((book) => book !== undefined);
  return { bookData };
};
