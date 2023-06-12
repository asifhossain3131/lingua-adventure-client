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

          <motion.div onClick={()=>setSelectedId(!selectedId)} className='card bg-red-600 w-96'>
         <motion.h2>jjljljlj</motion.h2>
        
          </motion.div>

          <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>fdfsdf</motion.h5>
      <motion.h2>dfsdfsdf</motion.h2>
      <motion.button onClick={() => setSelectedId(false)} />
    </motion.div>
  )}
</AnimatePresence>
 
        </div>
    );
};

export default PopularInstructors;