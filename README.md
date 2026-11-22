<div align="center">

# LeetAnalytics

**Track your LeetCode progress at a glance.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://pintu-kumarnitw.github.io/LeetAnalytics/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[Live Demo](https://pintu-kumarnitw.github.io/LeetAnalytics/) · [Report Bug](https://github.com/pintu-kumarnitw/LeetAnalytics/issues) · [Request Feature](https://github.com/pintu-kumarnitw/LeetAnalytics/issues)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Proxy Setup](#proxy-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## About the Project

LeetAnalytics is a lightweight web app that shows a user's LeetCode progress. Enter any public LeetCode username to see solved questions by difficulty and detailed submission statistics, all in one clean dashboard.

## Live Demo

**https://pintu-kumarnitw.github.io/LeetAnalytics/**

> **Note:** The app uses a CORS proxy. Before searching, enable it once (see [Proxy Setup](#proxy-setup)).

## Features

- Search any public LeetCode profile by username
- Circular progress rings for Easy, Medium and Hard problems (solved / total)
- Submission stat cards: overall, easy, medium, hard submissions
- Acceptance rate for each difficulty
- Input validation and clear error messages
- Handles invalid usernames and network errors gracefully
- Responsive design

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Styling, Flexbox, conic-gradient progress rings |
| JavaScript (ES6+) | Fetch API, async/await, DOM manipulation |
| LeetCode GraphQL API | User statistics data |
| CORS Proxy | Allows browser requests to LeetCode |

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari)
- (Optional) [VS Code](https://code.visualstudio.com/) with the Live Server extension

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/pintu-kumarnitw/LeetAnalytics.git
   ```

2. Go to the project folder

   ```bash
   cd LeetAnalytics
   ```

3. Run the project

   - Open `index.html` in VS Code, right-click and choose **Open with Live Server**, or
   - Double-click `index.html` to open it in your browser.

## Proxy Setup

LeetCode blocks direct browser requests (CORS), so the app sends requests through a CORS proxy. Enable it before using the app:

1. Open [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)
2. Click **Request temporary access to the demo server**
3. Return to the app and search a username

> The access is temporary. If the app shows an error or no data, repeat the steps above.

## Usage

1. Enter a LeetCode username in the input box.
2. Click **Search** (or press Enter).
3. View your progress rings and submission stats.

## Project Structure

```
LeetAnalytics/
├── index.html     # Markup
├── style.css      # Styles
├── script.js      # API calls and UI logic
└── README.md      # Documentation
```

## How It Works

1. The username is validated using a regular expression.
2. A GraphQL query is sent to `https://leetcode.com/graphql/` through the CORS proxy.
3. The response is parsed to get solved counts and submission stats.
4. The UI updates the progress rings and stat cards.

## Roadmap

- [x] Search by username
- [x] Progress rings by difficulty
- [x] Submission and acceptance stats
- [ ] Contest rating
- [ ] Recent submissions
- [ ] Dark mode
- [ ] Own backend proxy (no manual proxy activation)

## Contributing

Contributions are welcome.

1. Fork the project
2. Create your branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m "Add NewFeature"`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Author

**Pintu Kumar**

- GitHub: [@pintu-kumarnitw](https://github.com/pintu-kumarnitw)

---

<div align="center">

If you like this project, give it a star.

</div>
