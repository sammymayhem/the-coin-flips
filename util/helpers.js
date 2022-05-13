module.exports = {
  format_date: (price, unixTime) => {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const datetime = new Date(unixTime);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[datetime.getMonth()];
    const date = datetime.getDate();
    return `$${price} @ ${month} ${date}`;
  },
};
