'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "@/components/slider.js";
import style from './page.module.css';

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
    <div className={style.container}>
   <Slider />
    </div>
  );
}

