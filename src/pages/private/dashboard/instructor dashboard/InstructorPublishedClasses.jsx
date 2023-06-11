import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useTokenSecure from '../../../../hooks/useTokenSecure';
import { AuthContext } from '../../../../providers/AuthProvider';
import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import { Avatar, Button, Card, CardBody, CardHeader, Chip, IconButton, Input, Tooltip, Typography } from '@material-tailwind/react';
import { ArrowDownTrayIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const InstructorPublishedClasses = () => {
    const{user,loading}=useContext(AuthContext)
    const[tokenSecure]=useTokenSecure()
    const TABLE_HEAD = ["Course Name", "Enrolled Students", "Status", "Feedback", "Update"];



    const {data:instructorClasses=[], refetch}=useQuery({
            queryKey:['instructorName',user?.displayName],
            enabled:!loading,
            queryFn:async()=>{
                const res=await tokenSecure.get(`/instructorClasses/${user?.displayName}`)
                return res.data
            }
    })
    const handleUpdate=id=>{
        console.log(id);
    }
    return (
        <div>
            <SectionsTitle header={'my classes'} title={'update classes'} subtitle={'have fun!'}></SectionsTitle>
            <Card className="h-full w-10/12 mx-auto">
      <CardBody className="overflow-auto px-0">
        <table className="w-full min-w-max table-auto text-left">
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
            {instructorClasses?.map(
              ({ classname, _id, status, enrolledStudents ,feedback}, index) => {
                const isLast = index === instructorClasses.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography variant="small" color="blue-gray" className="font-bold">
                         {classname}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                       {enrolledStudents}
                      </Typography>
                      </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "approved" ? "green" : status === "pending" ? "amber" : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {feedback}
                      </Typography>
                    </td>
                    <td className={classes}>
                    <Tooltip content="Edit class">
                     <Link to={`/dashboard/updateClass/${_id}`}> <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton></Link>
                    </Tooltip>
                  </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
        </div>
    );
};

export default InstructorPublishedClasses;