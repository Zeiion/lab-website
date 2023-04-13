import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', function (e) {
      const X = e.clientX;
      const Y = e.clientY;

      cursor.style.left = X + 'px';
      cursor.style.top = Y + 'px';
    });
  });
  return <div className="cursor"></div>;
};

export default Cursor;
