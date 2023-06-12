import { AnimatePresence, motion } from 'framer-motion';
import SectionsTitle from "../../../../components/section titles/SectionsTitle";
import { useState } from "react";
import axios from 'axios';


const PopularInstructors = () => {
    const [selectedId, setSelectedId] = useState(false)
    const[PopularInstructors,setPopularInstructors]=useState([])
    useState(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/instructors?sort=${1}`)
        .then(res=>setPopularInstructors(res.data))
    },[])
    return (
        <div>
            <SectionsTitle header={'popular instructors'} title={'instructors followed by'} subtitle={'most students'}></SectionsTitle>

          <div className='mx-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
              PopularInstructors?.map(popularInstructor=>
                <motion.div onClick={()=>setSelectedId(!selectedId)} className='card cursor-pointer bg-gray-400 w-64'>
                <motion.h2 className='text-center p-2'>{popularInstructor?.name}</motion.h2>
                <motion.img src={popularInstructor?.image}></motion.img>
                 {selectedId && <>
                 <motion.div className='flex flex-col items-center justify-center mt-3'>
                 <motion.h1>{popularInstructor?.email}</motion.h1>
                 <motion.h3>{popularInstructor?.followers} Followers</motion.h3>
                 </motion.div>
                 </>}
                 </motion.div>
                )
            }
          </div>

         
        </div>
    );
};

export default PopularInstructors;