import React from 'react';

const loading = () => {
    return (

        <div className="flex flex-col justify-center items-center min-h-screen gap-3">
            <span className="loading loading-spinner loading-lg"></span>
            <p>Loading foods...</p>
        </div>

    );
};

export default loading;