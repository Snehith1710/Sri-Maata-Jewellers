import React from "react";
import CategoryFormat from './CategoryFormat';
import Ear12 from "E:/kamareddy/srimaata/src/images/Ear12.jpg";
import Ear1 from "E:/kamareddy/srimaata/src/images/Ear1.jpg";
import Ear2 from "E:/kamareddy/srimaata/src/images/Ear2.jpg";
import Ear3 from "E:/kamareddy/srimaata/src/images/Ear3.jpg";
import Ear4 from "E:/kamareddy/srimaata/src/images/Ear4.jpg";
import Ear5 from "E:/kamareddy/srimaata/src/images/Ear5.jpg";
import Ear6 from "E:/kamareddy/srimaata/src/images/Ear6.jpg";
import Ear7 from "E:/kamareddy/srimaata/src/images/Ear7.jpg";
import Ear8 from "E:/kamareddy/srimaata/src/images/Ear8.jpg";
import Ear9 from "E:/kamareddy/srimaata/src/images/Ear9.jpg";
import Ear10 from "E:/kamareddy/srimaata/src/images/Ear10.jpg";
import Ear11 from "E:/kamareddy/srimaata/src/images/Ear11.jpg";

const EarringDetails = [
  {
    productImage: Ear1,
    productTitle: "E1",
  },
  {
    productImage: Ear2,
    productTitle: "E2",
  },
  {
    productImage: Ear3,
    productTitle: "E3",
  },
  {
    productImage: Ear4,
    productTitle: "E4",
  },
  {
    productImage: Ear5,
    productTitle: "E5",
  },
  {
    productImage: Ear6,
    productTitle: "E6",
  },
  {
    productImage: Ear7,
    productTitle: "E7",
  },
  {
    productImage: Ear8,
    productTitle: "E8",
  },
  {
    productImage: Ear9,
    productTitle: "E9",
  },
  {
    productImage: Ear10,
    productTitle: "E10",
  },
  {
    productImage: Ear11,
    productTitle: "E11",
  },
  {
    productImage: Ear12,
    productTitle: "E12",
  },
];

export default function Noserings() {
  return (
    <div>
      {EarringDetails.map((key) => (
        <CategoryFormat
          pic={key.productImage}
          heading={key.productTitle}
          key={key.productTitle}
        />
      ))}
    </div>
  );
}
