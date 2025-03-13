const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[10%]">
      <div className="logo h-[75%]">
        <img className="h-full" src="/images/logo.png" alt="img_logo" />
      </div>
      <ul className="nav-links flex gap-8 font-medium max-md:hidden">
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