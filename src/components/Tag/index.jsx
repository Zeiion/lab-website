const Tag = ({
  text,
  index = null,
  style = '',
  size = 'small',
  clickHandler = () => {},
}) => {
  const tagClassList = [
    'bg-purple-600 hover:bg-purple-700',
    'bg-blue-500 hover:bg-blue-600',
    'bg-violet-700 hover:bg-violet-800',
    'bg-blue-600 hover:bg-blue-700',
    'bg-cyan-600 hover:bg-cyan-700',
    'bg-indigo-700 hover:bg-indigo-800',
    'bg-teal-600 hover:bg-teal-700',
    'bg-green-800 hover:bg-green-900',
    'bg-lime-600 hover:bg-lime-700',
    'bg-red-600 hover:bg-red-700',
    'bg-orange-600 hover:bg-orange-700',
  ];
  const computedStyle = style
    ? style
    : // : tagClassList[Math.floor(Math.random() * tagClassList.length)];
    index == null
    ? tagClassList[Math.floor(Math.random() * tagClassList.length)]
    : tagClassList[Math.floor(index % tagClassList.length)];
  const sizeStyle = {
    small: 'px-3 py-1 text-xs',
    medium: 'px-3 py-1 text-base',
    large: 'px-4 py-1 text-lg',
  };

  return (
    <li className="m-1 cursor-pointer">
      <a
        onClick={clickHandler}
        className={
          'inline-flex text-center text-gray-100 rounded-full transition duration-150 ease-in-out ' +
          computedStyle +
          ' ' +
          (sizeStyle[size] || sizeStyle['small'])
        }
      >
        {text}
      </a>
    </li>
  );
};

export default Tag;
