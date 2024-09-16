export const emptyArrayGenerator = (length: number) => {
  return Array(length)
    .fill(0)
    .map((_, index) => ({
      key: index,
    }));
};
