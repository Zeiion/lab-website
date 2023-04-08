import { useState } from 'react';

export const usePuzzle = (yOffset) => {
  const [elementSelect, setElementSelect] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentPosX, setCurrentPosX] = useState(0);
  const [currentPosY, setCurrentPosY] = useState(0);

  const [droppedId, setDroppedId] = useState(null);

  const [moves, setMoves] = useState(document.querySelectorAll('.move'));

  const selectElement = (evt) => {
    const newElementSelect = evt.target;
    // const newElementSelect = reorder(evt);
    setCurrentX(evt.clientX);
    setCurrentY(evt.clientY);
    setCurrentPosX(parseFloat(newElementSelect.getAttribute('x')));
    setCurrentPosY(parseFloat(newElementSelect.getAttribute('y')));
    setElementSelect(newElementSelect);
    setCurrentId(newElementSelect.getAttribute('data-id'));

    // avoid selecting other elements
    moves.forEach((move) => {
      if (move !== evt.target) {
        move.setAttribute('pointer-events', 'none');
      }
    });
    // set current to the last of parent node
    newElementSelect.parentNode.appendChild(newElementSelect);
  };

  const moveElement = (evt) => {
    if (elementSelect === null) return;
    if (currentId === droppedId) {
      setDroppedId(null);
    }
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
    // console.log('!!trying deselect');
    if (elementSelect) {
      elementSelect.removeAttribute('onMouseMove');
      elementSelect.removeAttribute('onMouseOut');
      elementSelect.removeAttribute('onMouseUp');
      setElementSelect(null);
    }
    moves.forEach((move) => {
      move.setAttribute('pointer-events', 'auto');
    });
  };

  const absorbOffset = 30;
  const absorb = () => {
    const absortX = 1088;
    const absortY = yOffset + 250;
    if (
      Math.abs(currentPosX - absortX) < absorbOffset &&
      Math.abs(currentPosY - absortY) < absorbOffset
    ) {
      elementSelect.setAttribute('x', absortX);
      elementSelect.setAttribute('y', absortY);
      // console.log('!!absorbed');
      setDroppedId(currentId);
    }
  };

  return {
    selectElement,
    moveElement,
    deSelectElement,
    currentId,
    droppedId,
    setMoves,
  };
};
