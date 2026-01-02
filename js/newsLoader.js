// News Loader Module - Handles dynamic loading and rendering of news items

/**
 * Loads news data from JSON file and renders news cards
 */
export async function loadNews() {
    try {
        const response = await fetch('data/news.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        renderNews(data.news);
    } catch (error) {
        console.error('Error loading news:', error);
        displayErrorMessage();
    }
}

/**
 * Renders news items as cards in the news container
 * @param {Array} newsItems - Array of news objects
 */
function renderNews(newsItems) {
    const newsContainer = document.getElementById('news-container');
    
    if (!newsContainer) {
        console.error('News container not found');
        return;
    }

    // Clear existing content
    newsContainer.innerHTML = '';

    // Sort news by date (newest first)
    const sortedNews = newsItems.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        // Handle invalid dates by placing them at the end
        if (isNaN(dateA.getTime())) return 1;
        if (isNaN(dateB.getTime())) return -1;
        return dateB - dateA;
    });

    // Create and append news cards
    sortedNews.forEach(newsItem => {
        const card = createNewsCard(newsItem);
        newsContainer.appendChild(card);
    });
}

/**
 * Creates a news card element
 * @param {Object} newsItem - News item object
 * @returns {HTMLElement} - News card element
 */
function createNewsCard(newsItem) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.setAttribute('data-news-id', newsItem.id);

    // Format date
    const formattedDate = formatDate(newsItem.date);

    // Create card HTML
    card.innerHTML = `
        ${newsItem.image ? `<img src="${escapeHtml(newsItem.image)}" alt="${escapeHtml(newsItem.title)}" class="news-card-image">` : '<div class="news-card-image"></div>'}
        <div class="news-card-content">
            <h3 class="news-card-title">${escapeHtml(newsItem.title)}</h3>
            <p class="news-card-date">${formattedDate}</p>
            <p class="news-card-description">${escapeHtml(newsItem.description)}</p>
            ${newsItem.category ? `<span class="news-card-category">${escapeHtml(newsItem.category)}</span>` : ''}
        </div>
    `;

    return card;
}

/**
 * Formats a date string to English locale
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    // Validate date
    if (isNaN(date.getTime())) {
        return 'Date unknown';
    }
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Escapes HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
function escapeHtml(text) {
    // Handle null, undefined, or non-string inputs
    if (text == null || typeof text !== 'string') {
        return '';
    }
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Displays error message when news can't be loaded
 */
function displayErrorMessage() {
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        newsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p>News could not be loaded. Please try again later.</p>
            </div>
        `;
    }
}
