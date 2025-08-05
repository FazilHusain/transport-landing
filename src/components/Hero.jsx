const Hero = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Simplifying <span className="text-blue-600">Employee Transportation</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Safe, reliable, and tech-enabled mobility solutions for your workforce.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
