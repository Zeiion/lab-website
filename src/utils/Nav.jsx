// import { lazy } from 'react';

// import Home from '~/pages/Home';
// import Achievements from '~/pages/Achievements';
// import Models from '~/pages/Models';
// import Scenes from '~/pages/Scenes';

// const lazyLoad = (name) => {
//   const Module = lazy(() => import(`~/pages/${name}.jsx`));
//   return <Module />;
// };
import { FEIYUN_URL } from '~/consts/index';

export const navList = [
  {
    title: '进入飞云',
    href: FEIYUN_URL,
  },
  // {
  //   title: '合作团队',
  //   href: '/teams',
  // },
  {
    title: '数据共享',
    href: '/datas',
  },
  {
    title: '知识协同',
    href: '/achievements',
  },
  {
    title: '场景适配',
    href: '/scenes',
  },
  {
    title: '关于我们',
    href: '/about',
  },
  // {
  //   title: '飞云集智',
  //   href: {FEIYUN_URL},
  //   blank: true,
  // },
];
