import Tag from '../Tag';

const LinkTagList = ({ list, size }) => {
  const style = ''; // TODO style map
  return (
    <ul className='flex flex-wrap -m-1 text-xs font-medium'>
      {list.map(({ title, href }, index) => (
        <Tag
          text={title}
          index={index}
          key={index}
          style={style}
          size={size}
          clickHandler={() => window.open(href, '_blank')}
        />
      ))}
    </ul>
  );
};

export default LinkTagList;
