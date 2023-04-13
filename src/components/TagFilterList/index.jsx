import Tag from '../Tag';
import { useState } from 'react';

const MAX_TAG_COUNT = 8;

const TagList = ({ list, size, callback }) => {
  return (
    <ul className="flex flex-wrap -m-1 text-xs font-medium">
      {list
        .map(({ text, active = false }, index) => (
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
        ))
        .slice(0, MAX_TAG_COUNT)}
    </ul>
  );
};

export default TagList;
