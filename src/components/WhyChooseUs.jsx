const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "24x7 Support", desc: "Always available assistance for employees and admins." },
            { title: "GPS Tracked Vehicles", desc: "Live tracking and route optimization included." },
            { title: "On-Time Guarantee", desc: "Punctual pick-up and drop every day." },
          ].map((item, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
