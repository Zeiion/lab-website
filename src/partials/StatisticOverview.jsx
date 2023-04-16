import { Link } from 'react-router-dom';
import NumberAnimation from '~/components/NumberAnimation';

const StatisticOverview = () => {
  return (
    <>
      <div className="flex items-center justify-around w-full h-24 text-center h5">
        <Link
          className="w-64 py-2 bg-purple-700 border-2 rounded-md border-purple-700/50 outline outline-offset-4 outline-purple-600/80"
          data-aos="flip-right"
          data-aos-delay="400"
          to="/datas"
        >
          数据集规模：{' '}
          <NumberAnimation value={121} delay={400}></NumberAnimation>
        </Link>
        <Link
          className="w-64 py-2 bg-purple-700 border-2 rounded-md border-purple-700/50 outline outline-offset-4 outline-purple-600/80"
          data-aos="flip-right"
          data-aos-delay="700"
          to="/models"
        >
          模型数量：{' '}
          <NumberAnimation value={232} delay={700}></NumberAnimation>
        </Link>
        <Link
          className="w-64 py-2 bg-purple-700 border-2 rounded-md border-purple-700/50 outline outline-offset-4 outline-purple-600/80"
          data-aos="flip-right"
          data-aos-delay="1000"
          to="/achievements"
        >
          成果数量：{' '}
          <NumberAnimation value={97} delay={1000}></NumberAnimation>
        </Link>
      </div>
    </>
  );
};

export default StatisticOverview;
