
import { Suspense } from 'react';
import MenuCard3 from '../components/MenuCard3';



const MenuPage3 = () => {
    return (
        <div>
            
            <Suspense fallback={ <div> Loading foods.....</div>} >

                    <MenuCard3 />

            </Suspense>

        </div>
    );
};

export default MenuPage3;