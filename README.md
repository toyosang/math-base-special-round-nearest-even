# Round Nearest Even: A JavaScript Math Utility for Precision 🎯

![GitHub release](https://img.shields.io/github/release/toyosang/math-base-special-round-nearest-even.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg)

## Overview

This repository provides a simple and efficient way to round double-precision floating-point numbers to the nearest integer. When ties occur, it rounds to the nearest even integer, ensuring consistent and predictable results.

For the latest version, please check the [Releases section](https://github.com/toyosang/math-base-special-round-nearest-even/releases).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Rounds numbers to the nearest integer.
- Handles ties by rounding to the nearest even integer.
- Lightweight and easy to integrate into any JavaScript project.
- Works seamlessly with Node.js and browser environments.

## Installation

To install the package, use npm:

```bash
npm install math-base-special-round-nearest-even
```

Alternatively, you can clone the repository directly:

```bash
git clone https://github.com/toyosang/math-base-special-round-nearest-even.git
cd math-base-special-round-nearest-even
```

After cloning, you can run the following command to install dependencies:

```bash
npm install
```

## Usage

To use the rounding function, import it into your JavaScript file:

```javascript
const roundNearestEven = require('math-base-special-round-nearest-even');
```

Now you can use the function to round numbers as needed.

## API

### `roundNearestEven(value)`

- **Parameters**: 
  - `value` (number): The number to round.
  
- **Returns**: 
  - (number): The rounded integer.

### Example

```javascript
const roundNearestEven = require('math-base-special-round-nearest-even');

console.log(roundNearestEven(2.5)); // Output: 2
console.log(roundNearestEven(3.5)); // Output: 4
console.log(roundNearestEven(1.5)); // Output: 2
console.log(roundNearestEven(4.5)); // Output: 4
```

## Examples

### Rounding Positive Numbers

```javascript
console.log(roundNearestEven(3.2)); // Output: 3
console.log(roundNearestEven(4.7)); // Output: 5
```

### Rounding Negative Numbers

```javascript
console.log(roundNearestEven(-3.2)); // Output: -3
console.log(roundNearestEven(-4.7)); // Output: -5
```

### Handling Edge Cases

```javascript
console.log(roundNearestEven(0.5)); // Output: 0
console.log(roundNearestEven(-0.5)); // Output: 0
```

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch.
5. Create a pull request.

Please ensure your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for their contributions and support.
- Special thanks to contributors who help improve this project.

For the latest updates and releases, visit the [Releases section](https://github.com/toyosang/math-base-special-round-nearest-even/releases).