


const Dashboard = () => {
  return (

<div className="flex w-[100%]">


  {/* SIDEBAR */}

    <div className="bg-white h-screen w-[18%]">
    <img src="/public/Images/Logo.png" className=" p-6 "/>
    <div className=" space-y-3 p-2">

    <div className="">
    <ul className=" space-y-1">
      <span className="text-sm px-5 font-medium">MENU</span>
      <li className=" bg-blue-400 py-1 rounded-lg px-4">
        <a href="/" className="flex gap-3">
        <img src="/public/Images/elementwhite.svg"/>
        <span className="text-white">Dashboard</span>
        </a>
      </li>

      <li className=" py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="./Message" className="flex gap-3">
        <img src="/public/Images/message-textsolid.svg"/>
        <span className=" text-slate-400">Message</span>
        </a>
      </li>

      <li className="py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="Calender" className="flex gap-3">
          <img src="/public/Images/calendar.svg"/>
          <span className=" text-slate-400">Calender</span>
        </a>
      </li>
    </ul>
  </div>

  <div className="">
    <ul className="space-y-1">
      <span className="px-5 text-sm font-medium">RECRUITMENT</span>
      <li className="py-1 rounded-lg px-4 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
        <img src="/public/Images/job.svg"/>
          <span className="text-slate-400">Jobs</span>
        </a>
      </li>

      <li className=" py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
        <img src="/public/Images/profile-2user.svg"/>
        <span className="text-slate-400 ">Candidates</span>
        </a>
      </li>

      <li className="py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
          <img src="/public/Images/convert-3d-cube.svg"/>
          <span className=" text-slate-400">My Referrals</span>
        </a>
      </li>

      <li className="py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
          <img src="/public/Images/monitor-mobbile.svg"/>
          <span className=" text-slate-400">Career Site</span>
        </a>
      </li>
    </ul>
  </div>

  <div className="">
    <ul className="">
      <span className="text-sm px-5 font-medium">ORGANIZATION</span>
      <li className="py-1 rounded-lg px-4 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
        <img src="/public/Images/profile-2user.svg"/>
         <span className="text-slate-400">Employee</span>
        </a>
      </li>

      <li className=" py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
        <img src="/public/Images/convert-3d-cube.svg"/>
        <span className="text-slate-400 ">Structure</span>
        </a>
      </li>

      <li className="py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
          <img src="/public/Images/note.svg"/>
          <span className=" text-slate-400">Report</span>
        </a>
      </li>

      <li className="py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="#" className="flex gap-3">
          <img src="/public/Images/setting.svg"/>
          <span className=" text-slate-400">Settings</span>
        </a>
      </li>
    </ul>
  </div>

    </div>

  </div>









 {/* Dashboard MENU */}


  <div className=" h-screen w-[62%] px-3 space-y-3">

<div className="flex justify-between pt-3">
  <div className=" grid ">
    <span className=" font-medium">Dashboard</span>
    <span className=" text-slate-400 text-sm">Hello, Otor John, Welcome to Galucter</span>
  </div>
  <div className="">
        <form className=" inline-flex">
          <input type="text" id="input-box" placeholder="Search by anything" className=" text-sm p-2 rounded-l-lg w-60"/>
          <button className="rounded-r-lg bg-blue-400 px-2"><img src="/public/Images/search-normal.svg" className=""/></button>
        </form>
        </div>
</div>


<div className="flex gap-4">
  <div className=" bg-white w-[33%] p-3 rounded-xl h-24">
          <div className="grid space-y-1">
            <span className="text-slate-300 text-sm">Total Applications</span>
            <span className=" text-2xl font-semibold">5672</span>
          </div>
          <div className="flex">
            <img src="/public/Images/Trend.svg"/>
            <span className=" text-sm font-light">+14% Inc</span>
          </div>

  </div>

  <div className=" bg-white w-[33%] p-3 rounded-xl h-24">
    <div className="grid space-y-1">
      <span className="text-slate-300 text-sm">Shortlisted Candidates</span>
      <span className=" text-2xl font-semibold">3045</span>
      </div>
      <div className="flex">
        <img src="/public/Images/Trend (2).svg"/>
        <span className=" text-sm font-light">+14% Inc</span>
      </div>
  </div>

  <div className=" bg-white w-[33%] p-3 rounded-xl h-24">
    <div className="grid space-y-1">
      <span className="text-slate-300 text-sm">Rejectes Candidates</span>
      <span className=" text-2xl font-semibold">1055</span>
      </div>
      <div className="flex">
        <img src="/Images/Trend (1).svg"/>
        <span className=" text-sm font-light">+14% Inc</span>
      </div>
  </div>


</div>

<div className=" bg-white rounded-xl h-[330px]">

</div>







<div className="flex space-x-5">



  <div className="bg-white w-[56%] h-56 rounded-xl">

  <div>
    <div className="px-5 mt-3 flex justify-between">
    <span className=" font-bold text-xl">Activity Feed</span>
    <div className="flex border rounded-lg w-18 p-1"><span>All Activity</span>
      <img src="/public/Images/Frame 36.svg" className="ml-2"/>
    </div>
    </div>



<div className="space-y-1">

    <div className="flex px-5 pt-3">
        <img src="/public/Images/Frame 39.svg"/>
        <div className="flex space-x-6 ">
          <div className="">
            <span className=" font-semibold text-sm">Patrick Agbo</span> <span className=" text-sm font-light">applied for the job</span> <span className=" font-semibold text-sm">Product Designer</span>
            <div className="text-xs font-extralight">10 mins ago</div>
          </div>
            <div className="  text-xs font-extralight bg-blue-200 text-blue-600 rounded-lg text-center h-6 p-1 ">Applying</div>
        </div>
    </div>

    <div className="flex px-5 pt-3">
        <img src="/public/Images/Frame 39 (1).svg"/>
        <div className="flex space-x-8 ">
          <div>
            <span className=" font-semibold text-sm">Zandra Ameh</span> <span className=" text-sm font-light">Created new Account as a</span> <span className=" font-semibold text-sm">Job Hunt</span>
            <div className="text-xs font-extralight">4 hours ago</div>
          </div>
            <div className="  text-xs font-extralight bg-green-200 text-green-600 rounded-lg text-center h-6 p-1 ">Sign Up</div>
        </div>
    </div>

    <div className="flex px-5 pt-3">
        <img src="/public/Images/Frame 39 (2).svg"/>
        <div className="flex space-x-9 ">
          <div>
            <span className=" font-semibold text-sm">Jane Otor</span> <span className=" text-sm font-light">applied for the job</span> <span className=" font-semibold text-sm">Frontend Engineer</span>
            <div className="text-xs font-extralight">10 mins ago</div>
          </div>
            <div className="  text-xs font-extralight bg-blue-200 text-blue-600 rounded-lg text-center h-6 p-1 ">Applying</div>
        </div>
    </div>

</div>







  </div>






  </div>




  <div className="bg-white w-[42%] rounded-xl px-3">

    <div className=" mt-3 flex justify-between">
        <span className=" font-bold text-xl">Meetings</span>
          <div className="flex border rounded-lg w-18 p-1">
            <span>Create new</span>
            <img src="/public/Images/Frame 36.svg" className="ml-2"/>
          </div>
    </div>




  <div className="space-y-2">

        <div className="  flex ">

          <div className="bg-white grid shadow-md rounded-md text-center w-10">
            <span className=" text-yellow-400">Mon</span>
            <span className="font-semibold">10</span>
          </div>

            <div className="grid -space-y-3 pl-8">
              <span className=" text-lg font-semibold">Interview</span>
              <span className=" text-sm font-light">9:00 am - 11:30 am</span>
            </div>


          <div className=" self-center pl-36">
              <img src="/public/Images/Frame 52.svg"/>
            </div>

        </div>



          <div className=" flex">

            <div className="bg-white grid shadow-md rounded-md text-center w-10">
              <span className=" text-yellow-400">Tue</span>
              <span className="font-semibold">08</span>
            </div>

              <div className="grid -space-y-2 pl-8">
                <span className=" text-lg font-semibold">Organizational meeting</span>
                <span className=" text-sm font-light">9:00 am - 11:30 am</span>
              </div>


              <div className=" self-center pl-16">
                <img src="/public/Images/Frame 52.svg"/>
              </div>

          </div>


        <div className=" flex ">

          <div className="bg-white grid shadow-md rounded-md text-center w-10">
            <span className=" text-yellow-400">Fri</span>
            <span className="font-semibold">11</span>
          </div>

            <div className="grid -space-y-3 pl-8">
              <span className=" text-lg font-semibold">Meeting with the manager</span>
              <span className=" text-sm font-light">9:00 am - 11:30 am</span>
            </div>


            <div className=" self-center pl-10">
              <img src="/public/Images/Frame 52.svg"/>
            </div>

        </div>

  </div>



  </div>



</div>

</div>










{/* RIGHT SIDE */}



<div className="bg-white h-screen w-[20%]">
      <div className="flex  pr-5 gap-5 pt-3 float-right">
        <img src="/public/Images/Need Help.svg"/>
        <img src="/public/Images/notification-bing.svg"/>
        <img src="/public/Images/Frame 53.svg"/>
      </div>

      <div className="px-16">
        <img src="/public/Images/Group 5 (1).png"/>
        <div className="grid ">
        <span className=" font-semibold text-center">Otor John Stephen</span>
        <span className=" font-thin text-xs text-center">Directoe of Recruiting</span>
        </div>
      </div>


      <div>

        <div className=" pt-2">
          <span className="font-semibold px-5">Messages</span>

            <div className="px-5 space-y-2 pt-2">

              <div className="bg-gray-100 rounded-lg py-2 px-2 flex">
                <img src="/public/Images/Frame 27.svg"/>
                <div className="grid">
                  <span className=" font-semibold">Andrew Uchenna</span>
                  <span className="text-xs text-slate-400">Have you planned any deadline...</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg py-2 px-2 flex">
                <img src="/public/Images/Frame 27 (1).svg"/>
                <div className="grid">
                  <span className=" font-semibold">Musa Abdul</span>
                  <span className="text-xs text-slate-400">The candidate has been shortlis...</span>
                </div>
              </div>

            </div>

        </div>


        <div className="pt-4">
          <span className="font-semibold px-5">Recent Added Jobs</span>

          <div className="px-5 space-y-2 pt-2">

              <div className="bg-gray-100 rounded-lg py-2 px-2 flex">
                <img src="/public/Images/Frame 27 (2).svg"/>
                <div className="grid">
                  <span className=" font-semibold">Product Designer</span>
                  <span className="text-xs text-slate-400">Spotify, Singapore - 6 hours ago</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg py-2 px-2 flex">
                <img src="/public/Images/Frame 27 (3).svg"/>
                <div className="grid">
                  <span className=" font-semibold">iOS Developer</span>
                  <span className="text-xs text-slate-400">San Francisco, CA - 2 Days ago</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg py-2 px-2 flex">
                <img src="/public/Images/Frame 27 (4).svg"/>
                <div className="grid">
                  <span className=" font-semibold">Brand Strategist</span>
                  <span className="text-xs text-slate-400">New york, US - 2 Days ago</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg py-2 px-2 flex">
                <img src="/public/Images/Frame 27 (5).svg"/>
                <div className="grid">
                  <span className=" font-semibold">Jr. Frontend Engineer</span>
                  <span className="text-xs text-slate-400">Spotify, Singapore - 2 Days ago</span>
                </div>
              </div>

          </div>

        </div>


      </div>



    </div>









</div>




  )
}
export default Dashboard