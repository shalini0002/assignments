/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category doesn't exist in the object, initialize it with the current transaction's price
      if (!categoryTotals[category]) {
          categoryTotals[category] = price;
      } else {
          // If the category already exists, add the current transaction's price to the existing total
          categoryTotals[category] += price;
      }
  });

  // Convert the object to an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
      [category]: categoryTotals[category]
  }));

  return [];
}

module.exports = calculateTotalSpentByCategory;
