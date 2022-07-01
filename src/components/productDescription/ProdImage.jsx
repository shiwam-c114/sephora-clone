import React from "react";
import "./ProdImage.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";

function ProdImage({ heroImage }) {
  return (
    <div>
      <div className="sliderImg">
        {/* <Tabs defaultIndex={1}>
  <TabPanels>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-main-zoom.jpg?imwidth=612'
      />
    </TabPanel> */}
        {/* <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-02-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-03-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-04-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-05-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-06-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-07-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-08-zoom.jpg?imwidth=612'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='500px'
        fit='cover'
        src='https://www.sephora.com/productimages/sku/s2404655-av-95-zoom.jpg?imwidth=612'
      />
    </TabPanel> */}
        {/* </TabPanels>
  <TabList>
    <Tab>1</Tab> */}
        {/* <Tab>2</Tab>
    <Tab>3</Tab>
    <Tab>4</Tab>
    <Tab>5</Tab>
    <Tab>6</Tab>
    <Tab>7</Tab>
    <Tab>8</Tab>
    <Tab>9</Tab> */}

        {/* </TabList>
</Tabs> */}

        <img src={heroImage} />
      </div>
    </div>
  );
}

export default ProdImage;
