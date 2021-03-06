import React from 'react';
import {
  Copyright,
  EmailOutlined,
  Facebook,
  Instagram, LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter
} from '@material-ui/icons';

const Footer = () => {

  const socialMedialStyles = 'm-3 rounded-full cursor-pointer p-2 text-white'

  return (
    <div className='flex items-center justify-center p-2 mobile:flex-col mobile:items-center'>
      <div className='flex-1 fle flex-col flex-wrap p-2'>
        <h1 className='text-[25px] mobile:text-center'>
          Shop Chop
        </h1>
        <p className='mobile:text-justify mobile:mt-2 mobile:hidden'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam at hic in, iure labore minus natus omnis optio quas reiciendis, veniam voluptates voluptatum! Aliquid amet aperiam saepe. Error, molestias.
        </p>
        <div className='flex items-center justify-start mt-3 self-start mobile:items-start'>
          <div className={socialMedialStyles + ' bg-blue-700'}>
            <Facebook />
          </div>
          <div className={socialMedialStyles + ' bg-orange-500'}>
            <Instagram />
          </div>
          <div className={socialMedialStyles + ' bg-sky-400'}>
            <Twitter />
          </div>
          <div className={socialMedialStyles + ' bg-red-600'}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className='flex-[0.6] flex flex-col p-2'>
        <div className='flex m-3'>
          <LocationOnOutlined />
          <p className='pl-3'>Moscow</p>
        </div>
        <div className='flex m-3'>
          <LocalPhoneOutlined />
          <p className='pl-3'>+1 (234) 567 89-10</p>
        </div>
        <div className='flex m-3'>
          <EmailOutlined />
          <p className='pl-3'>email@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col flex-1 mobile:hidden'>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis deserunt doloribus error, eum facilis, iste maiores minima minus neque omnis quae quisquam quos ratione rerum vel voluptatum!</div>
        <div className='flex mt-5'>
          <Copyright />
          <div>Copyright 2022</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;