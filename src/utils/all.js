/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }) => {
  return src;
};
