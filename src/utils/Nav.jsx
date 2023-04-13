// import { lazy } from 'react';

// import Home from '~/pages/Home';
// import Achievements from '~/pages/Achievements';
// import Models from '~/pages/Models';
// import Scenes from '~/pages/Scenes';

// const lazyLoad = (name) => {
//   const Module = lazy(() => import(`~/pages/${name}.jsx`));
//   return <Module />;
// };

export const navList = [
  {
    title: '平台概览',
    href: '/',
  },
  {
    title: '合作团队',
    href: '/ins',
  },
  {
    title: '成果共享',
    href: '/achievements',
  },
  {
    title: '数据共享',
    href: '/data',
  },
  {
    title: '知识协同',
    href: '/models',
  },
  {
    title: '典型场景',
    href: '/scenes',
  },
  {
    title: '关于我们',
    href: '/about',
  },
  {
    title: '飞云集智',
    href: 'http://www.feiyun.tech/#/about'
  }
];
