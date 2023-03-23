import './index.scss';

const Timeline = ({
  list = [
    {
      title: 'Penta Consulting',
      type: 'Front End Developer',
      date: 'June 4',
      dateRange: 'June 2016 - Present',
      description:
        'Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Wordpress', 'Test'],
    },
    {
      title: 'Penta Consulting',
      type: 'Front End Developer',
      date: 'June 4',
      dateRange: 'June 2016 - Present',
      description:
        'Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Wordpress', 'Test'],
    },
    {
      title: 'Penta Consulting',
      type: 'Front End Developer',
      date: 'June 4',
      dateRange: 'June 2016 - Present',
      description:
        'Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Wordpress', 'Test'],
    },
    {
      title: 'Penta Consulting',
      type: 'Front End Developer',
      date: 'June 4',
      dateRange: 'June 2016 - Present',
      description:
        'Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Wordpress', 'Test'],
    },
  ],
}) => {
  return (
    <section id="cd-timeline" class="cd-container">
      {list.map(({ title, type, date, dateRange, description, tags }) => {
        return (
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture"></div>
            <div class="cd-timeline-content">
              <h2>{title}</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  {type}
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  {dateRange}
                </span>
              </div>
              <p>{description}</p>
              <span class="cd-date">{date}</span>
              <ul class="content-skills">
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Timeline;
