import React from "react";

const Discover = () => {
    return (
        <>
            <div className="discover">
                <div className="title">Discover unique hand-picked items</div>
                <div className="tabs">
                    <button className="tab-1 active">
                        <div className="item-title">Bridesmaid earrings</div>
                    </button>
                    <button className="tab-2">
                        <div className="item-title">Cross stitch pattern</div>
                    </button>
                    <button className="tab-3">
                        <div className="item-title">Scarf</div>
                    </button>
                    <button className="tab-4">
                        <div className="item-title">Bouquet</div>
                    </button>
                </div>
                <div className="grid-container">
                    <div className="wrapper">
                        <div className="left">
                            <img
                                src="https://source.unsplash.com/300x300"
                                alt=""
                            />
                            <div className="price">Rp 450,000</div>
                        </div>
                        <div className="top">
                            <div className="img-wrapper">
                                <img
                                    src="https://source.unsplash.com/300x300"
                                    alt=""
                                />
                                <div className="price">Rp 450,000</div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="img-wrapper">
                                <img
                                    src="https://source.unsplash.com/300x300"
                                    alt=""
                                />
                                <div className="price">Rp 450,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discover;
