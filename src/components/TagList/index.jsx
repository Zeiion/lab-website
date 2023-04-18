import Tag from '../Tag';

const TagList = ({ list = [], size }) => {
  const style = ''; // TODO style map
  return (
    <ul className="flex -m-1 text-xs font-medium whitespace-nowrap overflow-auto">
      {list.map((text, index) => (
        <Tag text={text} index={index} key={index} style={style} size={size} />
      ))}
    </ul>
  );
};

export default TagList;
