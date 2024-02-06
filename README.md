```markdown
# JavaScript Basic Problems Solving Repository

This repository contains solutions to various basic JavaScript problems. Each problem is organized into a separate directory, and each directory includes multiple solutions using different approaches such as recursive, procedural, functional and their combinations. 

The solutions and test functions are implemented using vanilla JavaScript without any frameworks or libraries.

## Table of Contents

- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [How to Run Tests](#how-to-run-tests)

## Getting Started

Clone this repository to your local machine to get started with the JavaScript problem-solving exercises.

```bash
git clone https://github.com/Dm1tr1y-S/js-basic-problems-solving.git
cd js-basic-problems-solving
```

## Directory Structure

The repository follows a specific structure for organizing problems and their solutions. Each problem has its own directory with the following structure:

```plaintext
/problem-name
  ├── main.js
  ├── modules
  │   ├── compare-results.js
  │   ├── run-test-case.js
  │   ├── run-tests.js
  │   ├── sample.js
  │   ├── solution.js
  │   └── solutions
  │       ├── approach-1.js
  │       ├── approach-2.js
  │       ├── approach-3.js
  │       └── ...
  ├── package.json
  └── task.md
```

- `main.js`: Entry point for running tests for a particular problem.
- `modules`: Directory containing utility modules for testing and comparison.
- `modules/compare-results.js`: Module for comparing expected and actual results.
- `modules/run-test-case.js`: Module for running a single test case.
- `modules/run-tests.js`: Module for running all test cases.
- `modules/sample.js`: Sample input data for testing.
- `modules/solution.js`: Module for importing and exporting multiple problem solution functions from the solutions directory.
- `modules/solutions`: Directory containing multiple solutions using different approaches.
- `package.json`: Node.js package for running modules.
- `task.md`: Detailed description of the problem.

## How to Run Tests

To confirm the validity of the solutions, you can run the provided test cases. Each problem directory includes a set of test cases, and you can use the following commands to run them:

```bash
cd problem-name
node main.js     # Run tests
```

Make sure to replace `problem-name` with the actual name of the problem directory.

Feel free to explore different solutions and approaches within each problem directory.
```