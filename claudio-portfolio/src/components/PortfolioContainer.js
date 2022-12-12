import React, {useState} from "react";
import Header from "./Header";
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        if(currentPage === 'About') {
            return <About/>;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if(currentPage === 'Contact') {
            return <Contact/>;
        }
        return <Resume/>;
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
};

export default PortfolioContainer;