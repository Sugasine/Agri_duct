import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        Welcome to our website! We are dedicated to providing quality products/services to our
        customers.
      </p>
      <p className="text-lg mt-4">
        Our mission is to deliver excellence through our commitment to customer satisfaction and
        innovation.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Our Team</h2>
        <p>
          Meet our amazing team of professionals who work tirelessly to ensure the best experience
          for our customers.
        </p>
        {/* You can include team member details, images, etc., here */}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Connect With Us</h2>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl mr-4" />
          <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-4" />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl mr-4" />
          {/* Add more social media icons as needed */}
        </div>
      </div>
      {/* Add more sections or details about your company */}
    </div>
  );
};

export default About;
