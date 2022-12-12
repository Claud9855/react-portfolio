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
        else if(currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        else if(currentPage === 'Contact') {
            return <Contact/>;
        }
        else {
            return <Resume/>;
        }
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