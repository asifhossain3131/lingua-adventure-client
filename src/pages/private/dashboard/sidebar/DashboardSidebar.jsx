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
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
const DashboardSidebar = () => {
  const{logOut}=useContext(AuthContext)
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
        {infoName:'Manage Classes',  icon:<BuildingOffice2Icon className="h-5 w-5"></BuildingOffice2Icon>},
        {infoName:'Manage Users',route:'/dashboard/manageusers', icon:<UserGroupIcon className="h-5 w-5"></UserGroupIcon>},
        {infoName:'Enrollments', route:'/dashboard/paymenthistory', icon:<TableCellsIcon className="h-5 w-5"></TableCellsIcon>},
    ]
    const instructorsInfo=[
        {infoName:'Instructor Home', route:'/', icon: <HomeIcon className="h-5 w-5"></HomeIcon>},
        {infoName:'Add A Class', route:'/dashboard/addaclass', icon:<FolderPlusIcon className="h-5 w-5"></FolderPlusIcon>},
        {infoName:'My Classes',route:'/dashboard/instructorpublishedclass', icon:<DocumentChartBarIcon className="h-5 w-5"></DocumentChartBarIcon>},
        ]
    const role='admin'
    return (
        <Card className="  min-h-screen bg-gray-200 w-1/4 p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {role==='user'? 'User' : role==='admin'? 'Admin' : 'Instructor'} Dashboard
        </Typography>
      </div>
     {role==='user' && <>  <List className="border-b-2 border-blue-gray-700">
       {
        usersInfo?.map(userInfo=>
            <ListItem onClick={()=>navigate(userInfo.route)}>
            <ListItemPrefix>
           {userInfo.icon}
            </ListItemPrefix>
            {userInfo?.infoName}
          </ListItem>
            )
       }
      </List></>}
      {
        role==='admin' && <>  <List className="border-b-2 border-blue-gray-700">
        {
         adminInfo?.map(admin=>
             <ListItem onClick={()=>navigate(admin.route)}>
             <ListItemPrefix>
            {admin.icon}
             </ListItemPrefix>
             {admin?.infoName}
           </ListItem>
             )
        }
       </List></>
      }
      {
        role==='instructor' && <>  <List className="border-b-2 border-blue-gray-700">
        {
         instructorsInfo?.map(instructor=>
             <ListItem onClick={()=>navigate(instructor.route)}>
             <ListItemPrefix>
            {instructor.icon}
             </ListItemPrefix>
             {instructor?.infoName}
           </ListItem>
             )
        }
       </List></>
      }
       <ListItem onClick={()=>navigate('/')}>
          <ListItemPrefix>
            <BuildingLibraryIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
       <ListItem>
          <ListItemPrefix onClick={()=>logOut()}>
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
    </Card>
    );
};

export default DashboardSidebar;