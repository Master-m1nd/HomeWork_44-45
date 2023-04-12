import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState('All');

  useEffect(() => {
    axios.get('/categories.json').then(function (response) {
      setCategories([{ id: 'all', title: 'All' }, ...response.data]);
    });
  }, []);

  useEffect(() => {
    axios.get('/articles.json').then(function (response) {
      setArticles(response.data);
      filterByCategory(response.data, filters);
    });
  }, []);

  useEffect(() => {
    console.log(filters);
    filterByCategory(articles, filters);
  }, [filters]);

  const filterByCategory = (articlesData, currentFilter) => {
    if (currentFilter === 'All') {
      setData(articlesData);
    } else {
      const filteredData = articlesData.filter(
        (el) => el.category && el.category.title === currentFilter
      );
      setData(filteredData);
    }
  };
  return (
<>
    <div className='container'>
        <h1>Popular topics</h1>
        <div className="categoriesWrap">
            {categories.map((el) => (
            <button
                key={el.id}
                className={`category ${filters === el.title ? 'categoryActive' : ''}`}
                onClick={() => {
                setFilters(el.title);
                }}
                >
                {el.title}
            </button>
            ))}
        </div>
        <div className="cardWrap">
            {data.map((el, key) => (
            <Card
            key={key}
            img={el.image}
            date={el.published_at}
            title={el.title}
            description={el.description}
            author={el.author}
            />
            ))}
        </div> 
    </div>
</>
  );
}

export default App;