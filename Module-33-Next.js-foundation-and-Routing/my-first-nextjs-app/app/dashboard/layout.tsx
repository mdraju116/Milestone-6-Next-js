import React from 'react';

const DashboradLayout = ({children}:{children:React.ReactNode}) => {

    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            {/* // Main content */}
            <div className="drawer-content">
                 {/* //Mobile content */}
                <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
                    ☰
                </label>

                <h1 className="text-2xl font-bold p-5">
                    Main Content
                    {children}
                </h1>
            </div>

            {/* // Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>

                <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboradLayout;