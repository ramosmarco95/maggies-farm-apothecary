import Navbar from '../Navbar/Navbar.jsx';
import './Header.css';

export default function Header() {
    return (
        <header className='m-3 rounded-1 p-3 '>
        <h1 className='text-center'>Welcome to Our Store</h1>
        <Navbar />
        </header>
    );
    }