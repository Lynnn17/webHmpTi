import Navbar from "../components/Navbar";

const CommingSoon = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-white text-lg mb-8 text-center">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <a className="text-white" href="/">
          Home
        </a>
      </div>
    </div>
  );
};

export default CommingSoon;
