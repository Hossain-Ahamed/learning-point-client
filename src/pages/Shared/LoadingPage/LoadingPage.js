import React from 'react';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";




const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const LoadingPage = () => {
    return (
        <div className="sweet-loading h-screen flex items-center">
            
        <ClipLoader
            cssOverride={override}
            size={100}
            color={"#123abc"}
            loading={true}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
    );
};

export default LoadingPage;