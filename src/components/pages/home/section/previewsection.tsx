import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Statistic() {
  const projects = [
    { id: 1, name: 'Project Name 1' },
    { id: 2, name: 'Project Name 2' },
    { id: 3, name: 'Project Name 3' },
    { id: 4, name: 'Project Name 4' },
    { id: 5, name: 'Project Name 5' },
    { id: 6, name: 'Project Name 6' },
  ];

  return (
    <>
      <section className="py-20">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">Statistic</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="flex flex-col items-center text-center">
                <img
                  src={`https://picsum.photos/seed/${project.id}/400/300.jpg`} 
                  alt={project.name} 
                  className="object-cover w-full h-48 mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol "See All" bisa Anda tambahkan di sini jika perlu */}
          {/* <div className="mt-10 text-center">
            <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
              See All Projects
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Statistic;