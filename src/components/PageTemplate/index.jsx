import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import Banner from '~/components/Banner';

const PageTemplate = ({ title, subTitle, children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 mx-auto pointer-events-none max-w-7xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="pb-12 mx-auto text-center max-w-7xl md:pb-20 md:text-left">
                <h1 className="h1" data-aos="fade-up">
                  {title} <br /> <h2 className="h2">{subTitle}</h2>
                </h1>
              </div>
              {children}
            </div>
          </div>
        </section>
      </main>

      <Banner />
    </div>
  );
};

export default PageTemplate;
