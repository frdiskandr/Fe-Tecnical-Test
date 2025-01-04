'use client'
import { Flex, Text, Button } from "@radix-ui/themes";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  },[]);

  console.log(products);


  return (
    <>
   <h1>Home</h1>
    </>
  );
}

