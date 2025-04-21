// import { useState } from "react";
// import useDebounce from "@/hooks/useDebounce";
import { Accordion, AccordionItem } from "@/components/Accordion";
import { Tab, Tabs } from "@/components/Tabs";

function Home() {
  // const [preview, setPreview] = useState(null);
  // const inputValue = useDebounce("", 500);

  return (
    <>
      <h1>Home page</h1>
      {/* <input type="text" name="" id="" value={inputValue} onChange={() => {}} />
      <img src={preview} alt="" width={200} />
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={(e) => {
          const image = e.target.files[0];
          URL.revokeObjectURL(preview);
          setPreview(URL.createObjectURL(image));
        }}
      /> */}
      <fieldset>
        <legend>Tabs</legend>
        <Tabs defaultIndex={0} onChange={(index) => console.log(index)}>
          <Tab title="Tab 1">Content of Tab 1</Tab>
          <Tab title="Tab 2">Content of Tab 2</Tab>
          <Tab title="Tab 3">Content of Tab 3</Tab>
          <Tab title="Tab 4">Content of Tab 4</Tab>
          <Tab title="Tab 5">Content of Tab 5</Tab>
        </Tabs>
      </fieldset>

      <fieldset>
        <legend>Accordion</legend>
        <Accordion
          defaultIndex={0}
          onChange={(index) => console.log(index)}
          collapseOthers={true}
        >
          <AccordionItem header="Accordion 1">
            Nội dung của Accordion 1
          </AccordionItem>
          <AccordionItem header="Accordion 2">
            Nội dung của Accordion 2
          </AccordionItem>
          <AccordionItem header="Accordion 3">
            Nội dung của Accordion 3
          </AccordionItem>
        </Accordion>
      </fieldset>
    </>
  );
}

export default Home;
