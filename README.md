# LeetAnalytics

A responsive web application that visualizes a LeetCode user's problem-solving progress and submission statistics, built with vanilla JavaScript and the LeetCode GraphQL API.

**Live Demo:** [https://pintu-kumarnitw.github.io/LeetAnalytics/](https://pintu-kumarnitw.github.io/LeetAnalytics/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture](#architecture)
5. [Technical Highlights](#technical-highlights)
6. [Challenges and Solutions](#challenges-and-solutions)
7. [Getting Started](#getting-started)
8. [Proxy Setup](#proxy-setup)
9. [Project Structure](#project-structure)
10. [Future Improvements](#future-improvements)
11. [Author](#author)

---

## Overview

Tracking coding practice across Easy, Medium and Hard problems usually means scrolling through a profile page. LeetAnalytics condenses this into a single dashboard: enter a username and instantly see how many problems have been solved out of the total, along with submission counts and acceptance rates per difficulty.

The project demonstrates working with a third-party GraphQL API, asynchronous JavaScript, DOM manipulation, and handling real-world browser constraints such as CORS.

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

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, `conic-gradient`, CSS custom properties, media queries) |
| Logic | JavaScript ES6+ (Fetch API, async/await, template literals) |
| Data | LeetCode GraphQL API |
| Networking | CORS proxy |
| Hosting | GitHub Pages |

## Architecture

```
User input
    |
    v
Validation (regex)
    |
    v
GraphQL query  --->  CORS proxy  --->  leetcode.com/graphql
    |
    v
JSON response
    |
    v
Data parsing  --->  Progress rings + Stat cards (DOM update)
```

## Technical Highlights

- **GraphQL integration:** a single query fetches total question counts and the user's accepted and total submission statistics.
- **Dynamic progress rings:** solved ratio is passed to CSS through a custom property (`--progress-degree`) and rendered with `conic-gradient`, with no charting library.
- **Defensive data handling:** responses are checked for missing users before rendering, and error messages are shown without destroying the existing UI.
- **Async flow control:** `try / catch / finally` with async/await manages loading state, errors and button reset.
- **Zero dependencies:** built entirely with vanilla HTML, CSS and JavaScript.

## Challenges and Solutions

| Challenge | Solution |
| --- | --- |
| Browsers block direct requests to `leetcode.com/graphql` (CORS) | Routed requests through a CORS proxy |
| Error handling overwrote the results section, breaking later searches | Moved errors into a dedicated message element so the stats DOM stays intact |
| Non-existent usernames returned `null` and caused runtime errors | Added an explicit check before rendering |
| Acceptance rate needed a safe calculation | Guarded against division by zero when a difficulty has no submissions |

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) VS Code with the Live Server extension

### Installation

```bash
git clone https://github.com/pintu-kumarnitw/LeetAnalytics.git
cd LeetAnalytics
```

Open `index.html` directly in a browser, or use **Open with Live Server** in VS Code.

## Proxy Setup

LeetCode does not allow direct browser requests, so the app uses a CORS proxy. Enable it before using the app:

1. Open [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)
2. Click **Request temporary access to the demo server**
3. Return to the app and search a username

The access is temporary. If the app stops returning data, repeat the steps above. For a permanent setup, host your own proxy (for example a Cloudflare Worker) and update the proxy URL in `script.js`.

## Project Structure

```
LeetAnalytics/
├── index.html      # Page structure
├── style.css       # Layout, theme and progress rings
├── script.js       # API requests, validation, rendering
└── README.md
```

## Future Improvements

- Self-hosted serverless proxy to remove the manual activation step
- Contest rating and ranking
- Recent submissions and topic-wise breakdown
- Dark mode

## Author

**Pintu Kumar**
B.Tech, Electrical and Electronics Engineering, NIT Warangal
GitHub: [@pintu-kumarnitw](https://github.com/pintu-kumarnitw)
