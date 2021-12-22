import React from "react";
import GridItem from "./GridItem";

const Featured = () => {
    return (
        <>
            <div className="featured">
                <div className="title">Popular gifts right now</div>
                <div className="grid--view">
                    <GridItem />
                </div>
            </div>
        </>
    );
};

export default Featured;
