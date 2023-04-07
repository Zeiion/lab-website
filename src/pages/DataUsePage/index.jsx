import React, { useState } from 'react';

import './style.scss';

function Puzzle() {
  const [puzzles, setPuzzles] = useState(
    document.getElementsByClassName('movil'),
  );
  const widthList = [134, 192, 134, 163, 134, 163, 134, 192, 134];
  const heightList = [163, 134, 163, 134, 192, 134, 163, 134, 163];

  const initialize = () => {
    for (let i = 0; i < puzzles.length; i++) {
      puzzles[i].setAttribute('width', widthList[i]);
      puzzles[i].setAttribute('height', heightList[i]);
      puzzles[i].setAttribute('x', Math.floor(Math.random() * 10 + 1));
      puzzles[i].setAttribute('y', Math.floor(Math.random() * 409 + 1));
    }
  };

  const [elementSelect, setElementSelect] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentPosX, setCurrentPosX] = useState(0);
  const [currentPosY, setCurrentPosY] = useState(0);

  const selectElement = (evt) => {
    const newElementSelect = evt.target;
    // const newElementSelect = reorder(evt);
    setCurrentX(evt.clientX);
    setCurrentY(evt.clientY);
    setCurrentPosX(parseFloat(newElementSelect.getAttribute('x')));
    setCurrentPosY(parseFloat(newElementSelect.getAttribute('y')));
    setElementSelect(newElementSelect);
  };

  const moveElement = (evt) => {
    if (elementSelect === null) return;
    const dx = evt.clientX - currentX;
    const dy = evt.clientY - currentY;
    const newCurrentPosx = currentPosX + dx;
    const newCurrentPosy = currentPosY + dy;
    elementSelect.setAttribute('x', newCurrentPosx);
    elementSelect.setAttribute('y', newCurrentPosy);
    setCurrentPosX(newCurrentPosx);
    setCurrentPosY(newCurrentPosy);
    setCurrentX(evt.clientX);
    setCurrentY(evt.clientY);
    absorb();
  };

  const deSelectElement = () => {
    console.log('!!trying deselect');
    if (elementSelect) {
      elementSelect.removeAttribute('onMouseMove');
      elementSelect.removeAttribute('onMouseOut');
      elementSelect.removeAttribute('onMouseUp');
      setElementSelect(null);
    }
  };

  const reorder = (evt) => {
    const container = document.getElementById('container');
    console.log('evt reorder', evt, container);
    const piece = evt.target.parentNode;
    const clone = piece.cloneNode(true);
    const id = piece.getAttribute('id');
    container.removeChild(document.getElementById(id));
    container.appendChild(clone);
    return container.lastChild.firstChild;
  };

  const origX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
  const origY = [100, 100, 100, 233, 204, 233, 337, 366, 337];

  const absorbOffset = 15;
  const absorb = () => {
    for (let i = 0; i < puzzles.length; i++) {
      if (
        Math.abs(currentPosX - origX[i]) < absorbOffset &&
        Math.abs(currentPosY - origY[i]) < absorbOffset
      ) {
        elementSelect.setAttribute('x', origX[i]);
        elementSelect.setAttribute('y', origY[i]);
      }
    }
  };

  return (
    <div onLoad={initialize} className='container m-c'>
      <svg width='600' height='600' id='container'>
        <defs>
          <pattern
            id='a'
            patternUnits='userSpaceOnUse'
            width='160'
            height='160'
            patternTransform='scale(2) rotate(90)'
          >
            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='hsla(225,59.3%,10.6%,1)'
            />
            <path
              d='M121.5 39.5V9.169c0-2.827 1.724-4.707 3.473-5.602l.707-.362c2.086-1.068 4.702-.631 6.359 1.026l1.985 1.985c1.349 1.349 3.235 2.018 5.14 2.128 12.336 0 12.336-18.505 0-18.505M40.75 39.499V9.17c0-2.827-1.724-4.707-3.473-5.602l-.707-.362c-2.086-1.068-4.702-.631-6.359 1.026l-1.985 1.985c-1.349 1.349-3.236 2.018-5.14 2.128-12.336 0-12.336-18.505 0-18.505m146.575 111.248c0-12.337-18.505-12.337-18.505 0 .11 1.904.78 3.79 2.128 5.139l1.985 1.985c1.657 1.657 2.094 4.273 1.026 6.36l-.362.706c-.895 1.75-2.775 3.474-5.602 3.474l-30.33-.001m49.66-63.086c0 12.336-18.505 12.336-18.505 0 .11-1.904.78-3.791 2.128-5.14l1.985-1.985c1.657-1.657 2.094-4.273 1.026-6.359l-.362-.707c-.895-1.749-2.775-3.474-5.602-3.473h-30.33m19.162 130.344c12.337 0 12.337-18.505 0-18.505-1.631 0-3.99.98-5.139 2.128l-1.985 1.985c-1.656 1.656-4.274 2.094-6.36 1.027l-.706-.362c-2.086-1.069-3.474-3.258-3.474-5.602v-34.302l.001-26.228c0-2.344-1.427-4.458-3.473-5.602l-.707-.361a5.83 5.83 0 00-6.36 1.026l-1.984 1.985c-1.144 1.152-3.508 2.128-5.14 2.128-12.336 0-12.336-18.505 0-18.505 1.904.11 3.715.86 5.14 2.128l1.985 1.985a5.812 5.812 0 006.359 1.026l.707-.362c1.287-1.485 3.473-2.775 3.473-5.602v-30.33M23.086 168.343c-12.336 0-12.336-18.505 0-18.505 1.632 0 3.992.98 5.14 2.128l1.985 1.985c1.656 1.656 4.274 2.094 6.359 1.027l.707-.362c2.086-1.069 3.474-3.258 3.474-5.602l-.001-34.302V88.485c0-2.344 1.387-4.533 3.473-5.602l.707-.361c2.085-1.068 4.703-.63 6.359 1.026l1.985 1.985c1.148 1.148 3.508 2.128 5.14 2.128 12.336 0 12.336-18.505 0-18.505-1.905.11-3.791.78-5.14 2.128l-1.985 1.985c-1.657 1.657-4.273 2.094-6.36 1.026l-.706-.362c-1.75-.895-3.474-2.775-3.474-5.602v-30.33m80.75 80.749H91.17c-2.827 0-4.707 1.724-5.602 3.473l-.362.707c-1.068 2.086-.631 4.702 1.026 6.359l1.985 1.985c1.349 1.349 2.018 3.236 2.128 5.14 0 12.336-18.505 12.336-18.505 0 0-1.632.98-3.992 2.128-5.14l1.985-1.985c1.656-1.656 2.094-4.274 1.026-6.359l-.361-.707c-1.069-2.086-3.258-3.474-5.602-3.473h-60.53c-2.344 0-4.533-1.387-5.602-3.473l-.362-.707c-1.067-2.085-.63-4.703 1.027-6.359l1.985-1.985c1.148-1.148 2.128-3.508 2.128-5.14 0-12.336-18.505-12.336-18.505 0M121.5 38H91.169c-2.827 0-4.707-1.724-5.602-3.473l-.362-.707c-1.068-2.086-.631-4.702 1.026-6.359l1.985-1.985c1.349-1.349 2.018-3.235 2.128-5.14C90.344 8 71.84 8 71.84 20.337c0 1.632.977 3.994 2.128 5.14.663.66 1.343 1.305 1.985 1.985 1.608 1.703 2.003 4.23 1.026 6.36-.11.24-.233.474-.361.706C75.48 36.577 73.359 38 71.015 38H36.712L10.485 38c-2.344 0-4.533 1.387-5.602 3.473-.12.236-.24.471-.362.707-1.067 2.085-.63 4.703 1.027 6.36l1.985 1.984c1.148 1.148 2.128 3.508 2.128 5.14C9.66 68-8.844 68-8.844 55.664'
              strokeWidth='3'
              stroke='hsla(213,29.7%,32.4%,1)'
              fill='none'
            />
          </pattern>
        </defs>
        {/* <rect
          width='50%'
          height='50%'
          transform='translate(0,0)'
          fill='url(#a)'
          className='movil'
          onMouseDown={selectElement}
          onMouseMove={moveElement}
          onMouseUp={deSelectElement}
          onMouseOut={deSelectElement}
        /> */}
        <g id='bg'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master//pikachu.png'
            width='400'
            height='400'
            x='200'
            y='100'
          />
        </g>
        <g className='piece' id='0'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/1.png'
            className='movil'
            onMouseDown={selectElement}
            onMouseMove={moveElement}
            onMouseUp={deSelectElement}
            onMouseOut={deSelectElement}
          />
        </g>
        <rect
          width='800%'
          height='800%'
          transform='translate(0,0)'
          fill='url(#a)'
        />
        <rect
          className='movil'
          onMouseDown={selectElement}
          onMouseMove={moveElement}
          onMouseUp={deSelectElement}
          onMouseOut={deSelectElement}
          fill='black'
        >
          <path
            d='M121.5 39.5V9.169c0-2.827 1.724-4.707 3.473-5.602l.707-.362c2.086-1.068 4.702-.631 6.359 1.026l1.985 1.985c1.349 1.349 3.235 2.018 5.14 2.128 12.336 0 12.336-18.505 0-18.505M40.75 39.499V9.17c0-2.827-1.724-4.707-3.473-5.602l-.707-.362c-2.086-1.068-4.702-.631-6.359 1.026l-1.985 1.985c-1.349 1.349-3.236 2.018-5.14 2.128-12.336 0-12.336-18.505 0-18.505m146.575 111.248c0-12.337-18.505-12.337-18.505 0 .11 1.904.78 3.79 2.128 5.139l1.985 1.985c1.657 1.657 2.094 4.273 1.026 6.36l-.362.706c-.895 1.75-2.775 3.474-5.602 3.474l-30.33-.001m49.66-63.086c0 12.336-18.505 12.336-18.505 0 .11-1.904.78-3.791 2.128-5.14l1.985-1.985c1.657-1.657 2.094-4.273 1.026-6.359l-.362-.707c-.895-1.749-2.775-3.474-5.602-3.473h-30.33m19.162 130.344c12.337 0 12.337-18.505 0-18.505-1.631 0-3.99.98-5.139 2.128l-1.985 1.985c-1.656 1.656-4.274 2.094-6.36 1.027l-.706-.362c-2.086-1.069-3.474-3.258-3.474-5.602v-34.302l.001-26.228c0-2.344-1.427-4.458-3.473-5.602l-.707-.361a5.83 5.83 0 00-6.36 1.026l-1.984 1.985c-1.144 1.152-3.508 2.128-5.14 2.128-12.336 0-12.336-18.505 0-18.505 1.904.11 3.715.86 5.14 2.128l1.985 1.985a5.812 5.812 0 006.359 1.026l.707-.362c1.287-1.485 3.473-2.775 3.473-5.602v-30.33M23.086 168.343c-12.336 0-12.336-18.505 0-18.505 1.632 0 3.992.98 5.14 2.128l1.985 1.985c1.656 1.656 4.274 2.094 6.359 1.027l.707-.362c2.086-1.069 3.474-3.258 3.474-5.602l-.001-34.302V88.485c0-2.344 1.387-4.533 3.473-5.602l.707-.361c2.085-1.068 4.703-.63 6.359 1.026l1.985 1.985c1.148 1.148 3.508 2.128 5.14 2.128 12.336 0 12.336-18.505 0-18.505-1.905.11-3.791.78-5.14 2.128l-1.985 1.985c-1.657 1.657-4.273 2.094-6.36 1.026l-.706-.362c-1.75-.895-3.474-2.775-3.474-5.602v-30.33m80.75 80.749H91.17c-2.827 0-4.707 1.724-5.602 3.473l-.362.707c-1.068 2.086-.631 4.702 1.026 6.359l1.985 1.985c1.349 1.349 2.018 3.236 2.128 5.14 0 12.336-18.505 12.336-18.505 0 0-1.632.98-3.992 2.128-5.14l1.985-1.985c1.656-1.656 2.094-4.274 1.026-6.359l-.361-.707c-1.069-2.086-3.258-3.474-5.602-3.473h-60.53c-2.344 0-4.533-1.387-5.602-3.473l-.362-.707c-1.067-2.085-.63-4.703 1.027-6.359l1.985-1.985c1.148-1.148 2.128-3.508 2.128-5.14 0-12.336-18.505-12.336-18.505 0M121.5 38H91.169c-2.827 0-4.707-1.724-5.602-3.473l-.362-.707c-1.068-2.086-.631-4.702 1.026-6.359l1.985-1.985c1.349-1.349 2.018-3.235 2.128-5.14C90.344 8 71.84 8 71.84 20.337c0 1.632.977 3.994 2.128 5.14.663.66 1.343 1.305 1.985 1.985 1.608 1.703 2.003 4.23 1.026 6.36-.11.24-.233.474-.361.706C75.48 36.577 73.359 38 71.015 38H36.712L10.485 38c-2.344 0-4.533 1.387-5.602 3.473-.12.236-.24.471-.362.707-1.067 2.085-.63 4.703 1.027 6.36l1.985 1.984c1.148 1.148 2.128 3.508 2.128 5.14C9.66 68-8.844 68-8.844 55.664'
            strokeWidth='3'
            stroke='hsla(213,29.7%,32.4%,1)'
            fill='none'
          />
        </rect>
        <g className='piece' id='0'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/1.png'
            className='movil'
            onMouseDown={selectElement}
            onMouseMove={moveElement}
            onMouseUp={deSelectElement}
            onMouseOut={deSelectElement}
          />
        </g>{' '}
        <g className='piece' id='0'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/1.png'
            className='movil'
            onMouseDown={selectElement}
            onMouseMove={moveElement}
            onMouseUp={deSelectElement}
            onMouseOut={deSelectElement}
          />
        </g>
        {/* <g className='piece' id='1'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/2.png'
            className='movil'
          />
        </g>
        <g className='piece' id='2'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/3.png'
            className='movil'
          />
        </g>
        <g className='piece' id='3'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/4.png'
            className='movil'
          />
        </g>
        <g className='piece' id='4'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/5.png'
            className='movil'
          />
        </g>
        <g className='piece' id='5'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/6.png'
            className='movil'
          />
        </g>
        <g className='piece' id='6'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/7.png'
            className='movil'
          />
        </g>
        <g className='piece' id='7'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/8.png'
            className='movil'
          />
        </g>
        <g className='piece' id='8'>
          <image
            xlinkHref='https://raw.githubusercontent.com/NestorPlasencia/pikachu-puzzle/master/9.png'
            className='movil'
          />
        </g> */}
      </svg>
    </div>
  );
}

export default Puzzle;
