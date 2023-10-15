// This function executes SQL queries using the 'alasql' library, 
// which works with case-insensitive SQL statements.

function SUPERSQL(sqlStatementAsString, dataAsArray1, ...dataAsArray) {
  // Disabling case sensitivity of alasql
  alasql.options.casesensitive = false;

  // Convert the first data array to an array of objects
  let sqlData = [arrayToObjectOfArray(dataAsArray1)];

  // Convert additional data arrays to arrays of objects
  dataAsArray.forEach(arr => sqlData.push(arrayToObjectOfArray(arr));

  // Execute the SQL statement using the provided data
  var res = alasql(sqlStatementAsString, sqlData);

  // Check if the result is empty
  if (res.length === 0) {
    // Throwing Error for No Result found.
    throw new Error("Statement Returns No Response!");
  } else {
    // Extract all unique keys from the result objects
    let keys = new Set();
    res.forEach(r => Object.keys(r).forEach(k => keys.add(k));

    // Create a new result array with a uniform structure
    let newRes = res.map(r => [...keys].map(i => r[i]));

    // Add the keys as the first row in the result
    newRes.unshift([...keys]);

    // Log the formatted data
    console.log("formatted data: ", newRes);

    // Return the formatted result
    return newRes;
  }
}

// This function converts an array of data into an array of objects with headers.

function arrayToObjectOfArray(data) {
  // Remove blank rows from the data
  data = data.filter(r => r.every(val => val != ""));

  // Extract the headers from the first row
  let headers = data.shift();

  // Convert the data into an array of objects
  return data.map(r => {
    let obj = {};
    r.forEach((val, idx) => {
      // Convert headers to lowercase and use them as keys in the object
      obj[headers[idx].toString().toLowerCase()] = val;
    });

    return obj;
  });
}
