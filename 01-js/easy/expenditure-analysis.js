/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
