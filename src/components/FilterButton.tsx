import Text from "./Text";
import { Genre } from "src/utils/constants";
import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

function FilterButton({
  genre,
  selectedGenre,
  setGenre,
}: {
  genre: Genre;
  selectedGenre: Genre[];
  setGenre: Dispatch<SetStateAction<Genre[]>>;
}) {
  return (
    <div
      className={twMerge(
        "rounded-2xl flex justify-center items-center px-4 shadow-md cursor-pointer",
        selectedGenre.includes(genre)
          ? "bg-beige  outline-2 outline outline-teal"
          : "bg-teal"
      )}
      onClick={() => {
        setGenre((prev) =>
          prev.includes(genre)
            ? prev.filter((prevGenre) => prevGenre !== genre)
            : [...prev, genre]
        );
      }}
    >
      <Text
        text={genre}
        className={selectedGenre.includes(genre) ? "text-teal" : "text-beige"}
      />
    </div>
  );
}

export default FilterButton;
