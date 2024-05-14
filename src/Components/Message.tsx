
const Message = () => {
  return (
    <div className="flex w-[100%]">


<div className="bg-white h-screen w-[18%]">
      <img src="/public/Images/Logo.png" className=" p-6 "/>
      <div className=" space-y-3 p-2">

      <div className="">
      <ul className=" space-y-1">
        <span className="text-sm px-5 font-medium">MENU</span>
        <li className=" hover:border border-blue-400 py-1 rounded-lg px-4">
          <a href="/" className="flex gap-3">
          <img src="/public/Images/element.svg"/>
          <span className="text-slate-400">Dashboard</span>
          </a>
        </li>

        <li className=" py-1 rounded-lg px-5 bg-blue-400">
          <a href="Message" className="flex gap-3">
          <img src="/public/Images/message-text.svg"/>
          <span className=" text-white">Message</span>
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





{/* CENTER MENU */}


<div className="h-screen w-[82%]">



<div className="bg-white h-20">

    <div className="flex gap-12 py-5 float-right pr-10">

        <div className="">
        <form className=" inline-flex">
          <input type="text" id="input-box" placeholder="Search by anything" className=" text-sm p-2 rounded-l-lg bg-gray-100 w-60"/>
          <button className="rounded-r-lg bg-blue-400 px-2"><img src="/public/Images/search-normal.svg" className=""/></button>
        </form>
        </div>

        <div className="flex gap-2 self-center">
          <img src="/public/Images/Need Help.svg" className=" size-6"/>
          <img src="/public/Images/notification-bing.svg" className=" size-6"/>
          <img src="/public/Images/Frame 53.svg" className=" size-6"/>
        </div>
    </div>

</div>

<div className=" p-5 space-y-3">
<div className=" text-xl font-semibold">Message</div>

<div className="bg-white w-[30%] rounded-md h-96">
      <div className=" flex self-center gap-5 px-12 py-5">
        <div className="bg-gray-100 p-2 rounded-md">Recruitment Inbox</div>
        <div className=" border border-blue-400 p-2 rounded-md"> Work Inbox </div>
      </div>

      <div className=" border-t border-b">
      <div className=" flex space-x-6 px-5 py-5">
          <div className="relative flex items-center gap-2">
            <input type="text" placeholder="Search..."
            className=" px-7 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <img src="/public/Images/search.svg" className="absolute px-2"/>
          </div>

            <button className="p-4 bg-gray-100 rounded-lg hover:border-2 border-blue-400">
              <img src="/public/Images/filter.svg" className=""/>
            </button>
      </div>
      </div>






</div>


</div>







</div>










    </div>
  )
}
export default Message