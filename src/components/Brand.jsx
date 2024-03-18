import React, { useContext } from "react";
import { getContrast } from "../Helpers";
import { MainContext } from "../MainContext";
import Clipboard  from "react-clipboard.js";

export const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug != brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  console.log(selectedBrands);
  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, index) => (
          <Clipboard 
            component="span"
            key={index}
            onSuccess={() => setColor(color)}
            data-clipboard-text={color}
            style={{"margin": "2px", "border":"1px solid #aca9a9",
              "--bgColor": `#${color}`,
              "--textColor": `${getContrast(color)}`,
            }}
          >
            {color}
          </Clipboard >
        ))}
      </div>
    </div>
  );
};
