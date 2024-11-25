import React, { useState } from "react";
import Sidebar from './SideBar';
import image from "../data/image.png";
import styles from "./Main.module.css";
import SearchBar from "../mypage/SearchBar";
import Content from "../MainPage/Content";
import { useNavigate } from 'react-router-dom';


export const Main = ({products, toggleLike, setProducts}) => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm]=useState("");

    const handleNotificationClick = () => {
        navigate('/notification');
      };
    
      const handleUserAvatarClick = () => {
        navigate('/mypage');
      };

    const handleSearch = (term) => {
        setSearchTerm(term); // 검색어 상태 업데이트
    };

    return (
        <div className={styles.mainContainer}>
          <Sidebar/>
          <main className={styles.mainContent}>
            <header className={styles.pageHeader}>
                <SearchBar/>
                <div className={styles.userIcons}>
                    <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ed7ff2fb1e7c53557240672da85ebfc178133bd4f13717960dbae4d0118d17?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" 
                    alt="Notifications" 
                    className={styles.notificationIcon} 
                    onClick={handleNotificationClick}
                    style={{ cursor: 'pointer' }}
                    />
                    <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7a9a8e05d2698d57ae5e99b196bf039513b5a28e9d9c00b4aa82e8636b86f6?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" 
                    alt="User avatar" 
                    className={styles.userAvatar} 
                    onClick={handleUserAvatarClick}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
            </header>
            <section className={styles.contentSection}>
                <Content products={products} toggleLike={toggleLike} searchTerm={searchTerm}/>
            </section>
          </main>
        </div>
      );
};

export default Main;
