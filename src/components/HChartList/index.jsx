import HChart from '../HChart';

const HChartList = ({ data = [] }) => {
  return (
    <div
      className='flex flex-col items-center justify-between gap-3 pb-6 mt-16 mb-8 aos-init aos-animate md:flex-row '
      data-aos='fade-up'
    >
      <div className='grid items-start w-full md:grid-cols-3 md:gap-x-6 md:gap-y-8 gap-y-5'>
        {data.map((item, index) => {
          return <HChart data={item} key={index}></HChart>;
        })}
      </div>
    </div>
  );
};

export default HChartList;
