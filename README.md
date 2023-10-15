# SUPERSQL - SQL Query Execution with Data Transformation

## Overview

__SUPERSQL__ is a JavaScript function that allows you to execute SQL queries using the 'alasql' library, which works with case-insensitive SQL statements. It also provides a mechanism to convert data from arrays into a more structured array of objects with headers. This documentation provides an overview of how to use the SUPERSQL function and the associated data transformation function.

## Using SUPERSQL
The SUPERSQL function takes three main parameters:

- __sqlStatementAsString__ (String): This parameter should be a SQL statement as a string.
- __dataAsArray1__ (Array): The first array containing the data for your SQL query.
- __...dataAsArray__ (Rest of the arrays): Additional arrays containing data for your SQL query. 
You can provide as many arrays as needed.

## Example Usage
```javascript
const sqlStatement = 'SELECT * FROM ?';
const data1 = [['Name', 'Age'], ['John', 30], ['Alice', 25]];
const data2 = [['Name', 'Age'], ['Bob', 28], ['Eve', 22]];

const result = SUPERSQL(sqlStatement, data1, data2);
```

In this example, **sqlStatement** is a SQL query that selects all rows from the provided data. The data is organized in arrays, and the SUPERSQL function will execute the SQL query and return the result as a formatted array.

## Data Transformation Function
In addition to executing SQL queries, the code includes a function for transforming arrays of data into a more structured array of objects with headers. This function can be used independently as well.


## Installation

To use SUPERSQL, you'll need the 'alasql' library. You can install it via npm:

```bash
npm install alasql
```

## Contributing
Feel free to contribute to this project by creating issues or pull requests. We welcome any improvements or bug fixes.

## License
This code is released under the MIT License.

Please make sure to include a license file (e.g., `LICENSE`) in your project directory and customize the content according to your project's requirements and licensing.
