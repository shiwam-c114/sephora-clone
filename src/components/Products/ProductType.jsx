import React from "react";
import makeupstyles from "./Styles/Makeup.module.css";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export const ProductType = ({ type }) => {
  return (
    <UnorderedList className={makeupstyles.typeContainer}>
      {type?.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
};
