import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    List,
    ListItemSuffix,
    IconButton,
    ListItem,
  } from "@material-tailwind/react";
  import YouTube from 'react-youtube';
  import { LockClosedIcon } from "@heroicons/react/24/solid";



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

    //  youtube video config 
      const opts = {
        height: '400',
        width: '600',
        playerVars: {
          autoplay: 0,
        },
      };
    return (
        <div className="w-10/12 mx-auto mt-12 h-[450px]">
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
         <div className="lg:w-1/2 mx-auto">
         <YouTube  videoId={'G7U7vt9bGy8'} opts={opts} />
         </div>
            </>:
            value==='overview'? <>
            <h1><span className="text-xl">Overview:</span> {desc}</h1>
            <div className="mx-auto lg:w-1/2 mt-6">
                {
                    courseCurriculums.map(curriculam=>
                        <Card className="w-96">
                        <List className="bg-yellow-700 border-b-2">
                          <ListItem ripple={false} className="py-1 pr-1 pl-4">
                           {curriculam}
                            <ListItemSuffix>
                              <IconButton variant="text" color="blue-gray">
                                <LockClosedIcon className="h-5 w-5" />
                              </IconButton>
                            </ListItemSuffix>
                          </ListItem>
                        </List>
                      </Card>
                        )
                }
            </div>
            </>
            : 'Coming soon'
        }
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
        </div>
    );
};

export default SingleClassTab;