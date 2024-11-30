import { Outlet } from 'react-router';
import Blogs from './Blogs';

function AnotherDev() {
    return (
        <div>
            {/* <Blogs></Blogs> */}
            <Outlet />
        </div>
    );
}

export default AnotherDev;
