import React from "react";

const Searchbar = () => {
    return (
        <>
            <div className="search">
                <input
                    type="search"
                    className="site-search"
                    name="q"
                    aria-label="Search through site content"
                />

                <button type="submit">Search</button>
            </div>
        </>
    );
};

export default Searchbar;
