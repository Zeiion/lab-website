import React, { useState, useEffect } from 'react';
import '~/css/spin.scss';

let timer;
/**
 *
 * @param {*} props
 * @param {boolean} props.visible
 * @param {any} props.children
 * @param {any} props.tips
 * @param {number} props.delay
 * @returns
 */
export default function Spin(props) {
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    if (props.delay) {
      // 防闪烁
      timer && clearTimeout(timer);
      if (props.visible) {
        timer = setTimeout(() => setVisible(true), props.delay);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(props.visible);
    }
  }, [props.visible]);
  return (
    <div className={visible ? 'hp-spin' : 'hp-spin hide'}>
      {props.children}
      <div className={props.children ? 'spin-content' : ''}>
        <div className="spin-img"></div>
      </div>
    </div>
  );
}
