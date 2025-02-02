export const genres = ["Literary Fiction", "Nonfiction"] as const;
export type Genre = (typeof genres)[number];
