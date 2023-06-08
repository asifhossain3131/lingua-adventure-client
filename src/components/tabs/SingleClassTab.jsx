import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const SingleClassTab = ({courseClass}) => {
    const{courseCurriculums,introVideo,overview}=courseClass
    const data = [
        {
          label: "Overview",
          value: "overview",
          desc: overview
        },
        {
          label: "Intro-Video",
          value: "intro",
          desc: introVideo,
        },
        {
          label: "Review",
          value: "review",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        }
      ];
      const embedUrl = `https://www.youtube.com/watch?v=G7U7vt9bGy8`;

    return (
        <div className="w-10/12 mx-auto mt-12 h-[300px]">
            <Tabs value="overview">
  <TabsHeader>
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody>
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {
            value==='intro'? <>
            <video className="h-[300px] w-10/12 mx-auto rounded-lg" controls autoPlay>
      <source    controls
        className="w-full h-full"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen />
      Your browser does not support the video tag.
    </video>
            </>
            
            :'nai'
        }
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
        </div>
    );
};

export default SingleClassTab;