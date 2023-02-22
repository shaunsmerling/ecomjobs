import Link from "next/link"

function index() {
    return (
        <section class="bg-gray-900">
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Job Categories</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-md sm:px-16 xl:px-48 dark:text-gray-400">Handpicked eCommerce categories that will help you find a job you’ll love. </p>
        </div>
        <div class="gap-16 items-center lg:-mt-20 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            {/* <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div> */}
            <div class="-mr-4 grid grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                <Link href="/marketing-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg h-48" src="/marketing.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Marketing</div>
                </div>
                </Link>
                <Link href="/business-operations-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg lg:mt-10 h-48" src="/ops.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Biz Ops</div>
                </div>
                </Link>
                <Link href="/creative-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg h-48 " src="/creative.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Creative</div>
                </div>
                </Link>
                <Link href="/customer-service-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg lg:mt-10 h-48" src="/customerservice.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Customer<br></br> Service</div>
                </div>
                </Link> 
                <Link href="/human-resources-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg h-48 " src="/people.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">People</div>
                </div>
                </Link>
                </div>
                <div class=" lg:-ml-4 grid grid-cols-3 lg:grid-cols-5 lg:gap-4 mt-8">
                <Link href="/web-development-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg h-48" src="/webdev.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Web<br></br> Dev</div>
                </div>
                </Link>
                <Link href="/product-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg lg:mt-10 h-48" src="/product.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold "> Product</div>
                </div>
                </Link>
                <Link href="/finance-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg h-48 " src="/finance.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Finance</div>
                </div>
                </Link>
                <Link href="/sales-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg lg:mt-10 h-48" src="/sale.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">Sales</div>
                </div>
                </Link>
                <Link href="/people-jobs">
                <div className="flex items-center opacity-70 hover:opacity-100 hover:animate-pulse">
                <img class="w-full rounded-lg h-48 " src="/humanresources.jpg" alt="office content 1"/>
                <div class="ml-2 absolute text-md text-white font-bold ">HR</div>
                </div>
                </Link>
                
            </div>
        </div>
    </section>
    )

}

export default index