const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[10%]">
      <div className="logo h-[75%]">
        <img className="h-full" src="/images/logo.png" alt="img_logo" />
      </div>
      <div className="mobile-menu text-2xl md:hidden"><i class="fa-solid fa-bars"></i></div>
      <ul className="flex gap-8 font-medium transition-all bg-white max-md:fixed max-md:top-[80px] max-md:flex-col max-md:rounded-b-xl max-md:py-4 max-md:px-8 max-md:gap-4 max-md:-right-[100%]">
        <li><a className="text-[#05468B] transition-all hover:text-[#007BFF]" href="#" id="home">Home</a></li>
        <li><a className="text-[#05468B] transition-all hover:text-[#007BFF]" href="#">About Us</a></li>
        <li><a className="text-[#05468B] transition-all hover:text-[#007BFF]" href="#">Services</a></li>
        <li><a className="text-[#05468B] transition-all hover:text-[#007BFF]" href="#">Portfolio</a></li>
        <li><a className="text-[#05468B] transition-all hover:text-[#007BFF]" href="#">Team</a></li>
        <li><a className="text-[#05468B] transition-all hover:text-[#007BFF]" href="#">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar