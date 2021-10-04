module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString();
    },
    format_price: (price) => {
      return price.toLocaleString('en-US');
    }
  };