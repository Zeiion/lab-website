import Tag from '../Tag';
import { useState } from 'react';

const TagList = ({ list, size, callback }) => {
  return (
    <ul className="flex flex-wrap -m-1 text-xs font-medium">
      {list.map(({ text, active = false }, index) => (
        <Tag
          key={index}
          text={text}
          clickHandler={() => {
            callback(text);
          }}
          index={index}
          style={active ? '' : 'bg-gray-600'}
          size={size}
        />
      ))}
    </ul>
  );
};

export default TagList;
