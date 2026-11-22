# LeetAnalytics

A responsive web application that visualizes a LeetCode user's problem-solving progress and submission statistics using vanilla JavaScript and the LeetCode GraphQL API.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f?style=flat)](https://pintu-kumarnitw.github.io/LeetAnalytics/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Proxy Configuration](#proxy-configuration)
- [Architecture](#architecture)
- [Technical Implementation](#technical-implementation)
- [Challenges and Solutions](#challenges-and-solutions)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Author](#author)

---

## About the Project

LeetAnalytics consolidates a user's LeetCode activity into a single, scannable dashboard. By entering any public LeetCode username, users can view solved problem counts across Easy, Medium, and Hard difficulties alongside overall submission metrics and calculated acceptance rates.

The project focuses on clean frontend architecture without external frameworks or charting libraries, demonstrating GraphQL data fetching, asynchronous state management, and dynamic CSS rendering.

## Features

- **Profile Lookup:** Search any valid public LeetCode username with regex-based input validation.
- **Difficulty Breakdown:** Interactive circular progress indicators displaying solved vs. total problems for Easy, Medium, and Hard categories.
- **Submission Analytics:** Detailed breakdown of total submissions and acceptance rates per difficulty level.
- **Resilient State Handling:** Graceful error messaging for invalid usernames, non-existent profiles, and network timeouts without breaking the DOM structure.
- **Request Debouncing / UI Locking:** Disables the search trigger during active network requests to prevent duplicate API calls.
- **Responsive Design:** Adapts cleanly across desktop, tablet, and mobile viewports.

## Tech Stack

| Layer | Technology |
| --- | --- |
| **Markup** | HTML5 |
| **Styling** | CSS3 (Flexbox, CSS Custom Properties, `conic-gradient`, Media Queries) |
| **Logic** | Vanilla JavaScript ES6+ (Fetch API, `async/await`, Template Literals) |
| **API & Data** | LeetCode GraphQL API |
| **Networking** | CORS Proxy (`cors-anywhere`) |
| **Deployment** | GitHub Pages |

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: [VS Code](https://code.visualstudio.com/) with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/pintu-kumarnitw/LeetAnalytics.git](https://github.com/pintu-kumarnitw/LeetAnalytics.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd LeetAnalytics
   ```
3. Open `index.html` directly in your browser, or launch it via Live Server in VS Code.

### Proxy Configuration

Because LeetCode restricts direct cross-origin browser requests (`CORS`), this application routes API calls through a CORS proxy. To enable data fetching on the live demo or locally:

1. Visit the [CORS Anywhere Demo](https://cors-anywhere.herokuapp.com/corsdemo).
2. Click **Request temporary access to the demo server**.
3. Return to **LeetAnalytics** and search for a username.

> **Note:** Demo proxy access expires periodically. For persistent production usage, deploy a dedicated proxy (e.g., a Cloudflare Worker) and replace the endpoint URL in `script.js`.

## Architecture

```text
[User Input]
     │
     ▼
[Regex Validation]
     │
     ▼
[GraphQL POST Request] ──▶ [CORS Proxy] ──▶ [[leetcode.com/graphql](https://leetcode.com/graphql)]
     │
     ▼
[JSON Response & Null Checks]
     │
     ▼
[DOM Update: CSS Conic-Gradient Rings & Stat Cards]
```

## Technical Implementation

- **Single-Query GraphQL Fetching:** Retrieves both platform-wide problem totals and user-specific submission stats in one network round-trip.
- **Zero-Dependency Data Visualization:** Calculates solved-to-total ratios in JavaScript and passes degrees via `--progress-degree` CSS variables to render `conic-gradient` progress rings.
- **Safe Arithmetic & Null Guards:** Validates API payloads for `null` user objects prior to rendering and guards acceptance rate calculations against division-by-zero errors.
- **Non-Destructive Error UI:** Renders validation and network errors in a dedicated alert container, preserving existing dashboard nodes for subsequent queries.

## Challenges and Solutions

| Challenge | Solution |
| --- | --- |
| Browsers block direct requests to `leetcode.com/graphql` due to CORS | Routed requests through a CORS proxy endpoint |
| Error messages overwrote the results section, breaking subsequent searches | Isolated errors into a dedicated alert element so the stats DOM stays intact |
| Non-existent usernames returned `null` payloads and caused runtime exceptions | Added explicit null-check guards prior to DOM rendering |
| Acceptance rate calculations risked `NaN` on zero submissions | Added zero-division guards for difficulties with zero attempts |

## Project Structure

```text
LeetAnalytics/
├── index.html      # Semantic HTML structure and dashboard layout
├── style.css       # Responsive styling, theme variables, and progress ring styles
├── script.js       # Input validation, GraphQL client, and DOM manipulation
└── README.md       # Project documentation
```

## Roadmap

- [ ] Deploy a self-hosted serverless proxy (Cloudflare Workers) to eliminate manual CORS activation
- [ ] Add contest rating, global ranking, and badge displays
- [ ] Integrate topic-wise problem breakdown and recent submission history
- [ ] Implement persistent Light/Dark mode toggle

## Author

**Pintu Kumar**  
B.Tech in Electrical and Electronics Engineering, NIT Warangal  
GitHub: [@pintu-kumarnitw](https://github.com/pintu-kumarnitw)
