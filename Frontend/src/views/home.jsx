import React from "react";
import { useState } from "react";
import tinycolor from "tinycolor2";
import axios from "axios";

import { Helmet } from "react-helmet";
import im1 from "../components/Assets/img3.png";
// import im2 from "../components/Assets/iapp.png";
import im4 from "../components/Assets/im4.jpeg";

import FeatureCard from "../components/feature-card";
import GalleryCard3 from "../components/gallery-card3";
import "./home.css";

const Home = (props) => {
  const [price] = useState({
    t_shirt_price: 500,
  });
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedColor, setSelectedColor] = useState({
    r: 1,
    g: 0,
    b: 0,
    a: 0.5,
  });
  const changeimg = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
  };

  const ColorPickar = () => {
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.click();
    colorPicker.addEventListener("input", (event) => {
      const hexColor = event.target.value;
      const rgbaColor = hexToRGBA(hexColor);
      setSelectedColor(rgbaColor);
    });
  };

  const hexToRGBA = (hex) => {
    const color = tinycolor(hex);
    const rgbaColor = color.toRgb();
    const hue = color.toHsl().h;

    return { ...rgbaColor, hue };
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_IWlY82m7RPhqUd",
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  

  const handlePay = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      const { data } = await axios.post(orderUrl, {
        amount: price.t_shirt_price,
      });
      initPayment(data.data);
    } catch (error) {
      console.error("Error in handlePay:", error);
      if (error.response) {
        console.error("Server responded with error status:", error.response.status);
        console.error("Response data:", error.response.data);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  

  return (
    <div className="home-container">
      <Helmet>
        <title>inkyapparels</title>
        <meta property="og:title" content="Gracious Narrow Snake" />
      </Helmet>

      <div className="home-hero">
        <div className="home-container1">
          <div className="image-container">
            <img src={im4} alt="Design Your Own Customized T-Shirt"></img>
            <a href="#designlab">
              <button className="home-hero-button1 button">Get Started</button>
            </a>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Unleash Your Creativity
            </h2>
            <span className="home-details-sub-heading">
              With our t-shirt design lab, you have the freedom to express
              yourself and create a design that truly represents you. Whether
              it&apos;s for personal use or a special event, our lab offers
              endless possibilities.
            </span>
          </div>
          <div id="designlab" className="react-container3">
            <div className="design cc-cf">
              <input
                className="choose"
                type="file"
                accept="image/*"
                onChange={changeimg}
              />
              <br />
              <br />
              <br />
              <div className="color-pick">
                <button className="color-pick-btn" onClick={ColorPickar}>
                  Choose Color
                </button>
              </div>
              <br />
              <br />
            </div>
            <div className="design img">
              <img
                src={im1}
                alt="Fixedimage"
                className="tshirt"
                style={{
                  filter: `invert(80%) sepia(74%) saturate(4000%) hue-rotate(${selectedColor.hue}deg) brightness(80%) contrast(94%)`,
                }}
              />
              {/* Selected image */}
              {selectedPhoto && (
                <img
                  alt="SelectedImage"
                  src={selectedPhoto}
                  className="overlay-image"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* t-shirt price */}
      <div className="price">
        <p>
          Price : <span>&#x20B9;{price.t_shirt_price}</span>
        </p>
      </div>

      {/* payment button */}
      <div className="Button">
        <button
          className="PayButton"
          style={{ textShadow: "2px 2px 4px #000000", fontWeight: "bold" }}
          onClick={handlePay}
        >
          Pay now
        </button>
      </div>

      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container3">
              <span className="home-text3 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Create Your Own Customized T-Shirt Design
              </h2>
              <span className="home-features-sub-heading">
                Express your unique style with our easy-to-use design lab and
                extensive customization options
              </span>
            </div>
            <div className="home-container4">
              <FeatureCard
                Heading="Customizable T-Shirt Designs"
                SubHeading="Choose from a wide range of t-shirt designs and customize them to your liking"
              ></FeatureCard>
              <FeatureCard
                Heading="Easy-to-Use Design Lab"
                SubHeading="Our intuitive design lab allows you to easily customize your t-shirt with just a few clicks"
              ></FeatureCard>
              <FeatureCard
                Heading="Real-Time Preview"
                SubHeading="See your customized t-shirt design in real-time as you make changes"
              ></FeatureCard>
              <FeatureCard
                Heading="Multiple Customization Options"
                SubHeading="Add text, images, logos, and graphics to your t-shirt design for a truly personalized look"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Customized T-Shirt Designs
          </h1>
          <span className="home-gallery-sub-heading">
            Explore some of our featured designs
          </span>
          <div className="home-container5">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src={im1}
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1501951653466-8df816debe46?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1529526013826-d9eddeb1bc9e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1565656898731-61d5df85f9a7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1474169482634-9d0381a70510?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1484501893812-f1923a3dd028?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDA1OTAyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Customize Your T-Shirt Design
          </h1>
          <span className="home-banner-sub-heading">
            Choose from a wide range of options to personalize your t-shirt
          </span>
          <button className="home-banner-button button">
            Explore Features
          </button>
        </div>
      </div>
      <div className="home-faq"></div>
    </div>
  );
};

export default Home;
