import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import './contacts.css'; // Import your custom CSS file

const Contacts = () => {
  const socialMediaLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { platform: 'Facebook', url: 'https://www.facebook.com/' },
    { platform: 'Twitter', url: 'https://twitter.com/' },
    { platform: 'Instagram', url: 'https://www.instagram.com/' },
  ];

  return (
    <>
      <table className="table table-bordered">
        <tbody>
          {socialMediaLinks.map((link, index) => (
            <tr key={index}>
              <td className="d-flex align-items-center">
                <span className="me-3 contacts-text p-2">
                  {link.platform === 'LinkedIn' && <Linkedin size={24} color="#49ceff" />}
                  {link.platform === 'Facebook' && <Facebook size={24} color="#49ceff" />}
                  {link.platform === 'Twitter' && <Twitter size={24} color="#49ceff" />}
                  {link.platform === 'Instagram' && <Instagram size={24} color="#49ceff" />}
                </span>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="contacts-link">
                  {link.platform}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
