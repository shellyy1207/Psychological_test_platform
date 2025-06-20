import React, { useState } from "react"; 
import { Typography, Modal } from "antd"; 
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";// 引入 Swiper 樣式
import "swiper/css/effect-coverflow";

const { Title, Paragraph } = Typography;

  // 角色資料
const characters = [
  {
    name: "大耳狗",
    key: "cinnamoroll",
    image: "https://www.sanrio.com.tw/wp-content/uploads/2023/06/25.%E6%98%8E%E6%98%9F%E4%BB%8B%E7%B4%B9CN-01-1.png"
  },
  {
    name: "雙星仙子",
    key: "little_twins",
    image: "https://www.sanrio.com.tw/wp-content/uploads/2018/09/25.%E6%98%8E%E6%98%9F%E4%BB%8B%E7%B4%B9TS-01.png"
  },
  {
    name: "帕恰狗",
    key: "pochacco",
    image: "https://www.sanrio.com.tw/wp-content/uploads/2024/03/25.%E6%98%8E%E6%98%9F%E4%BB%8B%E7%B4%B9PC-01%E6%9B%B4%E6%96%B0-%E5%87%BA%E9%81%93%E5%B9%B4.png"
  },
  {
    name: "大眼蛙",
    key: "keroppi",
    image: "https://www.sanrio.com.tw/wp-content/uploads/2018/09/25.%E6%98%8E%E6%98%9F%E4%BB%8B%E7%B4%B9KR-01.png"
  },
  {
    name: "庫洛米",
    key: "kuromi",
    image: "https://www.sanrio.com.tw/wp-content/uploads/2018/09/25.%E6%98%8E%E6%98%9F%E4%BB%8B%E7%B4%B9KU-01.png"
  }
];

const AboutPage = () => {
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false); // 控制 Modal 狀態
  const [selectedImage, setSelectedImage] = useState(""); 

  const handleClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalVisible(true);
  };

  return (
    <div style={styles.container}>
      <Title level={2}>{t("about_title")}</Title>
      <Paragraph style={styles.paragraph}>{t("about_paragraph1")}</Paragraph>
      <Paragraph style={styles.paragraph}>{t("about_paragraph2")}</Paragraph>

      <Title level={3} style={{ marginTop: "3rem", textAlign: "center" }}>
        {t("character_intro")}
      </Title>

      <div style={{ marginTop: "2rem" }}>
      {/* Swiper 輪播容器 */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          style={{ width: "100%", paddingBottom: "2rem" }}
        >
          {characters.map((char, idx) => (
            <SwiperSlide key={idx} style={styles.slide}>
              <div
                style={styles.cardWrapper}
                onClick={() => handleClick(char.image)} 
              >
                <img src={char.image} alt={char.name} style={styles.cardImage} />
                <p style={styles.caption}>{t(`characters.${char.key}`)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal 彈窗展示圖片 */}
        <Modal
          open={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
          centered
          width={600}
        >
          <img src={selectedImage} alt="character" style={{ width: "100%" }} />
        </Modal>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "4rem 2rem",
    backgroundColor: "#fffefc",
    fontFamily: "sans-serif",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#333",
  },
  slide: {
    width: "240px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    border: "4px solid #fbb1d8",
    borderRadius: "16px",
    padding: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.05)",
    cursor: "pointer", // ⭐ 游標樣式
    transition: "transform 0.2s",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
  caption: {
    textAlign: "center",
    marginTop: "0.5rem",
    fontWeight: "bold",
    color: "#f78fb3",
  },
};

export default AboutPage;
