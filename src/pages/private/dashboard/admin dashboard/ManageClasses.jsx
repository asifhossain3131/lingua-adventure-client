import { useQuery } from "@tanstack/react-query";
import useTokenSecure from "../../../../hooks/useTokenSecure";
import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import SectionsTitle from "../../../../components/section titles/SectionsTitle";
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const TABLE_HEAD = ["Class", "Instructor", "Current Status", "Status Update", "Feedback"];
const ManageClasses = () => {
    const { register, handleSubmit,reset } = useForm();
    const{loading,user}=useContext(AuthContext)
    const[tokenSecure]=useTokenSecure()
    const{data:allClasses=[],refetch}=useQuery({
        queryKey:['classes'],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axios.get(`${import.meta.env.VITE_SERVER_URL}/classes`)
            return res?.data
        }
    })

    const handleStatusUpdate=(id,classname,status)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'bg-green-600 p-2 rounded text-white ms-4',
              cancelButton: 'bg-red-600 p-2 rounded text-white'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: `Want to update as ${status}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: `Yes, ${status} it!`,
            cancelButtonText: 'No, later on!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
             tokenSecure.patch(`/class/${id}?status=${status}`)
             .then(res=>{
                refetch()
                swalWithBootstrapButtons.fire(
                    'Updated!!',
                    `Class has been ${status}.`,
                    'success'
                  )
             })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Pending for status :)',
                'error'
              )
            }
          })
    }
    const [open, setOpen] = useState(false);
    const [classid,setClassId]=useState('')
 
    const handleOpen = (id) => {
        setOpen(!open)
        setClassId(id);
    }

    const handleFeedback=data=>{
         const{feedback}=data
        tokenSecure.patch(`/class/${classid}?feedback=${feedback}&status=${'denied'}`)
        .then(res=>{
           setOpen(!open)
           reset()
           toast.success('Feedback sent')
        })
    }
    return (
        <div>
            <SectionsTitle header={'manage classes'} title={'pending classes waiting'} subtitle={'for status update'}></SectionsTitle>
            <Fragment>
            <Card className="h-full w-10/12 mx-auto">
      <CardBody className="overflow-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allClasses?.map(({_id, classname, image,email, instructorName, price, status,totalSeats }, index) => {
              const isLast = index === allClasses?.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={image} alt={classname} size="md" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {classname}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                        Seats: {totalSeats} <br /> price:${price}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {instructorName}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {email}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status==='pending' ? "Pending" :status==='denied'?'Denied': "Approved"}
                        color={status==='pending' ? "yellow" :status==='denied'?'red': "green"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal flex flex-col space-y-2">
                    <Button  disabled={status==='approved'} onClick={()=>handleStatusUpdate(_id,classname,'approved')} color="green" size="sm">Approved</Button>
                    <Button  disabled={status==='denied'} onClick={()=>handleStatusUpdate(_id,classname,'denied')} color="red" size="sm">Deny</Button>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Send feedback">
                      <IconButton  onClick={()=>handleOpen(_id)} disabled={status==='pending' || status==='approved'} variant="text" color="blue-gray">
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
    <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Write your feedback.</DialogHeader>
        <DialogBody divider>
     <form  onSubmit={handleSubmit(handleFeedback)}>
     <div className="w-full">
        <Textarea {...register("feedback", { required: true })} label="Feedback" />
    </div>
    <Button type="submit" variant="gradient" color="green" >
            <span>Send Feedback</span>
          </Button>
     </form>
        </DialogBody>
      </Dialog>

    </Fragment>
        </div>
    );
};

export default ManageClasses;