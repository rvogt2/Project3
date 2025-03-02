import {Outlet, Link} from 'react-router-dom';
import '../App.css';
const Layout =()=> {
    return (
        <>
        <nav>
            <ul>
                <li class="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className='navLink'>
                    <Link to="Contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;