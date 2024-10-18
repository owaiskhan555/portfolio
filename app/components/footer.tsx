import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:owaisnoorj@gmail.com" className="text-blue-400">owaisnoorj@gmail.com</a></p>
            <p>Phone: <a href="tel:0349669861">+92349669861</a></p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100080648762387" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt="Facebook"  height={50} width={50}/>
              </a>
              <a href="https://www.instagram.com/this_is_.my_.username" target="_blank">
                <Image src="/instagram.png" alt="Instagram"  height={50} width={50}/>
              </a>
                            <a href="https://www.linkedin.com/in/owais-khan-a957a02b4" target="_blank">
                <Image src="/linkdin.png" alt="Instagram"  height={50} width={50}/>
              </a>
            </div>
          </div>
  
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/Services" className="hover:underline">Services</a></li>
              <li><a href="/Contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
            <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
  
          <div className="text-center md:text-left">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  