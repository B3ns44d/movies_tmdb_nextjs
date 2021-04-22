import Image from "next/image";
import HeaderItem from "@/components/HeaderItem";
import {
  UserIcon,
  SearchIcon,
  HomeIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

function Header({ width, height }) {
  const items = {
    HOME: HomeIcon,
    TRENDING: LightningBoltIcon,
    VERIFIED: BadgeCheckIcon,
    SEARCH: SearchIcon,
    ACCOUNT: UserIcon,
  };
  return (
    <header>
      <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          {Object.entries(items).map(([key, value], index) => {
            return <HeaderItem key={index} title={key} Icon={value} />;
          })}
        </div>
        <Image
          className="object-contain"
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          width={width}
          height={height}
        />
      </div>
    </header>
  );
}

export default Header;
