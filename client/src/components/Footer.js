import React from 'react';
import { FaInstagram, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary ">
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>TEGAR PONSEL</h2>
          <p className='text-white/70'>
          Berbelanja handphone secara online di toko kami adalah pengalaman yang nyaman, aman, dan menyenangkan. Kami menyediakan produk handphone terbaik dengan harga yang terjangkau dan berkomitmen untuk memberikan layanan terbaik serta kualitas produk yang terbaik. Kami juga siap membantu Anda dalam mencari produk handphone yang sesuai dengan kebutuhan Anda dan memberikan pelayanan yang cepat dan efisien dalam memproses pesanan Anda. Terima kasih atas kepercayaan Anda untuk berbelanja di toko handphone kami, kami berharap dapat terus memberikan pelayanan terbaik untuk Anda.
          </p>
        </div>
        {/* form */}
          <form className='w-full max-w-3xl mx-auto flex flex-col gap-5 my-14'>
            <input type="text" placeholder="Alamat Email" className="input" />
            <button className="btn btn-accent min-w-full">Bergabung</button>
          </form>
          {/* link */}
          <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
            
            <a href="https://www.google.com/maps?q=tegar+ponsel+tegal&rlz=1C1ONGR_enID1034ID1034&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiPy9CllPr-AhXN8zgGHbScBqgQ_AUoAXoECAEQAw" className="hover:text-white transition-all">
              Cabang Terdekat
            </a>
          </div>
          {/* socials */}
          <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
            <a href="https://www.instagram.com/tegarponseltegal/" className="hover:text-white transition-all">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/Tegarponseltegalofficial/" className="hover:text-white transition-all">
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