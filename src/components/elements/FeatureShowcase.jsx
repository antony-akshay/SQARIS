import React from 'react';

const FeatureShowcase = () => {
  const features = [
    { id: 1, title: "Innovation through Research", position: "top-left" },
    { id: 2, title: "Precision in Engineering", position: "top-center" },
    { id: 3, title: "Ethical AI & Tech Responsibility", position: "top-right" },
    { id: 4, title: "Commitment to Global Standards", position: "bottom-left" },
    { id: 5, title: "Scalable AI Products", position: "bottom-right" }
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case 'top-left':
        return 'absolute top-0 left-0';
      case 'top-center':
        return 'absolute top-0 left-1/2 transform -translate-x-1/2';
      case 'top-right':
        return 'absolute top-0 right-0';
      case 'bottom-left':
        return 'absolute bottom-0 left-1/4';
      case 'bottom-right':
        return 'absolute bottom-0 right-1/4';
      default:
        return '';
    }
  };

  return (
    <>
      <h1 className="w-full max-w-4xl mx-auto p-8 text-white font-bold text-4xl align-center justify-center flex ">
        About SQARIS
      </h1>
      <div className="h-[2px] w-[1130px] mx-auto mt-2 bg-gradient-to-r from-black via-[#3c3c3c] to-black mb-[37px]" />
      <p className="mx-auto text-gray-100 w-[940px] text-center mb-10">
        At SQARIS, we believe in lifecycle-aligned rewards & performance, high accountability and initiative, maintaining an 8-hour<br />
        productive workday minimum, with no part-time/side employment. We operate with transparent contribution to operating cost, growth, and valuation.
      </p>

      <div className="w-full max-w-7xl mx-auto ">
        <div className="relative w-full h-auto md:h-96 bg-gradient-to-r from-black to-gray-900 rounded-3xl border border-gray-600 overflow-hidden p-6">

          {/* Responsive column layout for small screens */}
          <div className="block md:hidden flex flex-col gap-4 items-center">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="w-full max-w-xs h-24 bg-black bg-opacity-60 backdrop-blur-sm rounded-3xl border-2 border-teal-600 shadow-inner px-4 flex items-center justify-center text-center"
                style={{
                  background: `linear-gradient(172.57deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to left, #000000, #000000)`,
                  boxShadow: `inset 0px 7px 17px 0px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(0, 141, 134, 1)`
                }}
              >
                <h3 className="text-gray-200 font-medium text-base leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Absolute-positioned layout for medium and larger screens */}
          <div className="hidden md:block absolute inset-0 p-12">
            <div className="relative w-full h-full">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`${getPositionClasses(feature.position)} w-64 h-24 bg-black bg-opacity-60 backdrop-blur-sm rounded-3xl border-2 border-teal-600 shadow-inner`}
                  style={{
                    background: `linear-gradient(172.57deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to left, #000000, #000000)`,
                    boxShadow: `inset 0px 7px 17px 0px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(0, 141, 134, 1)`
                  }}
                >
                  <div className="flex items-center justify-center h-full px-6 text-center">
                    <h3 className="text-gray-200 font-medium text-base leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FeatureShowcase;
