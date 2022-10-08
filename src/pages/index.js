import Image from 'next/image';
import MetaTags from '../components/core/MetaTags';

const Home = () => {
  return (
    <>
      <MetaTags />
      <div className="w-screen h-screen flex flex-col justify-center align-middle">
        <div className="animate-[spin_4s_linear_infinite] w-60 h-60 mx-auto">
          <Image src="/logo.png" alt="Brand Logo" layout="fill" />
        </div>
        <h1 className="text-3xl mx-auto mt-5">
          Edit <code className="text-2xl">src/index.js</code> and save to
          reload.
        </h1>
      </div>
    </>
  );
};

export default Home;
