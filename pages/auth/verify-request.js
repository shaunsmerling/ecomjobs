

export default function VerifyRequest() {

    return (
            <section className=" bg-gray-50 py-20 ">
            <div className="px-4 mx-auto max-w-7xl -pt-20  mb-10 lg:px-8">
          
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-montserrant leading-tight text-black sm:text-4xl lg:text-5xl">Log Into Your Ecomportal Account</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Access your user profile & browse all your saved jobs </p>
                </div>
        
                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                        <form method="post" action="/api/auth/signin/email">
                    <div class="space-y-4">
                    <input name="csrfToken" type="hidden" />
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                        
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                       
                                    </div>
                                    <h1> ✓ Check your email for verification </h1>
                                  
                                </div>
                        
                 
            
                 
            
            </div>
                    
                    
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}