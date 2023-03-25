const Tag = ({ text, index = null, style = '', size = 'small' }) => {
  const tagClassList = [
    'bg-purple-600 hover:bg-purple-700',
    'bg-blue-500 hover:bg-blue-600',
  ];
  const computedStyle = style
    ? style
    : index == null
    ? tagClassList[Math.floor(Math.random() * tagClassList.length)]
    : tagClassList[Math.floor(index % tagClassList.length)];
  const sizeStyle = {
    small: 'px-3 py-1 text-xs',
    medium: 'px-3 py-1 text-base',
    large: 'px-4 py-1 text-lg',
  };

  return (
    <li className="m-1">
      <a
        className={
          'inline-flex text-center text-gray-100 rounded-full transition duration-150 ease-in-out ' +
          computedStyle +
          ' ' +
          (sizeStyle[size] || sizeStyle['small'])
        }
        href="#0"
      >
        {text}
      </a>
    </li>
  );
};

export default Tag;
