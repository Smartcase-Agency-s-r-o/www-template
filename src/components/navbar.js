import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="py-[1.375rem] flex justify-between items-center border-b-[1px] border-b-gray">
      <div className="h-[40px]">
        <Image src="/logoH.png" alt="Brand Logo" width={261} height={40} />
      </div>
      <ul className="flex items-center gap-6">
        <li className="inline-block">
          <button className="text-xl text-darkBlue hover:text-highlightDarkBlue hover:border-highlightDarkBlue border-2 rounded-lg border-darkBlue px-2 py-1">
            Kontaktujte nás
          </button>
        </li>
        <li className="inline-block"></li>
        <li className="inline-block">
          <div className="h-[36px]">
            <Image src="/logo.png" alt="Brand Logo" width={36} height={36} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
