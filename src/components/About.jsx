const About = () => {
  return (
    <div className="mt-16" id="about-us">
      <p className="text-center text-4xl">About Us</p>
      <p className="text-center mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore est <br />et in vero soluta nesciunt vitae impedit quas voluptatibus.</p>

      <div className="flex px-[10%] py-[6rem] gap-4 max-md:flex-wrap">
        <div className="flex flex-col gap-8 w-1/2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, asperiores temporibus neque nisi laboriosam cum voluptates, iure quasi alias praesentium harum nesciunt autem consequatur officiis quos placeat, deleniti accusamus voluptatem. Labore beatae quasi ut dolorum dignissimos voluptatibus quo reiciendis accusamus consequatur est sunt nihil blanditiis cum, sint illo, ex nisi?</p>
          <div className="flex gap-6">
            <div className="w-[80px] flex items-center justify-center">
              <img src="/images/shopping-bag.png" alt="shopping bag icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Eiusmod Tempor</h3>
              <p>Magna nulla ex proident culpa sunt ut consectetur deserunt est exercitation. Magna ut pariatur est ad fugiat anim. </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[80px] flex items-center justify-center">
              <img src="/images/image_galere.png" alt="photo icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Magni Dolores</h3>
              <p>Aliqua cupidatat cupidatat magna consequat minim consequat reprehenderit. Aliqua cupidatat cupidatat.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[80px] flex items-center justify-center">
              <img src="/images/bar-chart.png" alt="bar chart icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Dolor Sitema</h3>
              <p>Proident fugiat cillum sit duis ut aliqua Lorem do consequat. Adipisicing quis esse aute cillum eiusmod nisi amet.</p>
            </div>
          </div>
        </div>
        <div className="about_img w-1/2">
          <img src="/images/about-img.svg" alt="about image" id="about_img" />
        </div>
      </div>

      <div className="px-[10%] py-[6rem] flex gap-4">
        <div className="w-1/2">
          <img src="/images/about-extra-1.svg" alt="about image" />
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">
            Sit proident fugiat aute irure id nostrud dolore nostrud consectetur quis id et deserunt.
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, asperiores temporibus neque nisi laboriosam cum voluptates, iure quasi alias praesentium harum nesciunt autem consequatur officiis quos placeat, deleniti accusamus voluptatem. Labore beatae quasi ut dolorum dignissimos voluptatibus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, asperiores temporibus neque nisi laboriosam cum voluptates, iure quasi alias praesentium harum nesciunt autem consequatur officiis quos placeat, deleniti accusamus voluptatem. Labore beatae quasi ut dolorum dignissimos voluptatibus.</p>
        </div>
      </div>

      <div className="px-[10%] py-[6rem] flex gap-4">
        <div className="w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Adipisicing ex cupidatat ipsum reprehenderit anim magna. Adipisicing ex cupidatat ipsum reprehenderit anim magna.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, asperiores temporibus neque nisi laboriosam cum voluptates, iure quasi alias praesentium harum nesciunt autem consequatur officiis quos placeat, deleniti accusamus voluptatem. Labore beatae quasi ut dolorum dignissimos voluptatibus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, asperiores temporibus neque nisi laboriosam cum voluptates, iure quasi alias praesentium harum nesciunt autem consequatur officiis quos placeat, deleniti accusamus voluptatem. Labore beatae quasi ut dolorum dignissimos voluptatibus.</p>
        </div>
        <div className="w-1/2">
          <img src="/images/about-extra-2.svg" alt="about-image" />
        </div>
      </div>
    </div>
  )
}

export default About