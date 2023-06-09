import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
const InstructorCard = ({instructor}) => {
    const{name,email,image,classes,followers,_id}=instructor
    return (
        <Card className="lg:w-72">
        <CardHeader floated={false} className="h-full">
          <img src={image} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            <p>{email}</p>
            <p>{classes?.length} classes</p>
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-4 pt-2">
        <Button size="md" variant="outlined">See All Classes</Button>
        <Button size="md" variant="outlined">Follow</Button>
        </CardFooter>
      </Card>
    );
};

export default InstructorCard;