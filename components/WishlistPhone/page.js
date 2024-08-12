import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaFacebookMessenger, FaPhone, FaRegBookmark } from "react-icons/fa";
import call from '../../public/images/call.png'
const ContactCard = () => {
    return (
        <div className="flex flex-col ">
            <div className="flex items-center mb-2">
                <FaRegBookmark className="text-gray-500 w-5 h-5 mr-2" />
                <span className="text-gray-500 text-sm font-semibold">ADD TO WISHLIST</span>
            </div>
            <div className='mt-5'>
            <a href="tel:01781813939">
        <Image src={callIcon} width={300} height={20} alt='Call' />
      </a>
            </div>
            <div className='flex flex-row  items-center gap-3'>
                <div className="text-sm mt-2">Share To:</div>
                <div className="flex justify-center mt-4">
                    <Link href="https://www.facebook.com" className="text-blue-700 mx-2 hover:text-blue-900">
                        <FaFacebookF size={20} />
                    </Link>
                    <a href="https://wa.me/8809606999695" className="text-green-500 mx-2 hover:text-green-700">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="https://www.messenger.com" className="text-blue-500 mx-2 hover:text-blue-700">
                        <FaFacebookMessenger size={20} />
                    </a>
                </div>
            </div>
        </div>

    );
};

export default ContactCard;
