// App.jsx
import React, { useState, useEffect } from "react";
import Card from "./components/card/card";
import Pagination from "./components/pagination/pagination";
import LoadingSpinner from "./components/loader/loader";
import axios from "axios";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [tempCardsPerPage, setTempCardsPerPage] = useState(20);
  const [cardsData, setCardsData] = useState([]);
  const [totalCars, setTotalCars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://groovin-backend.vercel.app/api/all?page=${currentPage}&perPage=${cardsPerPage}`
        );

        const newCardsData = response.data.cardsData || [];
        const newTotalCars = response.data.totalCount || 0;

        setCardsData(newCardsData);
        setTotalCars(newTotalCars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, cardsPerPage]);

  const handleTempCardsPerPageChange = (e) => {
    const newTempCardsPerPage = parseInt(e.target.value, 10);
    setTempCardsPerPage(newTempCardsPerPage);
  };

  const handleApplyChanges = () => {
    setCardsPerPage(tempCardsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentCards = Array.isArray(cardsData) ? cardsData : [];

  return (
    <div className="app">
      {loading && <LoadingSpinner />}
      <div className="page-container">
      <div className="cards-per-page-container">
        <label htmlFor="cardsPerPage">Cards per Page:</label>
        <input
          type="number"
          id="cardsPerPage"
          value={tempCardsPerPage}
          onChange={handleTempCardsPerPageChange}
          min="1"
        />
        <button onClick={handleApplyChanges}>Apply Changes</button>
      </div>
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            image_url={card.image_url}
            title={card.manufacturer_model}
            price={card.list_price.toLocaleString()}
            color={card.colors}
          />
        ))}
      </div>
      <div className="pagination-container"><Pagination
        cardsPerPage={cardsPerPage}
        totalCards={totalCars}
        currentPage={currentPage}
        paginate={handlePageChange}
      /></div>
      <p className="pagination-status">
        Page {currentPage} of {Math.ceil(totalCars / cardsPerPage)}
      </p>
      </div>


      
    </div>
  );
};

export default App;
