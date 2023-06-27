import { Button } from "@material-tailwind/react";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import SectionsTitle from "../../../../components/section titles/SectionsTitle";

const Experts = () => {
  return (
    <div>
     <SectionsTitle header={'second language'} title={'why learning second language is important?'}></SectionsTitle>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly mx-12">
        <ReactPlayer
          width={350}
          url="https://www.youtube.com/watch?v=o_XVt5rdpFY"
        />
        <div className="lg:w-1/2 flex flex-col gap-y-8 justify-center">
          <h1 className="font-semibold text-2xl">Learning second language is fun</h1>
          <p className="font-medium text-gray-700">
            There are tangible benefits to being bilingual—it can improve your
            brain and memory functions, boost your creativity and self-esteem,
            help in your career opportunities, as well as increase your
            understanding of the language you already speak. <br /> Knowing the same language connects us to one another. We use language to share information, thoughts, and ideas, and these viewpoints collectively create culture. Learning a second language connects you to a whole new group of people and their culture.
          </p>
          <Link to='/classes'>
            <Button variant="gradient">Enroll a class</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experts;
