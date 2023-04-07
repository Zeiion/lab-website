import React, { useState } from 'react';

import './style.scss';

function Puzzle() {
  const [puzzles, setPuzzles] = useState(
    document.getElementsByClassName('movil'),
  );
  const tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];
  const tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

  const initialize = () => {
    for (let i = 0; i < puzzles.length; i++) {
      puzzles[i].setAttribute('width', tamWidth[i]);
      puzzles[i].setAttribute('height', tamHeight[i]);
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
    testing();
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

  const win = document.getElementById('win');

  const testing = () => {
    let bien_ubicada = 0;
    const pieces = document.getElementsByClassName('piece');
    for (let i = 0; i < puzzles.length; i++) {
      const posx = parseFloat(pieces[i].firstChild.getAttribute('x'));
      const posy = parseFloat(pieces[i].firstChild.getAttribute('y'));
      const ide = pieces[i].getAttribute('id');
      if (origX[ide] === posx && origY[ide] === posy) {
        bien_ubicada = bien_ubicada + 1;
      }
    }
    if (bien_ubicada === 9) {
      win.play();
    }
  };

  return (
    <div onLoad={initialize} className='container m-c'>
      <svg width='600' height='600' id='container'>
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
