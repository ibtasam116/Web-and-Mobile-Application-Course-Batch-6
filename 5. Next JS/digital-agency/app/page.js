
export default function Home() {
  return (
    <>
      <div className="header h-[100vh] bg-[#122E99] text-white">
        <div className="container mx-auto px-[5%] md:px-[7%] flex justify-between items-center py-[15px]">
          <div>
            <h3><a href="#" className="uppercase sm:text-xl md:text-3xl  font-bold">Logo.</a></h3>
          </div>
          <div className="w-[50%] hidden md:block">
            <ul className="uppercase flex justify-between text-xs">
              <li><a href="">Home</a></li>
              <li>About</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>


          <form class="flex items-center">
            <div class="relative w-full">           
              <input type="text" id="voice-search" class="bg-gray-50 border border-blue-300 text-[#122E99] text-sm rounded-[50px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 placeholder-[#122E99] outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                </svg>
              </button>
            </div>

          </form>


        </div>
      </div>


    </>
  )
}
