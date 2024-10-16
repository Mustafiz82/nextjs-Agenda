import React from 'react';
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const DataLength = 80;
    const itemPerPage = 10;

    const numberOfPage = Math.ceil(DataLength / itemPerPage);
    const pages = Array.from({ length: numberOfPage }, (_, i) => i);

    const handleIncreaseCurrentPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };

    const handleDecreaseCurrentPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, numberOfPage - 1));
    };

    return (
        <div className="flex justify-center space-x-2 py-4">
            <button 
                onClick={() => setCurrentPage(0)} 
                className="bg-[#E4E5EE]	hover:text-white hover:bg-primary-300 text-sm p-2 md:p-3 rounded-md "
                disabled={currentPage === 0} 
            >
                <FaAnglesLeft />
            </button>
            <button 
                onClick={handleIncreaseCurrentPage} 
                className="bg-[#E4E5EE]	hover:text-white hover:bg-primary-300 text-sm p-2 md:p-3 rounded-md "
                disabled={currentPage === 0} 
            >
                <FaAngleLeft />
            </button>
            {pages.map((page) => (
                <button 
                    key={page} 
                    onClick={() => setCurrentPage(page)} 
                    className={`	hover:text-white hover:bg-primary-300 text-sm p-2 md:p-3 rounded-md ${currentPage === page ? "bg-primary-400 text-white" : "bg-[#E4E5EE]"}`}
                >
                    {page + 1}
                </button>
            ))}
            <button 
                onClick={handleDecreaseCurrentPage} 
                className="bg-[#E4E5EE]	hover:text-white hover:bg-primary-300 text-sm p-2 md:p-3 rounded-md "
                disabled={currentPage === numberOfPage - 1} 
            >
                <FaAngleRight />
            </button>
            <button 
                onClick={() => setCurrentPage(numberOfPage - 1)} 
                className="bg-[#E4E5EE] hover:text-white hover:bg-primary-300	 text-sm p-2 md:p-3 rounded-md "
                disabled={currentPage === numberOfPage - 1} 
            >
                <FaAnglesRight />
            </button>
        </div>
    );
};

export default Pagination;