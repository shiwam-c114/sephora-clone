import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import "./ProdIngredients.css";

function ProdIngredients() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" className="boxTitleText">
                Ingredients
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              {" "}
              <b>
                Vitamin C 10%: A potent antioxidant that visibly brightens and
                firms without causing irritation and remains stable in the
                bottle. White Shiitake Mushroom Extract:{" "}
              </b>
              Synergistic mushroom blend that visibly corrects dark spots and
              targets the formation of new ones.
            </p>
            <br></br>
            <p>
              Licorice Root Extract: Calms and mitigates the look of
              discoloration and fights the appearance of future dark spots.
            </p>
            <br></br>
            <p>
              {" "}
              Water/Aqua/Eau, Glycerin, 3-O-Ethyl Ascorbic Acid, Squalane,
              Lentinus Edodes Mycelium Extract, Hydroxyethyl Acrylate/Sodium
              Acryloyldimethyl Taurate Copolymer, Glycyrrhiza Glabra (Licorice)
              Root Extract, Sodium Hyaluronate, Citric Acid, Polyacrylate
              Crosspolymer-6, Acacia Senegal Gum, Xanthan Gum, Sodium Gluconate,
              Sodium Citrate, Phenoxyethanol, Ethylhexylglycerin.
            </p>
            <br></br>
            <p>
              <b>
                Clean at Sephora products are formulated without the following
                banned or restricted ingredients (please see Clean at Sephora
                landing page for full list of specific restrictions and
                allowances by category – this is not an exhaustive list):
              </b>
              Acrylates, Aluminum Salts, Animal Musks/Fats/Oils, Benzophenones
              and related compounds, Butoxyethanol, Butylated hydroxyanisole
              (BHA), Butylated hydroxytulolene (BHT) under 0.1% , Carbon Black
              or Black 2, Coal Tar, Ethanolamines, Formaldehyde and Formaldehyde
              Releasing Agents, Hydroquinone, Lead and Lead Acetate, Mercury +
              Mercury Compounds (Thimerisol), Methoxyethanol, Methyl Cellosolve,
              Methylchloroisothiazolinone and Methylisothiazolinone, Mineral
              Oil, Nanomaterials (restrictions for specific nanomaterials only),
              Oxybenzone, Parabens, Petrolatum and Parrafin (USP grade only),
              Phenoxyethanol under 1%, Phthalates, Plastic Microbeads,
              Polyacrylamide & Acrylamide, Resorcinol, Retinyl Palmitate,
              Styrene, Sulfates, Talc (no detection of asbestos) , Toluene,
              Triclosan and Triclocarban, Undisclosed Synthetic Fragrance (under
              1% and formulated without Acetaldehyde, Acetone, Acetonitrile,
              Benzalkonium chloride, BPA, EDTA, Methylene chloride, PTFE, PFOA),
              1, 4, Dioxane (ingredients must comply with impurity thresholds),
              Octinoxate, PFAS compounds, Nitromusks and Polycyclic Musks,
              Ethoxylated Ingredients (including PEGS or polyethylene glycol
              must meet contamination limits for 1’4 Dioxane and ethylene
              oxide), Cyclic Silicones, EDTA and derivatives (allowed if no
              technical substitute under 0.2%)
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" className="boxTitleText">
                How to Use
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              {" "}
              <b>Suggested Usage: </b>
              Massage two to three pumps onto a cleansed face and neck. Use
              before moisturizer and sunscreen. Use twice daily, morning and
              night.
            </p>
            <br></br>
            <p>
              <b>Recycling Instructions:</b>
              Once bottle is empty, dispose of pump and cap. Rinse any remaining
              product from bottle, then place in curbside recycling. The outer
              carton is made from sustainable, FSC-certified sugarcane paper
              and can be placed in curbside recycling. 
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ProdIngredients;
