import React from "react";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import IconListStyle from "./Styles/IconList.module.css";

function IconList() {
  return (
    <div>
      <Box>
        <UnorderedList
          className={IconListStyle.categoryContainer}
          display="grid"
          gridTemplateColumns="repeat(8,1fr)"
        >
          hello
          <ListItem>
            New{" "}
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Bestsellers{" "}
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Clean{" "}
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Cruelty-Free{" "}
            <img
              src="https://www.sephora.com/contentimages/meganav/icons/crueltyfree.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Mini Size{" "}
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Fragrance Quiz{" "}
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/fragrance_quiz.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Clean Fragrance Guide
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg"
              alt=""
            />
          </ListItem>
          <ListItem>
            Fragrance Notes Guide{" "}
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/fragrances_guide.svg"
              alt=""
            />
          </ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
}

export default IconList;
