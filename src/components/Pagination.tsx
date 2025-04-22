import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 10;
    
    if (totalPages <= maxPagesToShow) {

      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {

      const leftSiblingIndex = Math.max(currentPage - 1, 1);
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages);
      
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
      
      if (!shouldShowLeftDots && shouldShowRightDots) {

        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (shouldShowLeftDots && !shouldShowRightDots) {

        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (shouldShowLeftDots && shouldShowRightDots) {

        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-6 space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md flex items-center justify-center ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-700 hover:bg-blue-100'
        }`}
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      {getPageNumbers().map((page, index) => {

        if (typeof page === 'string') {
          return (
            <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-500">
              {page}
            </span>
          );
        }
        
        return (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-md ${
              currentPage === page
                ? 'bg-blue-600 text-white font-medium'
                : 'text-gray-700 hover:bg-blue-100'
            }`}
            aria-label={`Página ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md flex items-center justify-center ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-700 hover:bg-blue-100'
        }`}
        aria-label="Próxima página"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;