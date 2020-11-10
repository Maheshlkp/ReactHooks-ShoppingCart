import React, { useState, useEffect } from "react";
import { Axios } from "axios";

import { random, commerce } from "faker";
import { Container, Row } from "reactstrap";

// const apiKey = "INSET_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "https://api.myjson.com/bins/qp9uo";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //   const response = await Axios.get(url, {
    //     header: {
    //       Authorization: apiKey
    //     }
    //   });

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl);

  const { photos } = data;

  const allProduct = photos.map(photo =>({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid()

  }))
  setProduct(allProduct)
};

  useEffect(() => {
    fetchPhotos();
  }, []);

return(
    <Container fluid>
    <h1 className="text-success text-center">
    BuyPage
    </h1>
    <Row>
        {product.map(product => (
            <span key={product.id}>{product.productName}</span>
        ))}
    </Row>

    </Container>
)

};

export default BuyPage;
