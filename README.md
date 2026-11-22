<div align="center">

# LeetAnalytics

**Track your LeetCode progress at a glance.**

A lightweight web app that turns any public LeetCode username into a clean dashboard of solved problems, submission counts and acceptance rates.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://pintu-kumarnitw.github.io/LeetAnalytics/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---
## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Roadmap](#roadmap)
- [Author](#author)

---

## Description

LeetAnalytics fetches a user's data from the LeetCode GraphQL API and presents it visually: circular progress rings for Easy, Medium and Hard problems, along with submission statistics and acceptance rates. Built with vanilla HTML, CSS and JavaScript, with no external libraries.

## Live Demo

> **Before opening the demo, set up the proxy first:**
>
> 1. Open **[Proxy Setup Link](https://cors-anywhere.herokuapp.com/corsdemo)**
> 2. Click **"Request temporary access to the demo server"**
> 3. Then open the demo and search a username
>
> The proxy is required because LeetCode blocks direct browser requests (CORS). The access is temporary, so repeat these steps if the app shows no data.

### [Open Live Demo](https://pintu-kumarnitw.github.io/LeetAnalytics/)

---

## Features

- Search any public LeetCode profile by username
- Circular progress indicators for Easy, Medium and Hard problems (solved / total)
- Submission statistics: overall, easy, medium and hard submissions
- Acceptance rate calculated for each difficulty level
- Username validation using regular expressions
- Graceful handling of invalid usernames, missing users and network failures
- Loading state on the search button to prevent duplicate requests
- Responsive layout for desktop and mobile

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Styling, Flexbox, conic-gradient progress rings |
| JavaScript (ES6+) | Fetch API, async/await, DOM manipulation |
| LeetCode GraphQL API | User statistics data |
| CORS Proxy | Allows browser requests to LeetCode |

## Architecture
```
User input
    |
    v
Validation (regex)
    |
    v
GraphQL query  --->  CORS proxy  --->  [leetcode.com/graphql](https://leetcode.com/graphql)
    |
    v
JSON response
    |
    v
Data parsing  --->  Progress rings + Stat cards (DOM update)
```

## Usage

1. Enable the proxy using the [Proxy Setup Link](https://cors-anywhere.herokuapp.com/corsdemo).
2. Open the [live demo](https://pintu-kumarnitw.github.io/LeetAnalytics/).
3. Enter a LeetCode username and click **Search**.
4. View the progress rings and submission stats.

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

## Future Improvements

- Self-hosted serverless proxy to remove the manual activation step
- Contest rating and ranking
- Recent submissions and topic-wise breakdown
- Dark mode

## Author

**Pintu Kumar**
B.Tech, Electrical and Electronics Engineering, NIT Warangal

- GitHub: [@pintu-kumarnitw](https://github.com/pintu-kumarnitw)

---

<div align="center">

If you like this project, give it a star.

</div>
