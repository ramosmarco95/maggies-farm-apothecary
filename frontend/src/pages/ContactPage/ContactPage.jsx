import './ContactPage.css'
import contactImg from '../../assets/contact-page.jpg'
import { FaFacebook, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <section className="container-fluid mt-5 mb-5 rounded shadow">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img 
                        src={contactImg} 
                        alt="Contact us" 
                        className="img-fluid "
                    />
                </div>
                <div className="col-md-6 ">
                    <h1 className='caveat m-3 h1 fw-bold'>Contact Us</h1>
                    <p className='caveat m-3 h2'>
                        We are always delighted to hear from you. Please contact us by any of the following methods:
                    </p>
                    <ul className="list-unstyled ">
                        <li className="mb-2 ">
                            <a 
                                href="tel:2084796147" 
                                className='text-decoration-none'
                            >
                                <FaPhone size={24} className='m-3' />Phone: (208) 479-6147
                            </a>
                        </li>
                        <li className="mb-2">
                            <a 
                                href="mailto:maggiesfarmapothecary@gmail.com"
                                className='text-decoration-none'
                            >
                                <FaEnvelope size={24} className='m-3' />Email: maggiesfarmapothecary@gmail.com
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.facebook.com/profile.php?id=61564097426106" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-decoration-none"
                            >
                                <FaFacebook size={24} className='m-3' /> Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
