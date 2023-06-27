import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTokenSecure from "../../../../hooks/useTokenSecure";
import { toast } from "react-hot-toast";
import SectionsTitle from "../../../../components/section titles/SectionsTitle";

const FreeTrial = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const[interestLanguage,setInterestLanguage]=useState('')
  const[tokenSecure]=useTokenSecure()
 
  const handleFreeTrial = (status) => {
    if (!user) {
      navigate("/login");
    } else {
      if (status === "open") {
        setOpen(!open);
      } else if (status === "confirm") {
         const confirmedInfo={name:user?.displayName,email:user?.email,language:interestLanguage}
          tokenSecure.post('/freeTrial',confirmedInfo)
          .then(res=>{
            if(res.data?.acknowledged===true){
              toast.success('Application for free trial successully')
            }
            else{
              toast.error('Already applied for one trial')
            }
            setOpen(!open)
          })
          .catch(err=>{
         toast.error(err?.message)
          })
      } else {
        setOpen(!open);
      }
    }
  };
 const handleLanguageChange=e=>{
 setInterestLanguage(e.target.value)
 }
  return (
    <>
      <SectionsTitle header={'free trial'} title={'want to have a free trial?'}></SectionsTitle>
      <figure className="relative h-full w-11/12 mx-auto">
        <img
          className="h-[500px] w-full"
          src="https://img.freepik.com/free-photo/group-kids-studying-school_1303-26846.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais"
          alt="nature image"
        />
        <figcaption className="absolute bottom-2/4 left-2/4 text-center w-3/4 -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h3" color="blue-gray">
              Language Classes For All group Of Ages
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              Our qualified and experienced language trainers created special
              programmes to meet your specific needs.
            </Typography>
            <button
              onClick={() => handleFreeTrial("open")}
              className="p-3 bg-blue-700 font-semibold text-white mt-4"
            >
              Start a free trial
            </button>
          </div>
        </figcaption>
      </figure>
      <Dialog
        open={open}
        handler={() => handleFreeTrial("open")}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Complete registration</DialogHeader>
        <DialogBody divider>
        <form className="mt-8 mb-2 lg:w-9/12 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" disabled label="Name" value={user?.displayName} />
          <Input size="lg" label="Email" disabled value={user?.email} />
          <Input onChange={handleLanguageChange} type="text" size="lg" label="Which language?"/>
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
      </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleFreeTrial("cancel")}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleFreeTrial("confirm")}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default FreeTrial;
