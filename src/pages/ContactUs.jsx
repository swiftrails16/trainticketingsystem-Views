import React from 'react';
import HeroHeader from '/src/components/HeroHeader/NavigationBar'; // Adjust the path as needed

const ContactUs = () => {
  return (
    <div>
        <nav>
        <HeroHeader /> {/* Include the HeroHeader component */}
        </nav>
        <div className="contact-us-container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <h1>Contact Us</h1>
        <div style={{
          marginBottom: '20px'
        }}>
          <h2>Company: Swiftrails</h2>
          <p>Email: info@swiftrails.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px'
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px'
            }}
          />
          <textarea
            placeholder="Your Message"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              minHeight: '150px'
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
