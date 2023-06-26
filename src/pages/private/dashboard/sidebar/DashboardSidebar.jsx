import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
   BookmarkIcon,
   CurrencyDollarIcon,
   DocumentCheckIcon, ArrowRightOnRectangleIcon,BuildingLibraryIcon,
   HomeIcon, FolderPlusIcon,DocumentChartBarIcon,
   HandThumbUpIcon,BuildingOffice2Icon,UserGroupIcon,TableCellsIcon,
  } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useRole from "../../../../hooks/useRole";
import Spinner from "../../../../components/page background/Spinner";
import arrow from '../../../../assets/arrow.png'
const DashboardSidebar = () => {
  const{logOut}=useContext(AuthContext)
  const [open,setOpen]=useState(true)
    const navigate=useNavigate()
    const usersInfo=[
        {infoName:'User Home', route:'/dashboard', icon: <HomeIcon className="h-5 w-5"></HomeIcon>},
        {infoName:'My Selected Classes', route:'/dashboard/myselectedclasses', icon:<BookmarkIcon className="h-5 w-5"></BookmarkIcon>},
        {infoName:'My Enrolled Classes',route:'/dashboard/myenrolledclasses', icon:<DocumentCheckIcon className="h-5 w-5"></DocumentCheckIcon>},
        {infoName:'Payment History', route:'/dashboard/paymenthistory', icon:<CurrencyDollarIcon className="h-5 w-5"></CurrencyDollarIcon>},
        {infoName:'Reviews', icon: <HandThumbUpIcon  className="h-5 w-5"></HandThumbUpIcon>}
    ]

    const adminInfo=[
        {infoName:'Admin Home', route:'/', icon: <HomeIcon className="h-5 w-5"></HomeIcon>},
        {infoName:'Manage Classes', route:'/dashboard/manageclasses', icon:<BuildingOffice2Icon className="h-5 w-5"></BuildingOffice2Icon>},
        {infoName:'Manage Users',route:'/dashboard/manageusers', icon:<UserGroupIcon className="h-5 w-5"></UserGroupIcon>},
        {infoName:'Enrollments', route:'/dashboard/paymenthistory', icon:<TableCellsIcon className="h-5 w-5"></TableCellsIcon>},
    ]
    const instructorsInfo=[
        {infoName:'Instructor Home', route:'/', icon: <HomeIcon className="h-5 w-5"></HomeIcon>},
        {infoName:'Add A Class', route:'/dashboard/addaclass', icon:<FolderPlusIcon className="h-5 w-5"></FolderPlusIcon>},
        {infoName:'My Classes',route:'/dashboard/instructorpublishedclass', icon:<DocumentChartBarIcon className="h-5 w-5"></DocumentChartBarIcon>},
        ]
    const [role,isRoleLoading]=useRole()  
    if(isRoleLoading){
      return <Spinner></Spinner>
    }  
    return (
        <Card className={`${open? 'w-72':'w-20'}  min-h-screen bg-gray-200 relative duration-300 p-4 shadow-xl shadow-blue-gray-900/5`}>
          <img onClick={()=>setOpen(!open)} src={arrow} alt="" className={`absolute w-8 border-2 p-1 duration-300 rounded-full bg-gray-400 border-zinc-700 cursor-pointer -right-3 top-9 ${!open && 'rotate-180'}`} />
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className={`font-semibold text-black text-2xl origin-left duration-500 ${!open && 'scale-0'}`}>
          {role==='user'? 'User' : role==='admin'? 'Admin' : 'Instructor'} Dashboard
        </Typography>
      </div>
     {role==='user' && <>  <List className={`${open && 'border-b-2'} border-blue-gray-700`}>
       {
        usersInfo?.map((userInfo,i)=>
            <ListItem key={i} onClick={()=>navigate(userInfo.route)} className="hover:bg-blue-800">
            <ListItemPrefix>
           {userInfo.icon}
            </ListItemPrefix>
            <span className={`font-semibold ${!open && 'hidden origin-left duration-200'}`}>{userInfo?.infoName}</span>
          </ListItem>
            )
       }
      </List></>}
      {
        role==='admin' && <>  <List className={`${open && 'border-b-2'} border-blue-gray-700`}>
        {
         adminInfo?.map((admin,i)=>
             <ListItem key={i} onClick={()=>navigate(admin.route)} className="hover:bg-blue-800">
             <ListItemPrefix>
            {admin.icon}
             </ListItemPrefix>
             <span className={`font-semibold ${!open && 'hidden origin-left duration-200'}`}>{admin?.infoName}</span>
           </ListItem>
             )
        }
       </List></>
      }
      {
        role==='instructor' && <>  <List className={`${open && 'border-b-2'} border-blue-gray-700`}>
        {
         instructorsInfo?.map((instructor,i)=>
             <ListItem key={i} onClick={()=>navigate(instructor.route)} className="hover:bg-blue-800">
             <ListItemPrefix>
            {instructor.icon}
             </ListItemPrefix>
            <span className={`font-semibold ${!open && 'hidden origin-left duration-200'}`}> {instructor?.infoName}</span>
           </ListItem>
             )
        }
       </List></>
      }
       <ListItem  onClick={()=>navigate('/')}>
          <ListItemPrefix>
            <BuildingLibraryIcon className="h-5 w-5" />
          </ListItemPrefix>
         <span className={`font-semibold ${!open && 'hidden origin-left duration-200'}`}> Home</span>
        </ListItem>
       <ListItem>
          <ListItemPrefix onClick={()=>logOut()}>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span className={`font-semibold ${!open && 'hidden origin-left duration-200'}`}>Log Out</span>
        </ListItem>
    </Card>
    );
};

export default DashboardSidebar;