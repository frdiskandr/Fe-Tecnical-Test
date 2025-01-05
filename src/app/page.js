"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "@/components/slider.js";
import style from "./page.module.css";
import { Skeleton } from "@radix-ui/themes";
import imgMl from "/public/images/mobilelegend.png";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(products);

  return (
    <>
      <div className={style.container}>
        <div className={style.head_content}>
          <Skeleton>
            <Slider />
          </Skeleton>
          <div className={style.title}>
            <h3>Starlight November 2024: Melissa NIGHTWALKER</h3>
            <p>
              Segera dapatkan skin startlight melissa nightwalker dengan topup
              murah hanya di VocaGame
            </p>
          </div>
        </div>

        <div className={style.container_flashsale}>
          <div className={style.title_flashsale}>
            <span>FLASH SALE</span>
            <p>Segera dapatkan jangan sampai ketinggalan!</p>
            <div className={style.card_flashsale_container}>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
              <div className={style.card_flashsale_item}>
                <div className={style.card_content_top}>
                  <Image
                    src={imgMl}
                    alt=""
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span>200 Diamonds</span>
                    <p>Mobile Legends Bang Bang</p>
                  </div>
                </div>
                <div className={style.card_content_bottom}>
                  <span>Promo</span>
                  <p>-15.0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* favorite Games */}

      <div className={style.favorite_games}>
        <div className={style.container_favorite_games}>
          <span>Temukan Game Favoritmu</span>
          <div className={style.container_game}>
            <ul className={style.category_game}>
              <li>Rekomendasi</li>
              <li>Mobile Game</li>
              <li>Pc Game</li>
            </ul>
            <div className={style.list_game}>


              <div className={style.container_card}>  

              {products.map((product) => {
                console.log(product);
                  return (
                  <a href="#" className={style.card_game} key={product.id}>
                  <div className={style.card_game_image}>
                    <img
                      src={product.image}
                      alt=""
                      loading="lazy"
                      width={115}
                      height={115}
                      style={{
                        borderRadius: "8px",
                        border: "2px solid #FFFFFF",
                        boxShadow: "inset 0px -40px -40px rgba(0, 0, 0, 0.77)",
                      }}
                    />
                  </div>
                  <div className={style.card_game_content}>
                    <span>{product.name}</span>
                    <p>{product.publisher}</p>
                  </div>
                </a>
                  );
                })}
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
