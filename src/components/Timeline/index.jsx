import './index.scss';

const Timeline = ({ list = [] }) => {
  return (
    <section className="cd-container">
      {list.map(
        ({ title, type, date, dateRange, description, tags }, index) => {
          return (
            <div
              className="cd-timeline-block"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              key={index}
            >
              <div className="cd-timeline-img cd-picture"></div>
              <div className="cd-timeline-content">
                <h2>{title}</h2>
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                    {type}
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    {dateRange}
                  </span>
                </div>
                <p>{description}</p>
                <span className="cd-date">{date}</span>
                <ul className="content-skills">
                  {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
};

export default Timeline;
