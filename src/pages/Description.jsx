import React from "react";
import { useParams } from "react-router-dom";
import ProdImage from "../components/productDescription/ProdImage";
import ProdInfo from "../components/productDescription/ProdInfo";
import ProdHighlights from "../components/productDescription/ProdHighlights";
import ProdAbout from "../components/productDescription/ProdAbout";
import ProdIngredients from "../components/productDescription/ProdIngredients";
import Test from "../components/productDescription/Test";
import "./Description.css";

function Description() {
  const { productId } = useParams();
  const [descData, setDescData] = React.useState({
    heroImage: "",
    price: "",
    brandName: "",
    displayName: "",
    rating: "",
  });

  const url = `http://localhost:8080/gifts?productId=${productId}`;
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDescData({
          heroImage: res[0].heroImage,
          price: res[0].currentSku.listPrice,
          brandName: res[0].brandName,
          displayName: res[0].displayName,
          rating: res[0].rating,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="Test">
        <ProdImage heroImage={descData.heroImage} />
        <ProdInfo
          heroImage={descData.heroImage}
          price={descData.price}
          brandName={descData.brandName}
          displayName={descData.displayName}
          rating={descData.rating}
        />
      </div>
      <div>
        <ProdHighlights />
      </div>
      <div>
        <ProdAbout />
      </div>
      <div>
        <ProdIngredients />
      </div>
      <div>
        <Test />
      </div>
    </div>
  );
}

export default Description;
