import React from 'react';
import SectionsTitle from '../../../../components/section titles/SectionsTitle';

const Facilities = () => {
  const allFacilities= [   
          {
            "id": 1,
            "reasonTitle": "Immersive Learning",
            "reason": "Our programs provide immersive language learning experiences, allowing you to practice your skills in real-life situations.",
            "icon": "https://cdn-icons-png.flaticon.com/128/10620/10620623.png"
          },
          {
            "id": 2,
            "reasonTitle": "Expert Instructors",
            "reason": "Our team of experienced and passionate language instructors are dedicated to helping you achieve your language goals.",
            "icon": "https://t4.ftcdn.net/jpg/05/87/71/95/240_F_587719535_uxsnMgyo1jlYGuaW8t4on3Z35bAAlMYL.jpg"
          },
          {
            "id": 3,
            "reasonTitle": "Small Class Sizes",
            "reason": "power of individualized attention. Our small class sizes ensure that each student receives ample opportunities from instructors.",
            "icon": "https://cdn-icons-png.flaticon.com/128/1654/1654193.png"
          },
          {
            "id": 4,
            "reasonTitle": "Flexible Learning",
            "reason": "We understand that everyone has different schedules and learning preferences. That's why we offer flexible learning options.",
            "icon": "https://cdn-icons-png.flaticon.com/128/3322/3322835.png"
          },
          {
            "id": 5,
            "reasonTitle": "Rich Cultural",
            "reason": "Language learning is not just about vocabulary and grammar; it's about exploring different cultures too that gives you different feelings",
            "icon": "https://cdn-icons-png.flaticon.com/128/1534/1534952.png"
          },
          {
            "id": 6,
            "reasonTitle": "Modern Facilities",
            "reason": "Our school is equipped with modern facilities, including multimedia classrooms, interactive learning tools, and a resourceful library.",
            "icon": "https://cdn-icons-png.flaticon.com/128/2920/2920249.png"
          },
          {
            "id": 7,
            "reasonTitle": "Supportive Community",
            "reason": "Join our vibrant community of language learners from all over the world. Through group projects, language clubs, and social events.",
            "icon": "https://cdn-icons-png.flaticon.com/128/2058/2058768.png"
          },
          {
            "id": 8,
            "reasonTitle": "Progress Tracking",
            "reason": "We believe in tracking your progress and celebrating your achievements. Our regular assessments and progress reports ensure you motivated.",
            "icon": "https://cdn-icons-png.flaticon.com/128/4891/4891937.png"
          }
        ]
      
    return (
        <div>
         <SectionsTitle header={'why us?'} title={'we facilitate'}></SectionsTitle>
           <div className='flex items-center lg:mx-12'>
              <div className='space-y-4'>
                {
                    allFacilities.slice(0,4).map(({id,reasonTitle,reason,icon})=>
                    <div className='flex items-center gap-4 w-/12 lg:w-96' key={id}>
                        <img className='w-[80px] hover:bg-yellow-700 p-3 rounded-full cursor-pointer' src={icon} alt="" />
                         <div>
                            <h1 className='font-semibold text-2xl mb-2'>{reasonTitle}</h1>
                            <p className='text-gray-700'>{reason}</p>
                         </div>
                    </div>
                    )
                }
              </div>
              <div>
                <img className='hidden lg:block' src="https://img.freepik.com/free-photo/student-man-pointing-back_1368-9224.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais" alt="" />
              </div>
              <div className='space-y-4'>
                {
                    allFacilities.slice(4).map(({id,reasonTitle,reason,icon})=>
                    <div className='flex items-center gap-4 w-/12 lg:w-96' key={id}>
                        <img className='w-[80px] hover:bg-yellow-700 p-3 rounded-full cursor-pointer' src={icon} alt="" />
                         <div>
                            <h1 className='font-semibold text-2xl mb-2'>{reasonTitle}</h1>
                            <p className='text-gray-700'>{reason}</p>
                         </div>
                    </div>
                    )
                }
              </div>
           </div>
        </div>
    );
};

export default Facilities;