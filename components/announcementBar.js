import Link from 'next/link';
import {useSession} from "next-auth/react"

const AnnouncementBar = () => {

  const {data: session} = useSession()

  return (
    <div className="bg-[#2d4f42]  text-white py-4 px-4 text-sm font-medium text-center">
       <span> I'm sorry about the ads. I'll turn them off when we make more money 😔 </span>



  </div>
  );
};

export default AnnouncementBar;