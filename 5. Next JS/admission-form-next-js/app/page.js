
export default function page() {
  return (
    <>
      <section className="bg-gray-200 py-9 px-3 md:px-0">
        <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg">
          <div className="text-center sm:my-7">
            <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">Admission Form</h1>
            <h3 className="text-gray-400 font-bold text-center mt-3 sm:mt-5 text-xs sm:text-[15px]">The field with * mark is required</h3>
            <h1 className="text-center sm:text-xl text-[#3c6e71] mt-2 sm:mt-5 text-md font-medium mb-5 sm:mb-0">Personal Information</h1>
          </div>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="firstName" type="text" placeholder="First Name *" />
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="lastName" type="text" placeholder="Last Name " />
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="fatherName" type="text" placeholder="Father Name *" />
              </div>

              <div class="">
                <div class="relative">
                  <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="religion">
                    <option>Selet Religion *</option>
                    <option>Islam</option>
                    <option>Other</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="fatherName" type="text" placeholder="Profession" />
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="fatherName" type="email" placeholder="Email *" />
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="phone" type="text" placeholder="Phone Number *" />
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="whatsapp" type="email" placeholder="Whatsapp *" />
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="dob" type="date" />
                <label className="text-xs text-[#3c6e71] font-bold" htmlFor="">Date of Birth *</label>
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="id" type="text" placeholder="CNIC or B-Form Number" />
                <label className="text-xs text-[#3c6e71] font-bold" htmlFor="">CNIC or B-Form Number (only numbers without hyphens), we will verify it.</label>
              </div>

              <div className="sm:col-span-2">
                <div class="relative">
                  <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="religion">
                    <option>Selet Highest Qualification *</option>
                    <option>None</option>
                    <option>Primary</option>
                    <option>Middle</option>
                    <option>Matriculation</option>
                    <option>O-Level</option>
                    <option>Intermediate</option>
                    <option>A-Level</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Post-Graduate</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline" id="address" type="text" placeholder="Address" />
              </div>

              <div className="flex items-center gap-3 text-[#3c6e71] font-bold">
                <label htmlFor="">Gender *:</label>
                <input className="" type="radio" name="gender" id="male"/>
                <label htmlFor="male">Male</label>
                <input className="" type="radio" name="gender" id="female"/>
                <label htmlFor="female">Female</label>
              </div>

            <div className="sm:col-span-2 text-center">
              <button className="bg-[#3c6e71] hover:bg-[#3c6e71e0] transition-all w-full sm:w-[50%] py-2 rounded-xl text-white font-bold my-5">Apply Now</button>
            </div>

            </div>

          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  )
}
