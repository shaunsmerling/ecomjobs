import Link from "next/link"
import Image from 'next/image'

function index() {
    return (
        <section class="bg-gray-900">
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Locations</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Browse our curated list of locations to find a job in an eCommerce brand you’ll love. </p>
        </div>
        <div class="gap-16 items-center lg:-mt-20 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            {/* <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div> */}
            <div class="-mr-4 mx-auto grid grid-cols-4 gap-4 mt-8">
                <Link href="/united-states-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/usa.jpg"
        alt="Picture of the author"
        className="w-full rounded-lg h-52 "
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg h-48" src="/usa.jpg" alt="office content 1"/> */}
                <div class="ml-4 absolute  text-md text-white font-bold ">United<br></br> States</div>
                </div>
                </Link>
                <Link href="/australian-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/australia.jpg"
        alt="Picture of the author"
        className="w-full rounded-lg h-52 "
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg lg:mt-10 h-48" src="/australia.jpg" alt="office content 1"/> */}
                <div class="ml-2 absolute text-md text-white font-bold ">Australia</div>
                </div>
                </Link>
                <Link href="/netherlands-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/netherlands.jpg"
        className="w-full rounded-lg h-52 "
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg h-48 " src="/netherlands.jpg" alt="office content 1"/> */}
                <div class="absolute text-sm text-white font-bold ">Netherlands</div>
                </div>
                </Link>
                <Link href="/sweden-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/sweden.jpg"
        className="w-full rounded-lg h-52 "
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg lg:mt-10 h-48" src="/sweden.jpg" alt="office content 1"/> */}
                <div class="ml-2 absolute text-md text-white font-bold ">Sweden</div>
                </div>
                </Link>
                </div>
               
            <div class="-mr-4 mx-auto grid grid-cols-4 gap-4 mt-8">
            <Link href="/united-kingdom-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/uk.jpg"
        className="w-full rounded-lg h-52 "
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg h-48" src="/uk.jpg" alt="office content 1"/> */}
                <div class="ml-2 absolute text-md text-white font-bold ">United<br></br> Kingdom</div>
                </div>
                </Link>
                <Link href="/vietnam-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/vietnam.jpg"
        className="w-full rounded-lg h-52 "
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg lg:mt-10 h-48" src="/vietnam.jpg" alt="office content 1"/> */}
                <div class="ml-2 absolute text-md text-white font-bold ">Vietnam</div>
                </div>
                </Link>
                <Link href="/singapore-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/singapore.jpg"
        alt="Picture of the author"
        className="w-full rounded-lg h-52 "
        height={500}
        width={500}
        priority
      />
                {/* <img class="w-full rounded-lg h-48 " src="/singapore.jpg" alt="office content 1"/> */}
                <div class="ml-1 lg:ml-2 lg:text-md absolute text-sm text-white font-bold ">Singapore</div>
                </div>
                </Link>
                <Link href="/canada-jobs">
                <div className="flex items-center opacity-70 hover:opacity-80 hover:animate-pulse">
                <Image
        src="/canada.jpg"
        className="w-full rounded-lg h-52 "
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
                {/* <img class="w-full rounded-lg lg:mt-10 h-48" src="/canada.jpg" alt="office content 1"/> */}
                <div class="ml-2 absolute text-md text-white font-bold ">Canada</div>
                
                
                </div>
                </Link>
                </div>
            
            
          
        </div>
    </section>
    )

}

export default index