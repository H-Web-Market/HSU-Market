import React from "react";
import Product from "../MainPage/Product";
import Banner from "../MainPage/Banner";
import styles from "./InterestProductList.module.css";

const InterestProductList = ({toggleLike, products, searchTerm }) => {
    // 좋아요가 눌린 상품만 필터링
    const likedProducts = products.filter(product => product.isLiked);

    // 검색어에 따라 필터링
    const filteredProducts = searchTerm
        ? likedProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : likedProducts;

    return (
        <div className={styles.content}>
            <Banner />
            <div className={styles.textWrapper}>당신을 위한 추천</div>
            <div className={styles.ProductList}>
            {filteredProducts.map((product, index) => (
                <Product 
                    key={index}
                    title={product.title} 
                    price={product.price} 
                    time={product.time} 
                    imageSrc={product.imageSrc} 
                    isLiked={product.isLiked} // 하트 상태 전달
                    toggleLike={() => toggleLike(product.title)} // 하트 상태 변경 함수 전달
                />
            ))}
            </div>
        </div>
    );
};

export default InterestProductList;
