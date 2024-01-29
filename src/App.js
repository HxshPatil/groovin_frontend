// App.jsx
import React, { useState, useEffect } from "react";
import Card from "./components/card/card";
import Pagination from "./components/pagination/pagination";
import LoadingSpinner from "./components/loader/loader";
import axios from "axios";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://buyc-backend-nu.vercel.app/api/all"
        );
        setCardsData(response.data.cars);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching cars:", error.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      {loading && <LoadingSpinner />} 
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <Card key={index} title={card.manufacturer_model} content={`List Price: Rs.${card.list_price.toLocaleString()}`} />
        ))}
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cardsData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <p className="pagination-status">
        Page {currentPage} of {Math.ceil(cardsData.length / cardsPerPage)}
      </p>
    </div>
  );
};

export default App;
