const Hero: React.FC = () => {
  return (
    <section
      className=" bg-cover bg-center bg-no-repeat text-white "
      style={{ backgroundImage: "url(/images/ikups.jpeg)" }}
    >
      <div className="bg-black bg-opacity-50 py-60">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sirih Pulang ke Gagang
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
