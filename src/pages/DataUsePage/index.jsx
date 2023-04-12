import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageTemplate from '~/components/PageTemplate';
import Cursor from '../../components/Cursor';
import Modal from '../../utils/Modal';
import arrowImg from '~/images/arrow.png';

import { usePuzzle } from './usePuzzle';

import './style.scss';

const yOffset = 130;

// random position of the puzzle pieces
const randomPos = [
  {
    x: 294,
    y: 473,
  },
  {
    x: 523,
    y: 250,
  },
  {
    x: 1063,
    y: 591,
  },
  {
    x: 1150,
    y: 332,
  },
  {
    x: 444,
    y: 692,
  },
];

function Puzzle() {
  const {
    selectElement,
    moveElement,
    deSelectElement,
    currentId,
    droppedId,
    setMoves,
  } = usePuzzle(yOffset);

  const [resultModalOpen, setResultModalOpen] = useState(false);

  useEffect(() => {
    if (droppedId) {
      setResultModalOpen(true);
    }
  }, [droppedId]);

  useEffect(() => {
    setMoves(document.querySelectorAll('.move'));
  }, []);

  // position of the puzzle pieces
  const pos = [
    {
      x: 714,
      y: yOffset + 192,
    },
    {
      x: 738,
      y: yOffset + 250,
    },
    {
      x: 480,
      y: yOffset + 474,
    },
    {
      x: 456,
      y: yOffset + 415,
    },
  ];

  const { id } = useParams();
  const dataInfo = {
    title: 'Large-scale Traffic Speed Data Set',
    description:
      'This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.',
    imgSrc: 'https://i2.100024.xyz/2023/04/07/1ywd3k.webp',
    tags: ['Openits'],
    author: 'OpenITs',
    authorImgSrc:
      'http://8.140.124.245:8129/mnt/deploy/resource/datafile-logo/9527fc2d434b052852ae152a8d40f9a4.jpg',
    date: '2022-10-26',
    href: 'http://www.feiyun.tech/#/manage/data/dataDetail/53',
    action: {
      type: 'a',
      key: null,
      ref: null,
      props: {
        href: 'http://81.70.246.244:9898/scene/create/3',
        target: '_blank',
        className:
          'absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white transition duration-200 bg-purple-700 border-2 border-purple-600 cursor-pointer hover:bg-purple-800 hover:text-gray-200',
        children: '数据使用',
      },
      _owner: null,
      _store: {},
    },
    // 规模介绍
    sizeInfo: {
      tag: '文件大小：1.2GB',
      description: `当前数据集包含 214 个匿名路段，每个路段包含 2016 年 8 月 1 日至 2016 年 9 月 30 日的 10 分钟间隔的速度数据。`,
    },
    // 格式介绍
    formatInfo: {
      tag: '文件后缀：csv',
      description: `每个路段的字段如下：
  - segment_id: 路段 ID
  - date: 日期
  - time: 时间
  - speed: 速度
  - travel_time: 行驶时间`,
    },
    // 注意事项
    attentionInfo: `1. 本数据集仅供学术研究使用，不得用于商业用途。
2. 本数据集仅供学术研究使用，不得用于商业用途。
3. 本数据集仅供学术研究使用，不得用于商业用途。
    `,
  };
  const modelList = [
    {
      id: '0001',
      title: 'RNN模型',
    },
    {
      id: '0002',
      title: 'CNN模型',
    },
    {
      id: '0003',
      title: 'GNN模型',
    },
    {
      id: '0004',
      title: 'GRU模型',
    },
    {
      id: '0005',
      title: ['Attention', '模型'],
    },
  ];
  const model = useMemo(() => {
    if (droppedId == null) return null;
    return modelList.find(({ id }) => id === droppedId);
  }, [droppedId, modelList]);

  const getTextNode = (title) => {
    if (Array.isArray(title)) {
      return (
        <text
          x={-720}
          y={-50}
          fontSize={150}
          className="puzzle-text"
          transform="rotate(225)"
          width={200}
          style={{
            textAnchor: 'middle',
          }}
        >
          <tspan>{title[0]}</tspan>
          <tspan x={-720} y={150}>
            {title[1]}
          </tspan>
        </text>
      );
    }
    const len = title.length;
    if (len <= 5)
      return (
        <text
          x={-720}
          y={0}
          fontSize={150}
          className="puzzle-text"
          transform="rotate(225)"
          width={200}
          style={{
            textAnchor: 'middle',
          }}
        >
          {title}
        </text>
      );
    else if (len > 5 && len <= 10) {
      return (
        <text
          x={-720}
          y={-50}
          fontSize={150}
          className="puzzle-text"
          transform="rotate(225)"
          width={200}
          style={{
            textAnchor: 'middle',
          }}
        >
          <tspan>{title.slice(0, 5)}</tspan>
          <tspan x={-720} y={150}>
            {title.slice(5, 10)}
          </tspan>
        </text>
      );
    } else {
      return (
        <text
          x={-720}
          y={-100}
          fontSize={150}
          className="puzzle-text"
          transform="rotate(225)"
          width={200}
          style={{
            textAnchor: 'middle',
          }}
        >
          <tspan>{title.slice(0, 5)}</tspan>
          <tspan x={-720} y={50}>
            {title.slice(5, 10)}
          </tspan>
          <tspan x={-720} y={200}>
            {title.slice(10)}
          </tspan>
        </text>
      );
    }
  };

  return (
    <>
      <PageTemplate
        title={
          <>
            {/* TODO color */}
            数据使用 ——{' '}
            <span className="text-purple-600">{dataInfo.title}</span>
          </>
        }
        subTitle={'Data Use'}
      >
        {/* <Cursor /> */}
        <p
          className="absolute mb-8 text-xl text-justify text-gray-400 text-indent-2 top-[20rem] max-w-7xl pr-8 sm:pr-12 box-border pointer-events-none select-none"
          style={{
            textIndent: '2.5rem',
          }}
        >
          {dataInfo.description}
        </p>
        <div className="container relative">
          <svg width="600" height="600" id="container">
            <defs>
              <linearGradient id="border-gradient" x2="1" y2="1">
                <stop offset="0%" stopColor="#665cfc66" />
                <stop offset="100%" stopColor="#9708cc66" />
              </linearGradient>
              <linearGradient id="content-gradient" x2="1" y2="1">
                <stop offset="0%" stopColor="#3d298cee" />
                <stop offset="100%" stopColor="#2a0845ee" />
              </linearGradient>
              <linearGradient id="content-gradient-2" x2="1" y2="1">
                <stop offset="0%" stopColor="#23185266" />
                <stop offset="100%" stopColor="#11111166" />
              </linearGradient>
              <g id="puzzle-1" transform="rotate(45)">
                <svg
                  t="1680919590915"
                  className="piece piece-1 piece-fixed"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="url(#content-gradient-2)"
                >
                  <path
                    d="M874.666667 469.333333 810.666667 469.333333 810.666667 298.666667C810.666667 251.306667 772.266667 213.333333 725.333333 213.333333L554.666667 213.333333 554.666667 149.333333C554.666667 90.453333 506.88 42.666667 448 42.666667 389.12 42.666667 341.333333 90.453333 341.333333 149.333333L341.333333 213.333333 170.666667 213.333333C123.733333 213.333333 85.333333 251.733333 85.333333 298.666667L85.333333 460.8 149.333333 460.8C213.333333 460.8 264.533333 512 264.533333 576 264.533333 640 213.333333 691.2 149.333333 691.2L85.333333 691.2 85.333333 853.333333C85.333333 900.266667 123.733333 938.666667 170.666667 938.666667L332.8 938.666667 332.8 874.666667C332.8 810.666667 384 759.466667 448 759.466667 512 759.466667 563.2 810.666667 563.2 874.666667L563.2 938.666667 725.333333 938.666667C772.266667 938.666667 810.666667 900.266667 810.666667 853.333333L810.666667 682.666667 874.666667 682.666667C933.546667 682.666667 981.333333 634.88 981.333333 576 981.333333 517.12 933.546667 469.333333 874.666667 469.333333Z"
                    p-id="9317"
                    stroke="url(#border-gradient)"
                    strokeWidth={10}
                  ></path>
                  {/* <text x={200} y={500} fontSize={150} className="puzzle-text">
                  test-1
                </text> */}
                </svg>
              </g>
              {/* <g id="puzzle-2" transform="rotate(135)">
              <svg
                t="1680919590915"
                className="piece piece-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="url(#content-gradient)"
              >
                <path
                  d="M874.666667 469.333333 810.666667 469.333333 810.666667 298.666667C810.666667 251.306667 772.266667 213.333333 725.333333 213.333333L554.666667 213.333333 554.666667 149.333333C554.666667 90.453333 506.88 42.666667 448 42.666667 389.12 42.666667 341.333333 90.453333 341.333333 149.333333L341.333333 213.333333 170.666667 213.333333C123.733333 213.333333 85.333333 251.733333 85.333333 298.666667L85.333333 460.8 149.333333 460.8C213.333333 460.8 264.533333 512 264.533333 576 264.533333 640 213.333333 691.2 149.333333 691.2L85.333333 691.2 85.333333 853.333333C85.333333 900.266667 123.733333 938.666667 170.666667 938.666667L332.8 938.666667 332.8 874.666667C332.8 810.666667 384 759.466667 448 759.466667 512 759.466667 563.2 810.666667 563.2 874.666667L563.2 938.666667 725.333333 938.666667C772.266667 938.666667 810.666667 900.266667 810.666667 853.333333L810.666667 682.666667 874.666667 682.666667C933.546667 682.666667 981.333333 634.88 981.333333 576 981.333333 517.12 933.546667 469.333333 874.666667 469.333333Z"
                  p-id="9317"
                  stroke="url(#border-gradient)"
                  strokeWidth={10}
                ></path>
                <text
                  x={-720}
                  y={0}
                  fontSize={150}
                  className="puzzle-text"
                  transform="rotate(225)"
                >
                  test-2
                </text>
              </svg>
            </g> */}
              {modelList.map(({ title, id }) => {
                return (
                  <g id={id} transform="rotate(135)" key={id}>
                    <svg
                      t="1680919590915"
                      className="piece piece-2"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="200"
                      fill="url(#content-gradient)"
                    >
                      <path
                        d="M874.666667 469.333333 810.666667 469.333333 810.666667 298.666667C810.666667 251.306667 772.266667 213.333333 725.333333 213.333333L554.666667 213.333333 554.666667 149.333333C554.666667 90.453333 506.88 42.666667 448 42.666667 389.12 42.666667 341.333333 90.453333 341.333333 149.333333L341.333333 213.333333 170.666667 213.333333C123.733333 213.333333 85.333333 251.733333 85.333333 298.666667L85.333333 460.8 149.333333 460.8C213.333333 460.8 264.533333 512 264.533333 576 264.533333 640 213.333333 691.2 149.333333 691.2L85.333333 691.2 85.333333 853.333333C85.333333 900.266667 123.733333 938.666667 170.666667 938.666667L332.8 938.666667 332.8 874.666667C332.8 810.666667 384 759.466667 448 759.466667 512 759.466667 563.2 810.666667 563.2 874.666667L563.2 938.666667 725.333333 938.666667C772.266667 938.666667 810.666667 900.266667 810.666667 853.333333L810.666667 682.666667 874.666667 682.666667C933.546667 682.666667 981.333333 634.88 981.333333 576 981.333333 517.12 933.546667 469.333333 874.666667 469.333333Z"
                        p-id="9317"
                        stroke="url(#border-gradient)"
                        strokeWidth={10}
                      ></path>
                      {getTextNode(title)}
                    </svg>
                  </g>
                );
              })}
              <g id="puzzle-2-empty" transform="rotate(135)">
                <svg
                  t="1680919590915"
                  className="piece piece-2 piece-fixed"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="#ffffff00"
                >
                  <path
                    d="M874.666667 469.333333 810.666667 469.333333 810.666667 298.666667C810.666667 251.306667 772.266667 213.333333 725.333333 213.333333L554.666667 213.333333 554.666667 149.333333C554.666667 90.453333 506.88 42.666667 448 42.666667 389.12 42.666667 341.333333 90.453333 341.333333 149.333333L341.333333 213.333333 170.666667 213.333333C123.733333 213.333333 85.333333 251.733333 85.333333 298.666667L85.333333 460.8 149.333333 460.8C213.333333 460.8 264.533333 512 264.533333 576 264.533333 640 213.333333 691.2 149.333333 691.2L85.333333 691.2 85.333333 853.333333C85.333333 900.266667 123.733333 938.666667 170.666667 938.666667L332.8 938.666667 332.8 874.666667C332.8 810.666667 384 759.466667 448 759.466667 512 759.466667 563.2 810.666667 563.2 874.666667L563.2 938.666667 725.333333 938.666667C772.266667 938.666667 810.666667 900.266667 810.666667 853.333333L810.666667 682.666667 874.666667 682.666667C933.546667 682.666667 981.333333 634.88 981.333333 576 981.333333 517.12 933.546667 469.333333 874.666667 469.333333Z"
                    p-id="9317"
                    stroke="#ffffffee"
                    strokeDasharray={80}
                    strokeWidth={20}
                  ></path>
                </svg>
              </g>
              <g id="puzzle-3" transform="rotate(225)">
                <svg
                  t="1680919590915"
                  className="piece piece-3 piece-fixed"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="url(#content-gradient-2)"
                >
                  <path
                    d="M874.666667 469.333333 810.666667 469.333333 810.666667 298.666667C810.666667 251.306667 772.266667 213.333333 725.333333 213.333333L554.666667 213.333333 554.666667 149.333333C554.666667 90.453333 506.88 42.666667 448 42.666667 389.12 42.666667 341.333333 90.453333 341.333333 149.333333L341.333333 213.333333 170.666667 213.333333C123.733333 213.333333 85.333333 251.733333 85.333333 298.666667L85.333333 460.8 149.333333 460.8C213.333333 460.8 264.533333 512 264.533333 576 264.533333 640 213.333333 691.2 149.333333 691.2L85.333333 691.2 85.333333 853.333333C85.333333 900.266667 123.733333 938.666667 170.666667 938.666667L332.8 938.666667 332.8 874.666667C332.8 810.666667 384 759.466667 448 759.466667 512 759.466667 563.2 810.666667 563.2 874.666667L563.2 938.666667 725.333333 938.666667C772.266667 938.666667 810.666667 900.266667 810.666667 853.333333L810.666667 682.666667 874.666667 682.666667C933.546667 682.666667 981.333333 634.88 981.333333 576 981.333333 517.12 933.546667 469.333333 874.666667 469.333333Z"
                    p-id="9317"
                    stroke="url(#border-gradient)"
                    strokeWidth={10}
                  ></path>
                  {/* <text x={200} y={500} fontSize={150} className="puzzle-text">
                  test-3
                </text> */}
                </svg>
              </g>
              <g id="puzzle-4" transform="rotate(315)">
                <svg
                  t="1680919590915"
                  className="piece piece-4 piece-fixed"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="url(#content-gradient-2)"
                >
                  <path
                    d="M874.666667 469.333333 810.666667 469.333333 810.666667 298.666667C810.666667 251.306667 772.266667 213.333333 725.333333 213.333333L554.666667 213.333333 554.666667 149.333333C554.666667 90.453333 506.88 42.666667 448 42.666667 389.12 42.666667 341.333333 90.453333 341.333333 149.333333L341.333333 213.333333 170.666667 213.333333C123.733333 213.333333 85.333333 251.733333 85.333333 298.666667L85.333333 460.8 149.333333 460.8C213.333333 460.8 264.533333 512 264.533333 576 264.533333 640 213.333333 691.2 149.333333 691.2L85.333333 691.2 85.333333 853.333333C85.333333 900.266667 123.733333 938.666667 170.666667 938.666667L332.8 938.666667 332.8 874.666667C332.8 810.666667 384 759.466667 448 759.466667 512 759.466667 563.2 810.666667 563.2 874.666667L563.2 938.666667 725.333333 938.666667C772.266667 938.666667 810.666667 900.266667 810.666667 853.333333L810.666667 682.666667 874.666667 682.666667C933.546667 682.666667 981.333333 634.88 981.333333 576 981.333333 517.12 933.546667 469.333333 874.666667 469.333333Z"
                    p-id="9317"
                    stroke="url(#border-gradient)"
                    strokeWidth={10}
                  ></path>
                  {/* <text x={200} y={500} fontSize={150} className="puzzle-text">
                  test-4
                </text> */}
                </svg>
              </g>
            </defs>
            <use xlinkHref="#puzzle-1" x={pos[0].x} y={pos[0].y}></use>
            <use xlinkHref="#puzzle-3" x={pos[2].x} y={pos[2].y}></use>
            <use xlinkHref="#puzzle-4" x={pos[3].x} y={pos[3].y}></use>

            {/* others */}
            {modelList.map(({ id }, index) => {
              return (
                <use
                  key={id}
                  xlinkHref={`#${id}`}
                  x={randomPos[index].x}
                  y={randomPos[index].y}
                  className="move"
                  onMouseDown={selectElement}
                  onMouseMove={moveElement}
                  onMouseUp={deSelectElement}
                  onMouseOut={deSelectElement}
                  data-id={id}
                ></use>
              );
            })}
            {!model && (
              <use xlinkHref="#puzzle-2-empty" x={pos[1].x} y={pos[1].y}></use>
            )}
          </svg>
          <div className="fixed pointer-events-none right-1/3 bottom-1/3">
            <div className="filter-bg"></div>
          </div>
          <canvas className="fireworks"></canvas>
          <div className="absolute pointer-events-none right-[22rem] top-[30rem] w-[36rem] text-center">
            <h4 className="h4"> {dataInfo.title}</h4>
          </div>
          <div className="absolute right-[20rem] top-[13rem] flex gap-1">
            <img src={arrowImg} alt="" className="w-20 h-20 mt-1" />
            <span className="h3 font-architects-daughter">Drop Here</span>
          </div>
        </div>
      </PageTemplate>
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={resultModalOpen}
        handleClose={() => setResultModalOpen(false)}
      >
        <div className="w-full bg-black h-96">
          Successfully use data & model TODO style here
        </div>
      </Modal>
    </>
  );
}

export default Puzzle;
