import React from "react";
import { ProductType } from "../components/Products/ProductType";
import { ProductFilters } from "../components/Products/ProductFilters";
import { ProductList } from "../components/Products/ProductList";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import makeupstyles from "./Styles/Makeup.module.css";

export const BathNBody = () => {
  const type = [
    "Bath & Shower (131)",
    "Body Moisturizers (261)",
    "Body Care (132)",
    "Value & Gifts Sets(12)",
    "Candles & Home Scents (208)",
    "Sunscreen (79)",
    "Self Tanners (45)",
    "Beauty Supplements (67)",
    "Mini Size (45)",
  ];
  const filters = [
    {
      title: "Pickup & Delivery",
      filterOptions: [
        "Pickup : Choose a store",
        "Same-day Delivery: Set Your Location",
      ],
    },
    {
      title: "New",
      filterOptions: ["New(171)"],
    },
    {
      title: "Rating",
      filterOptions: ["4 & Up", "3 & Up", "2 & Up", "1 & Up"],
    },
    {
      title: "Brand",
      filterOptions: [
        "Sephora Favorites",
        "Supergoop",
        "Sol de Janeio",
        "LANEIGE",
        "SEPHORA COLLECTION",
        "Blossance",
        "GUERLAIN",
        "Joise Maran",
        "Dr. Dennis Gross Skincare",
        "Shiseido",
      ],
    },
    {
      title: "Concerns",
      filterOptions: [
        "Dullness / Uneven tecture",
        "Uneven skin tone",
        "Redness",
        "Dark Spots",
        "Acne/ Blemishes",
        "Dark circles",
        "Fine-lines/ Wrinkles",
        "Anti-aging",
        "Volumizing",
      ],
    },
    {
      title: "Sale",
      filterOptions: ["Sale"],
    },
    {
      title: "Ingredient Preferences",
      filterOptions: [
        "Vegan",
        "Clean Planet Positive",
        "Paraben-Free",
        "Clean at Sephora",
        "AHA/ Glycolic Acid",
        "Salicylic Acid",
        "Oil-free",
        "Sulfate-free",
        "Antioxidants",
        "Vitamin C",
      ],
    },
    {
      title: "Finish",
      filterOptions: [
        "Matte (444)",
        "Shimmer (140)",
        "High Shine (149)",
        "Metallic (58)",
        "Satin (139)",
        "Radiant (247)",
        "Glitter (23)",
        "Natural (362)",
        "Creme (6)",
        "Gel (2)",
      ],
    },
    {
      title: "Benefits",
      filterOptions: [
        "Hydrating (178)",
        "Plumping(57)",
        "Long-Wearing(216)",
        "Transfer-proof(68)",
        "Waterproof(92)",
        "Volumizing(147)",
        "Lengthening(122)",
        "Curling (66)",
        "Transfer-resistant (82)",
        "Color-correcting (29)",
      ],
    },
    {
      title: "Formulation",
      filterOptions: [
        "Cream",
        "Wipes",
        "Mask",
        "Oil",
        "Liquid",
        "Rollerball",
        "Pressed Powder",
        "Balm",
        "Stick",
        "Gel",
      ],
    },
    {
      title: "Color Family",
      filterOptions: [
        "Nude (307)",
        "Red (215)",
        "Berry (202)",
        "Unconventional (67)",
        "Pink (347)",
        "Coral (173)",
        "Black (247)",
        "Brown (143)",
        "Universal (83)",
        "Gold (64)",
      ],
    },
    {
      title: "Shopping Preferences",
      filterOptions: [
        "BIPOC-Owned Brands",
        "Black-Owned Brands",
        "Only at Sephora",
        "Best of Allure",
        "Luxury Makeup",
        "Luxury Beauty",
        "Luxury SKincare",
        "Luxury Frangrance",
        "Luxury Hair",
      ],
    },
    {
      title: "Skin Type",
      filterOptions: ["Combination", "Normal ", "Oily", "Dry", "Sensitive"],
    },
    {
      title: "Coverage",
      filterOptions: [
        "Medium (181)",
        "Full (123)",
        "Sheer (31)",
        "Light (170)",
        "Buildable (30)",
      ],
    },
    {
      title: "Size",
      filterOptions: ["Mini (461)", "Value (37)"],
    },
    {
      title: "Age Range",
      filterOptions: [
        "16+ (98)",
        "20s (197)",
        "30s (198)",
        "40s (198)",
        "50+ (175)",
      ],
    },
    {
      title: "Volume",
      filterOptions: ["Natural (12)", "Dramatic (12)", "Full (8)"],
    },
    {
      title: "Price-Range",
      filterOptions: [
        "Under $25",
        "$25 to $50",
        "$50 to $100",
        "$100 and above",
      ],
    },
    {
      title: "Bristle-Type",
      filterOptions: ["Synthetic (135)", "Natural 196)"],
    },
    {
      title: "Sun Protections",
      filterOptions: ["SPF 30 and  under (64)", "SPF ove 30 (20)"],
    },
    {
      title: "Type",
      filterOptions: [
        "Brow Brush (4)",
        "Foundation Brush (28)",
        "Powder Brush (20)",
        "Shadow Brush (18)",
        "Concealer (18)",
        "Crease Brush (15)",
        "Blush Brush",
        "Highlighter Brush (10)",
        "Nail Care(5)",
        "Nail Sets (4)",
      ],
    },
    {
      title: "Fragrance Family",
      filterOptions: ["Floral (2)"],
    },
    {
      title: "Fragrance Type",
      filterOptions: ["Warm Florals(2)"],
    },
  ];

  return (
    <>
      <Box className={makeupstyles.container}>
        <Box className={makeupstyles.leftContainer}>
          <h1 className={makeupstyles.pageHeading}>Bath & Body</h1>
          <ProductType type={type} />
          <h3
            style={{
              paddingLeft: "35px",
              fontWeight: "600",
              color: "grey",
              marginBottom: "-10px",
              marginTop: "40px",
            }}
          >
            Filters
          </h3>
          <ProductFilters filters={filters} />
        </Box>
        <Box className={makeupstyles.rightContainer}>
          <Box>
            <UnorderedList
              className={makeupstyles.categoryContainer}
              display="grid"
              gridTemplateColumns="repeat(5,1fr)"
            >
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
                Sephora Collection
                <img
                  src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/sephoracollection.svg"
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
                Value Size
                <img
                  src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/value_size.svg"
                  alt=""
                />
              </ListItem>
              <ListItem>
                Allure Best of Beauty:Bath & Body
                <img
                  src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg"
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
            </UnorderedList>
          </Box>

          <ProductList title={"bathNBody"} />
        </Box>
      </Box>
    </>
  );
};
