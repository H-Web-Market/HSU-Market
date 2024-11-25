import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import styles from "./Content.module.css";

const Content = ({ toggleLike, products }) => {
    return (
        <div className={styles.content}>
            <Banner />
            <div className={styles.textWrapper}>당신을 위한 추천</div>
            <ProductList toggleLike={toggleLike} products={products}  /> {/* toggleLike 전달 */}
        </div>
    );
};

export default Content;
