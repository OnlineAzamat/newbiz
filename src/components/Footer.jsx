const Footer = () => {
  return (
    <footer>
      <div className="flex px-[10%] py-8 mt-8" >
        <div>
          <p className="text-6xl font-thin uppercase">Newbiz</p>
          <p>Id consequat quis exercitation Lorem duis culpa duis qui irure ad dolore ullamco. Ex Lorem est ea veniam proident eiusmod ea. Velit quis excepteur amet pariatur exercitation velit amet aliqua ullamco duis laboris laboris deserunt fugiat.</p>
        </div>
        <div>
          <p className="uppercase">Useful links</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="uppercase">Contact Us</p>
          <p>
            A108 Adam Street <br />
            New York, NY 535022 <br />
            United States <br />
            <b>Phone:</b> +1 5589 55488 55 <br />
            <b>Email:</b> info@example.com
          </p>
          <div className="why">
            <i className="fa-brands fa-twitter border"></i>
            <i className="fa-brands fa-facebook-f border"></i>
            <i className="fa-brands fa-instagram border"></i>
            <i className="fa-brands fa-google-plus-g border"></i>
            <i className="fa-brands fa-linkedin-in border"></i>
          </div>
        </div>
        <div>
          <p className="uppercase">Our Newsletter</p>
          <p>
            Adipisicing commodo Lorem pariatur anim. Deserunt commodo culpa tempor laborum incididunt qui esse dolor. Consectetur nostrud fugiat laborum consequat est elit eu proident ea incididunt ut commodo aliquip ipsum. Mollit et irure deserunt id. Culpa laboris anim.
          </p>
          <br />
          <input type="text" className="text" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="bg-[#00428A] p-16">
        <p className="text-center">
          &#169;Copyright <b>NewBiz</b>. All Rights Reserved <br /> Designed by <a href="#" className="text_dec">BootstrapMade</a>
        </p>

        <a href="#" className="up"><i className="fa-sharp fa-solid fa-chevron-up"></i></a>
      </div>
      <div className="clr"></div>
    </footer>
  )
}

export default Footer