import "./index.scss";

const ProjectCard = ({
  title,
  description,
  imgSrc,
  href,
  readmore = "进入系统",
}) => {
  return (
    <div className="pro-card">
      <div className="card">
        <div className="content">
          <h3 className="title">{title}</h3>
          <p className="copy">{description}</p>
          <button className="btn">
            <a href={href} target="_blank">
              <span>{readmore}</span>
            </a>
          </button>
        </div>
        <img className="object-cover bg" src={imgSrc} alt="图片" />
      </div>
    </div>
    // <a
    //   className="relative flex w-full h-full gap-2 bg-gray-800"
    //   data-aos="fade-up"
    //   data-aos-delay="200"
    //   href={href}
    // >
    //   <figure className="relative w-full h-full overflow-hidden transition duration-700 ease-out transform">
    //     <img
    //       className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
    //       src={imgSrc}
    //       width="540"
    //       height="303"
    //       alt="-"
    //     />
    //   </figure>
    //   <div className="flex flex-col justify-between p-6 w-96">
    //     <p className="mt-2 text-lg text-justify text-gray-500 dark:text-gray-400">
    //       {description}
    //     </p>
    //   </div>
    //   <div className="box-border absolute w-3/4 p-2 mx-16 rounded-full bottom-4 bg-slate-100/70">
    //     <h3 className="text-3xl font-bold leading-snug tracking-tight text-slate-800">
    //       {title}
    //     </h3>
    //   </div>
    // </a>
  );
};

export default ProjectCard;
