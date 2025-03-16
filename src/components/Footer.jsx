const Footer = () => {
  return (
    <footer>
      <div className="flex px-[10%] py-4 gap-8">
        <div className="flex flex-col py-8 gap-6">
          <p className="text-5xl tracking-wide uppercase">Newbiz</p>
          <p className="text-sm/7 opacity-75">Id consequat quis exercitation Lorem duis culpa duis qui irure ad dolore ullamco. Ex Lorem est ea veniam proident eiusmod ea. Velit quis excepteur amet pariatur exercitation velit amet aliqua ullamco duis laboris laboris deserunt fugiat.</p>
        </div>
        <div className="flex flex-col gap-6 py-8 px-8">
          <p className="w-max font-bold uppercase">Useful links</p>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="w-max opacity-90 duration-200 hover:opacity-100"><a href="/">Home</a></li>
            <li className="w-max opacity-90 duration-200 hover:opacity-100"><a href="/">About Us</a></li>
            <li className="w-max opacity-90 duration-200 hover:opacity-100"><a href="/">Services</a></li>
            <li className="w-max opacity-90 duration-200 hover:opacity-100"><a href="/">Terms of service</a></li>
            <li className="w-max opacity-90 duration-200 hover:opacity-100"><a href="/">Privacy policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 py-8 px-8">
          <p className="w-max font-bold uppercase">Contact Us</p>
          <p className="w-max flex flex-col text-sm opacity-90 gap-2">
            <span>A108 Adam Street</span>
            <span>New York, NY 535022</span>
            <span>United States</span>
            <span><b>Phone:</b> +1 5589 55488 55</span>
            <span><b>Email:</b> info@example.com</span>
          </p>
          <div className="flex gap-2">
            <a href="https://x.com" className="flex justify-center items-center bg-[#007BFF] w-[40px] h-[40px] rounded-full transition-all cursor-pointer hover:bg-[#076dda]"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://facebook.com" className="flex justify-center items-center bg-[#007BFF] w-[40px] h-[40px] rounded-full transition-all cursor-pointer hover:bg-[#076dda]"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" className="flex justify-center items-center bg-[#007BFF] w-[40px] h-[40px] rounded-full transition-all cursor-pointer hover:bg-[#076dda]"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" className="flex justify-center items-center bg-[#007BFF] w-[40px] h-[40px] rounded-full transition-all cursor-pointer hover:bg-[#076dda]"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-8">
          <p className="w-max font-bold uppercase">Our Newsletter</p>
          <p className="text-sm opacity-90">
            Adipisicing commodo Lorem pariatur anim. Deserunt commodo culpa tempor laborum incididunt qui esse dolor. Consectetur nostrud fugiat laborum consequat est elit eu proident ea incididunt ut commodo aliquip ipsum. Mollit et irure deserunt id. Culpa laboris anim.
          </p>
          <div className="flex ">
            <input type="text" className="text-black px-2" />
            <button className="py-2 px-4 bg-[#007BFF] transition-all hover:bg-[#076dda]">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bg-[#00428A] p-8 relative">
        <p className="text-center">
          &#169; Copyright <b>Data Soft Academy</b>. All Rights Reserved <br /> Designed by <a href="https://yakubbaevdev.vercel.app" className="text_dec">Yakubbaev</a>
        </p>

        <a href="#" className="absolute right-10 bottom-10 flex justify-center items-center w-[40px] h-[40px] rounded-full text-white bg-[#007BFF] transition-all hover:bg-[#076dda]"><i className="fa-sharp fa-solid fa-chevron-up"></i></a>
      </div>
    </footer>
  )
}

export default Footer