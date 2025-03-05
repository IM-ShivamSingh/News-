News App

A simple and responsive news application built using **HTML5, CSS3, and JavaScript**. This app fetches real-time news articles from the [NewsAPI](https://newsapi.org/) and displays them in a user-friendly interface.

## Features
- Fetches latest news dynamically using **NewsAPI**.
- Categorized navigation (e.g., IPL, Finance, Politics) for quick topic-based filtering.
- Search functionality to find news based on user queries.
- Responsive design for optimal viewing on different devices.
- Clickable news cards that open full articles in a new tab.

## Technologies Used
- **HTML5** - Structure and layout
- **CSS3** - Styling and responsiveness
- **JavaScript (ES6+)** - Fetch API for data retrieval and dynamic content rendering


## How to Use
1. The homepage loads with default news related to **India**.
2. Click on **categories (IPL, Finance, Politics)** to filter news based on the selected topic.
3. Use the **search bar** to find specific news articles.
4. Click on any news card to read the full article.

## Project Structure

NewsApp/
│-- index.html        # Main HTML file
│-- style.css         # Stylesheet
│-- script.js         # JavaScript functionality
│-- logo.png          # App logo
│-- .vscode/          # VS Code settings (if applicable)
│-- README.md         # Documentation (this file)


## API Key
This project uses [NewsAPI](https://newsapi.org/), and an API key is required for fetching news. Replace the existing `API_KEY` in `script.js` with your own.

const API_KEY = "your_api_key_here";


