import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container py-4">
                <div className="row text-white text-center text-md-start">

                    {/* Logo + Mission */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5>Maggie's Store</h5>
                        <p>Our mission is to make herbalism accessible to everyone by educating and empowering individuals to incorporate herbs into their daily lives and cultivate a healthy, balanced lifestyle.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/about" className="text-white">About</Link></li>
                            <li><Link to="/Products" className="text-white">Products</Link></li>
                            <li><Link to="/contact" className="text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Service Hours */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5>Service Hours</h5>
                        <p>Mon - Fri: 9am - 6pm</p>
                        <p>Sat: 10am - 4pm</p>
                        <p>Sun: Closed</p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5>Contact Us</h5>
                        <p>Email: maggiesfarmapothecary@gmail.com</p>
                        <p>Phone: (208) 479-6147</p>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
                            <a href="https://www.facebook.com/profile.php?id=61564097426106" target='_blank' className="text-white"><FaFacebook /></a>
                            <a href="#" className="text-white"><FaInstagram /></a>
                            <a href="#" className="text-white"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>© 2025 Maggie's Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
