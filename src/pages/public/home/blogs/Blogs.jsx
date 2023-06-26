import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Blogs = () => {
  const allBlogs = [
    {
      id: 1,
      title: "The Benefits of Learning a Second Language",
      description:
        "Discover the numerous benefits of learning a second language, from improved cognitive abilities to enhanced career prospects.",
      author: "John Smith",
      date: "2023-06-15",
      image:
        "https://img.freepik.com/free-photo/cheerful-tourists-with-tablet-street_23-2147762285.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais",
      link: "https://www.lucalampariello.com/",
    },
    {
      id: 2,
      title: "Tips for Choosing the Right Language School",
      description:
        "Explore important factors to consider when selecting a language school, including teaching methods, class sizes, and accreditation.",
      author: "Emily Johnson",
      date: "2023-06-10",
      image:
        "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph",
      link: "http://eurolinguiste.com/",
    },
    {
      id: 3,
      title: "How Language Immersion Programs Boost Fluency",
      description:
        "Learn about the advantages of language immersion programs and how they can accelerate your language learning journey.",
      author: "David Anderson",
      date: "2023-06-05",
      image:
        "https://img.freepik.com/free-photo/male-business-executive-giving-speech_107420-63781.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais",
      link: "https://www.omniglot.com/bloggle/",
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-3xl text-center">Our Blog</h1>
      <div className="flex flex-col lg:flex-row gap-4 mx-12">
        {allBlogs.map(
          ({ id, title, description, author, date, image, link }) => (
            <div className="w-96" key={id}>
              <img src={image} alt="" />
              <div className="text-center mt-4 space-y-2">
                <p className="text-gray-700">
                  <small>{date}</small>
                </p>
                <h1 className="font-semibold mx-6">{title}</h1>
                <p>{description}</p>
                <p className="flex items-center gap-x-2 justify-center">
                  <UserCircleIcon className="w-[20px]"></UserCircleIcon>
                  <span className="text-gray-700">{author}</span>
                </p>
              </div>
              <div className="text-center mt-4">
              <a
                className="bg-blue-700 hover:bg-blue-600  p-3 text-white"
                href={link} target="_blank"
              >
                <button>Read more</button>
              </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;
