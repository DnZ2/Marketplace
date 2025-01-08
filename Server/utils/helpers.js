const convertDate = (timeData) => {
  const orderDate = new Date(timeData);
  const date = orderDate.toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  const timestamp = isFinite(timeData) ? timeData : timeData.getTime();
  return { date, timestamp };
};
const evalRatingValue = (object) => {
  const sums = Object.entries(object).reduce(
    (sum, [rating, count]) => sum + Number(rating) * count,
    0
  );
  const count = Object.values(object).reduce((sum, count) => sum + count, 0);
  const width = (sums / count) * 20;
  return {
    count,
    width,
  };
};
module.exports = {
  convertDate,
  evalRatingValue,
};
