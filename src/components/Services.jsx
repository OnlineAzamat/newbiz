const Services = () => {
  return (
    <div className="bg-[#ECF5FF] box-shadow-service px-[10%] py-[6rem]" id='services'>
      <p className="text-center text-5xl">Services</p>
      <p className="text-center mt-12">We offer a wide range of services to meet the needs of our clients. Our experienced team is ready to help you succeed.</p>
      <div className="py-16 grid grid-cols-2 gap-x-16 gap-y-8">
        <div className="flex flex-col gap-4 py-8 pl-16 pr-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-md hover:opacity-75">
          <h2 className="text-xl font-bold">Web Design & Development</h2>
          <p>We create modern and user-friendly websites. Our web designers and developers will work with you to create a website that reflects your brand and appeals to your target audience.</p>
        </div>
        <div className="flex flex-col gap-4 py-8 pl-16 pr-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-md hover:opacity-75">
          <h2 className="text-xl font-bold">Digital Marketing</h2>
          <p>We help you increase your online presence and reach more customers. Our digital marketing services include SEO, PPC, social media marketing, and email marketing.</p>
        </div>
        <div className="flex flex-col gap-4 py-8 pl-16 pr-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-md hover:opacity-75">
          <h2 className="text-xl font-bold">Graphic Design</h2>
          <p>We help you visually express your brand. Our graphic designers can create logos, brochures, website graphics, and other marketing materials.</p>
        </div>
        <div className="flex flex-col gap-4 py-8 pl-16 pr-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-md hover:opacity-75">
          <h2 className="text-xl font-bold">Consulting</h2>
          <p>We help your business grow and succeed. Our consulting services include business planning, marketing strategy, and operational efficiency.</p>
        </div>
        <div className="flex flex-col gap-4 py-8 pl-16 pr-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-md hover:opacity-75">
          <h2 className="text-xl font-bold">Magni Dolores</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur ipsum est consectetur voluptate vero id praesentium iste! Laudantium, reprehenderit?</p>
        </div>
        <div className="flex flex-col gap-4 py-8 pl-16 pr-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-md hover:opacity-75">
          <h2 className="text-xl font-bold">Eiusmod Tempor</h2>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>
    </div>
  )
}

export default Services