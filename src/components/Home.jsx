const Home = () => {
  return (
    <div
      className="w-full h-full lg:bg-cover"
      style={{
        backgroundImage:
          'url("https://bemfilkom.ub.ac.id/assets/bgcorak-OepKPvdH.svg")',
      }}
    >
      <div className="container px-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-white pt-[60px]">
          Welcome To
        </h1>
        <h1 className="text-4xl font-bold text-white ">HMP TI UNESA </h1>
        <h1 className="text-4xl font-bold text-white ">2024</h1>
      </div>
    </div>
  );
};

export default Home;
