
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/project-1.png";
import project3 from "../../assets/images/project-1.png";
import project4 from "../../assets/images/project-1.png";
import project5 from "../../assets/images/project-1.png";
// import project_person from "../../assets/images/project-1.png";
import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

const Project = () => {
    const projects = [
        {
            img: project1,
            name: "Movie App",
            github: "https://github.com/Sridhar-C-25",
            live: "https://myreactflix.netlify.app",
        },
        {
            img: project2,
            name: "Job search Web App",
            github: "https://github.com/Sridhar-C-25/jobsearchapp",
            live: "https://myjobsearch.netlify.app",
        },
        {
            img: project3,
            name: "Highking",
            github: "https://github.com/Sridhar-C-25/highking",
            live: "https://highking01.netlify.app",
        },
        {
            img: project4,
            name: "React Nav",
            github:
                "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
            live: "https://reacttailwindnavbar.netlify.app",
        },
        {
            img: project5,
            name: "Vue Country",
            github: "https://github.com/Sridhar-C-25",
            live: "https://vuecountry05.netlify.app",
        },
    ];
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className=" w-full">
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    // modules={[Pagination, Autoplay]}
                    >
                        {projects?.map((project, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                    <img src={project.img} alt="" className="rounded-lg" />
                                    <h3 className="text-xl my-4">{project.name}</h3>
                                    <div className="flex gap-3">
                                        <a  href={project.github}
                                            // target="_blank"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={project.live}  // <-- Corrected line
                                            // target="_blank"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                        >
                                            Live Demo
                                        </a>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:block hidden">
                    <img src="https://i.ibb.co/8K4x4ky/20230409234326-IMG-71-1.png" alt="" className="h-[310px] w-[300px] object-cover " />
                </div>
            </div>
        </section>
    );
};

export default Project;
