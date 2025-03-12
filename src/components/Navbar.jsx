const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="img_logo" />
      </div>
      <div className="navbar">
        <span><a href="#" id="home">Home</a></span>
        <span><a href="#">About Us</a></span>
        <span><a href="#">Services</a></span>
        <span><a href="#">Portfolio</a></span>
        <span><a href="#">Team</a></span>
        <span><a href="#">Drop Down <i className="fa-solid fa-chevron-down"></i></a></span>
        <span><a href="#">Contact Us</a></span>
      </div> 
    </nav>
  )
}

export default Navbar