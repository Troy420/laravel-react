import React from "react";
import GridView from "./GridView";

const Featured = () => {
    return (
        <>
            <div className="featured">
                <div className="title">Popular gifts right now</div>
                <GridView />
            </div>
        </>
    );
};

export default Featured;
