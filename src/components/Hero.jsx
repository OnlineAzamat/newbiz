const Hero = () => {
  return (
    <div className="head flex justify-between items-center mt-[80px] px-[10%] ">
      <div className="left_h">
        <h1 className="text-6xl font-bold text-white leading-[125%] max-md:text-5xl max-md:leading-[150%]">We provide <p className="underline text-[#74B5FC]">solutions</p> for your business!</h1>
        <div className="flex gap-8 mt-[10%] text-white">
          <button className="get-started font-medium px-[2.5rem] py-[0.8rem] bg-[#007BFF] rounded-3xl transition-all hover:bg-[#007bff4e]">Get Started</button>
          <button className="font-medium px-[2.5rem] py-[0.8rem] rounded-3xl transition-all hover:bg-[#007bff4e]" style={{ border: '1px solid white' }}>Our Services</button>
        </div>
      </div>

      <div className="max-md:hidden">
        <img src="/images/intro-img.svg" alt="intro-img" />
      </div>

    </div>
  )
}

export default Hero