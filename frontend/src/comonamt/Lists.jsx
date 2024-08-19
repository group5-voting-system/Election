// src/components/Lists.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Candidates from './Candidates';
const Lists = () => {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [circleId, setCircleId] = useState(sessionStorage.getItem("Circle_id"));

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`/api/local-lists?page=${currentPage}&circleId=${circleId}`);
        setLists(response.data.lists);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchLists();
  }, [currentPage, circleId]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lists</h1>
      <div>
        {lists.map((list) => (
          <div key={list.LIST_ID} className="mb-4 p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold">{list.LIST_NAME}</h2>
            <Candidates listId={list.LIST_ID} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 mx-1 border rounded bg-gray-200"
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-1">{currentPage}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 mx-1 border rounded bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Lists;
