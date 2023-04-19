import React from 'react';
import {FaYoutube, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary ">
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>Botak Kontol Kerja Bagus Hati-Hati</h2>
          <p className='text-white/70'>
            Who is Nijika? For the blind, she is vision. For the hungry, she is
            the chef. For the thirsty, she is water. If Nijika thinks, I agree.
            If Nijika speaks, I'm listening. If Nijika has a million fans, I am
            one of them. If Nijika has ten fans, I am one of them. If Nijika has
            only one fan, that is me. If Nijika has no fans, I no longer exist.
            If the whole world is against Nijika, I am against the whole world.
            I will love Nijika until my very last breath.
          </p>
        </div>
        {/* form */}
          <form className='w-full max-w-3xl mx-auto flex flex-col gap-5 my-14'>
            <input type="text" placeholder="Alamat Email" className="input" />
            <button className="btn btn-accent min-w-full">Bergabung</button>
          </form>
          {/* link */}
          <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
            <a href="#" className="hover:text-white transition-all">
              Ketentuan Garansi
            </a>
            <a href="#" className="hover:text-white transition-all">
              Pengiriman
            </a>
            <a href="#" className="hover:text-white transition-all">
              Cabang Terdekat
            </a>
          </div>
          {/* socials */}
          <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
            <a href="#" className="hover:text-white transition-all">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <FaFacebook />
            </a>
          </div>
          {/* copyright */}
          <div className='py-10 border-t border-t-white/10'>
            <div className='container mx-auto'>
              <div className='text-center text-sm text-white/60'>
                Copyright &Copy; Tegar Ponsel Team 2. All rights reserved.
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;