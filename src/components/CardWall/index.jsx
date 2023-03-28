import './index.scss';

const CardWall = ({ list = [], vertical = false }) => {
  const wrapperClass = vertical ? 'wrapper wrapper--vertical' : 'wrapper';
  const marqueClass = vertical ? 'marquee w-128 marquee--vertical' : 'marquee';
  const reverseClass = (reverse) => (reverse ? 'marquee--reverse' : '');
  return (
    <div className="card-wall">
      <article className={wrapperClass}>
        {list.map(({ children, reverse = false }, index) => {
          return (
            <div
              className={reverseClass(reverse) + ' ' + marqueClass}
              key={index}
            >
              <div className="marquee__group">{children}</div>
              <div aria-hidden="true" className="marquee__group">
                {children}
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default CardWall;
