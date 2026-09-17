import React from 'react';
import Image from 'next/image';

const DashboardPage = () => {
    return (
        <div>
            Welcome to DashBoard.
            {/* Local Image */}
            <Image src="/goldenglove.jpg" alt='goldenGlove' width={300} height={300} />

            {/* Remote Image */}
            <Image
                src="https://images.unsplash.com/photo-1789207051591-05b3c423cc14"
                alt="Unsplash image"
                width={400}
                height={200}
            />


        </div>
    );
};

export default DashboardPage;