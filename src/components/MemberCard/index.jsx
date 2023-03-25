import TagList from '../TagList';

const MemberCard = ({ name, imgSrc, description, tags, works }) => {
  return (
    <div className="flex justify-between gap-2 md:gap-8">
      <img src={imgSrc} className="w-40 h-40 rounded-full" />
      <div className="flex flex-col flex-1 md:gap-2 lg:gap-4">
        <TagList list={tags} />
        <h4 className="h4">{name}</h4>
        <p className="overflow-auto text-gray-400 max-h-32">{description}</p>
        <h5 className="text-lg font-bold">代表作品</h5>
        <p className="overflow-auto max-h-12">
          {works.map(({ title, href }, index) => (
            <>
              <a key={index} className="h5" herf={href}>
                {title}
              </a>
              {index !== works.length - 1 && <span>,</span>}
            </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
