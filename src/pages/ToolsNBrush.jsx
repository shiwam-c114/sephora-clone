import React from "react";
import { ProductType } from "../components/Products/ProductType";
import { ProductFilters } from "../components/Products/ProductFilters";
import { ProductList } from "../components/Products/ProductList";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import makeupstyles from "./Styles/Makeup.module.css";

export const ToolsNBrush = () => {
  const type = [
    "Brushes & Applicators (240)",
    "Hair Tools (158)",
    "Beauty Tools (128)",
    "Beauty Accessories (8)",
    "Value & Gift Sets(13)",
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
        "HAUS LABS BY LADY GAGA (7)",
        "MAKE UP FOR EVER (71)",
        "DANESSA MYRICKS BEAUTY",
        "SEPHORA COLLECTION(226)",
        "Too Faced (59)",
        "The Ordinary (3)",
        "NARS(55)",
        "Fenty Beauty by Rihanna (73)",
        "LANEIGE(4)",
        "Bite Beauty (13)",
      ],
    },
    {
      title: "Concerns",
      filterOptions: [
        "Dullness / Uneven tecture (111)",
        "Uneven skin tone (81)",
        "Redness(79)",
        "Dark Spots (64)",
        "Acne/ Blemishes(53)",
        "Dark circles(52)",
        "Fine-lines/ Wrinkles (65)",
        "Anti-aging (50)",
        "Volumizing (5)",
      ],
    },
    {
      title: "Sale",
      filterOptions: ["Sale (131)"],
    },
    {
      title: "Ingredient Preferences",
      filterOptions: [
        "Vegan (1288)",
        "Cruelty-free (729)",
        "Fragrance Free (508)",
        "Clean at Sephora(434)",
        "Hyaluronic Acid (220)",
        "Peptides (91)",
        "Parben-free (1307)",
        "Sulfate-free (636)",
        "Antioxidants (269)",
        "Minerals (50)",
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
        "Pencil (107)",
        "Liquid (480)",
        "Cream (169)",
        "Stick (190)",
        "Serum (36)",
        "Rollerball (17)",
        "Mask (3)",
        "Balm (52)",
        "Pressed powder (356)",
        "Gel (84)",
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
        "BIPOC-Owned Brands (175)",
        "Black-Owned Brands (121)",
        "Only at Sephora (202)",
        "Best of Allure (40)",
        "Luxury Makeup (314)",
        "Luxury Beauty (7)",
        "Luxury SKincare (24)",
        "Luxury Frangrance (1)",
      ],
    },
    {
      title: "Skin Type",
      filterOptions: [
        "Combination (717)",
        "Normal (708) ",
        "Oily (672)",
        "Dry (659)",
        "Sensitive (111)",
      ],
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
          <h1 className={makeupstyles.pageHeading}>Tools & Brushes</h1>
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

          <ProductList title={"toolsNBrushes"} />
        </Box>
      </Box>
    </>
  );
};
