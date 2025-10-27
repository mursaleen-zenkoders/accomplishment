import Navbar from '@/components/common/navbar';
import Image from 'next/image';
import Link from 'next/link';
import back from 'public/icons/back-arrow.svg';
import notFound from 'public/img/not-found.svg';

export default function NotFound() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center h-[80dvh] py-20 gap-y-20">
        <h1 className="text-center font-bold !text-6xl">Oops!</h1>
        <Image src={notFound} alt="Not Found" />
        <Link
          href="/"
          className="border-b-2 border-black pb-2 capitalize text-2xl flex items-center gap-x-2"
        >
          <Image src={back} alt="Back" className="w-9 h-9" />
          go home
        </Link>
      </div>
    </div>
  );
}
