import FilterButton from "@components/FilterButton";
import reviews from "../data/reviews";
import Card from "@components/Card";
import Text from "@components/Text";
import { useBookData } from "../hooks/useBookData";
import { useState } from "react";
import { Genre, genres } from "../utils/constants";

function Library() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const { bookData } = useBookData(reviews);

  return (
    <div className="px-28 mb-28 tablet:px-20 mobile:px-4">
      <Text
        text="⋆｡°✩ Kaylie's Library ⋆｡°✩"
        type="Heading1"
        className="flex justify-center"
      />
      <div className="flex justify-center p-4 gap-5 px-32 tablet:px-0">
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
      <div className="flex gap-4">
        <Text text="Filter genre:" type="Heading2" />
        {genres.map((genre, idx) => (
          <FilterButton
            key={`filter-${idx}`}
            genre={genre}
            selectedGenre={selectedGenres}
            setGenre={setSelectedGenres}
          />
        ))}
      </div>
      <div className="py-10">
        {bookData
          .filter((book) =>
            selectedGenres.length === 0
              ? book
              : selectedGenres.includes(book.genre)
          )
          .map((book, index) => {
            return (
              <Card
                key={index}
                id={book.olid}
                header={book.title}
                subheader={book.author}
                content={book.content}
                img={book.coverUrl}
                className="mb-5"
                headerFirst
              />
            );
          })}
      </div>
    </div>
  );
}

export default Library;
