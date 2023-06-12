import { MagnifyingGlassIcon, PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useTokenSecure from "../../../../hooks/useTokenSecure";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Member", "Role", "Role Change", "Update"];
const ManageUsers = () => {
    const{loading}=useContext(AuthContext)
    const[tokenSecure]=useTokenSecure()
    const{data:users=[],refetch}=useQuery({
        queryKey:['users'],
        enabled:!loading,
        queryFn:async()=>{
          const res=await tokenSecure.get(`/users`)
          return res.data
        }
    })

    const handleRoleChange=(id,name,role)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: `You want to make ${name} as ${role}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Make ${role}`
      }).then((result) => {
        if (result.isConfirmed) {
          tokenSecure.patch(`/user/${id}?role=${role}`)
          .then(res=>{
            refetch()
            Swal.fire(
              'Successful!',
              `${name} has become ${role} now`,
              'success'
            )
          })
        }
      })
    }
    return (
        <div>
            <SectionsTitle header={'manage users'} title={'users are like a'} subtitle={'friend'}></SectionsTitle>

            <Card className="h-full w-10/12 mx-auto">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Users list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all users
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" color="blue" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head,i) => (
                <th key={i} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map(({ name, email, role, _id }, index) => {
              const isLast = index === users?.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src='' alt={name} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {role}
                      </Typography>
            
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max flex flex-col space-y-2">
                    <Button disabled={role==='admin'} onClick={()=>handleRoleChange(_id, name,'admin')} color="blue" size="sm">Make Admin</Button>
                    <Button disabled={role==='instructor'} onClick={()=>handleRoleChange(_id, name,'instructor')} color="blue-gray" size="sm">Make Instructor</Button>
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
        </div>
    );
};

export default ManageUsers;