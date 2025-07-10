import React, { useState } from 'react';
import './C1.css';
import C1mail from './Image/C1mail (1).png';
import C1mail2 from './Image/C1mail (2).png';
import C1mail3 from './Image/C1mail (3).png';
import C12 from './Image/C12.png';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function C1() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        comment: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        console.log("Firestore DB Instance: ", db);
        console.log("Submitting form data:", formData);

    };

    const handleSubmit = async () => {
        const { name, phone, email, subject, comment } = formData;

        if (!name || !phone || !email || !subject || !comment) {
            alert("Please fill all fields.");
            return;
        }

        try {
            await addDoc(collection(db, 'contacts'), {
                ...formData,
                createdAt: Timestamp.now()
            });
            alert('Message sent successfully!');
            setFormData({ name: '', phone: '', email: '', subject: '', comment: '' });
        } catch (err) {
            console.error('Error adding document: ', err);
            alert('Error sending message.');
        }
    };

    return (
        <div className='containnnneritoom'>
            <div className="contaiiner">
                <div className="brannnch">
                    <h2>Get In Touch</h2>
                    <h3>Where To Find Us</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <div className='addflex'>
                        <div className="addresss">
                            <h2>Branch # 1</h2>
                            <p><img src={C1mail3} alt="" /> 1235, Air Mall, Big City</p>
                            <p><img src={C1mail2} alt="" /> Suraj123@gmail.com</p>
                            <p><img src={C1mail} alt="" /> +91 9510190352</p>
                        </div>
                        <div className="addresss">
                            <h2>Branch # 2</h2>
                            <p><img src={C1mail3} alt="" /> 1235, Air Mall, Big City</p>
                            <p><img src={C1mail2} alt="" /> Suraj123@gmail.com</p>
                            <p><img src={C1mail} alt="" /> +91 9510190352</p>
                        </div>
                    </div>
                </div>
                <div className="contactiimage">
                    <img src={C12} alt="" />
                </div>
            </div>

            <div className="Contactinfon">
                <div className="nordcon">
                    <h2>Contact Us</h2>
                    <h1>How Can We Help You?</h1>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>

                <div className="nordconn">
                    <div className="malsk">
                        <div id='gthght'>
                            <input type="text" placeholder='Your Name' name="name" value={formData.name} onChange={handleChange} /><br />
                            <input type="tel" placeholder='Your Phone' name="phone" value={formData.phone} onChange={handleChange} /><br />
                        </div>
                        <div id='gthght'>
                            <input type="email" placeholder='Your Email' name="email" value={formData.email} onChange={handleChange} /><br />
                            <input type="text" placeholder='Subject' name="subject" value={formData.subject} onChange={handleChange} /><br />
                        </div>
                    </div>
                    <textarea name="comment" placeholder='Your Comment' id="Comment" value={formData.comment} onChange={handleChange}></textarea><br />
                    <button id='sendbtn' onClick={handleSubmit}>
                        Send Message <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default C1;
