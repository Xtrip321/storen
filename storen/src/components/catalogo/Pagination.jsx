import React from 'react';
import '../../styles/catalogo/Pagination.css'; // Asegúrate de que el archivo CSS esté vinculado correctamente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination-container">
            <div 
                className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`} 
                onClick={() => onPageChange(currentPage - 1)}
            >
                <div className="outer-border">
                    <div className="inner-box">
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                </div>
            </div>
            {pages.map(page => (
                <div 
                    key={page} 
                    className={`pagination-item ${page === currentPage ? 'active' : ''}`} 
                    onClick={() => onPageChange(page)}
                >
                    <div className="outer-border">
                        <div className="inner-box">
                            {page}
                        </div>
                    </div>
                </div>
            ))}
            <div 
                className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`} 
                onClick={() => onPageChange(currentPage + 1)}
            >
                <div className="outer-border">
                    <div className="inner-box">
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
