import './App.css';
import React, { useState } from 'react';

const articles = [
  { id: 1, title: 'Article 1', content: "In the quiet of the early morning, the sun's rays gently kissed the dew-laden grass, creating a shimmering carpet of diamonds that stretched across the meadow. A gentle breeze rustled the leaves of ancient trees, carrying with it the sweet scent of blooming flowers. Birds greeted the day with cheerful melodies, their songs weaving a tapestry of nature's symphony. As the world awakened, it seemed to embrace a tranquil serenity, a moment frozen in time before the hustle and bustle of daily life." },
  { id: 2, title: 'Article 2', content: "Amidst the towering skyscrapers of the city, a bustling metropolis of concrete and glass, life moved at a frenetic pace. Streams of people hurried along crowded sidewalks, their faces lost in a sea of determination and purpose. Neon signs flickered overhead, advertising the latest trends and technologies. Street vendors added their lively calls to the urban cacophony, offering a diverse array of culinary delights. In the heart of the city, time seemed compressed, each second carrying the weight of countless stories and ambitions, all converging in this vibrant nexus of human existence."},
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filterArticles = () => {
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filterArticles().map((article) => (
          <li key={article.id}>
            <h3>{highlightText(article.title, searchTerm)}</h3>
            <p>{highlightText(article.content, searchTerm)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;