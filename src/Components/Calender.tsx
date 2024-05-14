const Calender = () => {
  return (
    <div className="flex w-[100%]">


<div className="bg-white h-screen w-[18%]">
    <img src="/public/Images/Logo.png" className=" p-6 "/>
    <div className=" space-y-3 p-2">

    <div className="">
    <ul className=" space-y-1">
      <span className="text-sm px-5 font-medium">MENU</span>
      <li className="hover:border border-blue-400 py-1 rounded-lg px-4">
        <a href="/" className="flex gap-3">
        <img src="/public/Images/element.svg"/>
        <span className="text-slate-400">Dashboard</span>
        </a>
      </li>

      <li className=" py-1 rounded-lg px-5 hover:border border-blue-400">
        <a href="Message" className="flex gap-3">
        <img src="/public/Images/message-textsolid.svg"/>
        <span className=" text-slate-400">Message</span>
        </a>
      </li>

      <li className="py-1 rounded-lg px-5 bg-blue-400">
        <a href="Calender" className="flex gap-3">
          <img src="/public/Images/calendarplain.svg"/>
          <span className=" text-white">Calender</span>
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



    </div>
  )
}
export default Calender