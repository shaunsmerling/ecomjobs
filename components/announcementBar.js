import Link from 'next/link';
import {useSession} from "next-auth/react"

const AnnouncementBar = () => {

  const {data: session} = useSession()

  return (
    <div className="bg-[#2d4f42]  text-white py-4 px-4 text-sm font-medium text-center">
      <span>Version 2.0 of Ecomportal is out! </span>
      {session ? 
  <span>Build your profile <Link href="/profile" className="font-bold italic underline">here</Link></span> :
  <span>Create a profile to save jobs <Link href="/login" className="font-bold italic underline">here</Link></span>
}

    </div>
  );
};

export default AnnouncementBar;