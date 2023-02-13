import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";


const Posts = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);
  const [showFullBody, setShowFullBody] = useState({});


  useEffect(() => {
    // Fetch data from the API server side
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Get the current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const toggleFullBody = (index) => {
    setShowFullBody({ ...showFullBody, [index]: !showFullBody[index] });
  };

  // Render the cards
  const renderCards = currentCards.map((card, index) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        key={index}
        className="max-w-sm m-4 overflow-hidden rounded shadow-lg"
      >
        <div className="px-6 py-4">
          <h2 className="mb-2 text-xl font-bold">{card.title}</h2>
          {card.body.length > 55 ? (
            <>
              <p className="text-base text-gray-700">
                {showFullBody[index]
                  ? card.body
                  : `${card.body.substring(0, 55)}...`}
              </p>
              <div className="mt-4">
                <Button
                  className="px-4 py-2 "
                  onClick={() => toggleFullBody(index)}
                  buttonTitle={showFullBody[index] ? "Show Less" : "Show More"}
                ></Button>
              </div>
            </>
          ) : (
            <p className="text-base text-gray-700">{card.body}</p>
          )}
        </div>
      </motion.div>
    );
  });

  // Change the page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Render the pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    if (i < 6) {
      pageNumbers.push(i);
    }
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <Button
        key={number}
        onClick={() => handlePageChange(number)}
        buttonTitle={number}
      ></Button>
    );
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="container py-10 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Dummy JSON Posts</h1>
        <div className="flex flex-wrap">{renderCards}</div>
        <div className="flex justify-center mt-6 overflow">
          {renderPageNumbers}
        </div>
      </div>
    </motion.div>
  );
}

export default Posts