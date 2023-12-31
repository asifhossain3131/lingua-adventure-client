import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import { Card, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';

const MyEnrolledClasses = () => {
    const TABLE_HEAD = ["" ,"Class Name", "Instructor", "Price", "Details"]
    const[enrolledClasses]=useEnrolledClasses()
    return (
        <div>
            <SectionsTitle header={'enrolled classes'} title={'the more knowledge'} subtitle={'the more experiences'}></SectionsTitle>
            <Card className="overflow-auto h-full w-9/12 mx-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head,i) => (
              <th key={i} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
          {enrolledClasses?.map(({courseName,instructor,price }, index) => {
            const isLast = index === enrolledClasses.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={courseName}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {index+1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {courseName}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {instructor}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    ${price}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Link to={`/singleClass/${courseName}`}><Typography as="a"  variant="small" color="blue" className="font-medium">
                    View Details
                  </Typography></Link>
                </td>
              </tr> 
            );
          })}
        </tbody>
      </table>
    </Card>
        </div>
    );
};

export default MyEnrolledClasses;