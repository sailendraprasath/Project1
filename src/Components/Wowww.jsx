import React from 'react'

const Wowww = () => {
  return (
    <div>
      {/* <!-- Carousel --> */}
<div id="demo" class="carousel slide max-w-[1640px] mx-auto p-4" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  


  
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src=" https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img3"  class="d-block w-full max-h-[500px] object-cover"/>
    </div>
    <div class="carousel-item">
      <img src="Project1/src/assets/img2.jpg " alt="img2" class="d-block w-full max-h-[500px] object-cover" />
    </div>
    <div class="carousel-item">
      <img src="Project1/src/assets/img1.jpg " alt="img1" class="d-block w-full max-h-[500px] object-cover" />
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>



    </div>
  )
}

export default Wowww