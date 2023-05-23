import Link from 'next/link';
import {useSession} from "next-auth/react"

const AnnouncementBar = () => {

  const {data: session} = useSession()

  return (
    <div className="bg-[#2d4f42]  text-white py-4 px-4 text-sm font-medium text-center">
       <span> Stay ahead on the latest developments in artifical intelligence. </span>

<span>Subscribe to <Link href="https://thespotlight.beehiiv.com/subscribe" className="font-bold italic underline">The Spotlight</Link></span> 

  </div>
  );
};

export default AnnouncementBar;