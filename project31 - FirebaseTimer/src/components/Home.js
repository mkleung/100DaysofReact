import React from "react";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

// https://scotch.io/tutorials/build-a-beautiful-landing-page-with-tailwind-css

const Home = () => {
  return (
    <>
      <div className="py-20" style={divStyle}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">Daily Practice</h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Track your practice time everyday
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            View Demo
          </button>
        </div>
      </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2" />
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2" />
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/LInux or Windows OS.
            </p>
          </div>
          <div className="w-full md:w-1/2" />
        </div>
      </section>
    </>
  );
};

export default Home;
