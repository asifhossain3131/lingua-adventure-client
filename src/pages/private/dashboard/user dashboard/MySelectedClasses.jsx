import React, { useContext } from 'react';
import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import useSelectedClass from '../../../../hooks/useSelectedClass';
import { Card, Typography } from '@material-tailwind/react';
import useTokenSecure from '../../../../hooks/useTokenSecure';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MySelectedClasses = () => {
  const{user}=useContext(AuthContext)
  const navigate=useNavigate()
  const[,refetch]=useSelectedClass()
  const [tokenSecure]=useTokenSecure()
    const[selectedClasses]=useSelectedClass()
   const handleDelete=course=>{
    tokenSecure.patch(`/cartClass/${course?.courseName}?email=${user?.email}`,user.email,course?.courseName)
    .then(res=>{
      refetch()
    })
   }
    return (
        <div>
            <SectionsTitle header={'my classes'} title={'secure your place'} subtitle={'shortly!'}></SectionsTitle>
            <div>
                {
                    selectedClasses? <>
                    <Card className="overflow-scroll h-full w-9/12 mx-auto mt-12">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  
                </Typography>
              </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Class Name
                </Typography>
              </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Available Seats
                </Typography>
              </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Price
                </Typography>
              </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Payment
                </Typography>
              </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Remove
                </Typography>
              </th>
          </tr>
        </thead>
        <tbody>
          {
            selectedClasses?.map((selectedClass,i)=>
                <tr  className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {i+1}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {selectedClass?.courseName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {selectedClass?.avilableSeats}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography  variant="small" color="blue-gray" className="font-medium">
                    {selectedClass?.price}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography  variant="small" color="green" className="font-medium cursor-pointer">
                   <button onClick={()=>navigate('/dashboard/userpayment')} disabled={selectedClass?.avilableSeats===0}> Pay now</button>
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography onClick={()=>handleDelete(selectedClass)} variant="small" color="red"  className="font-medium cursor-pointer">
                    Delete
                  </Typography>
                </td>
              </tr>
                )
          }
        </tbody>
      </table>
    </Card>
                    </>
                    : 'No Selected Classes found! Select one to have one'
                }
            </div>
        </div>
    );
};

export default MySelectedClasses;