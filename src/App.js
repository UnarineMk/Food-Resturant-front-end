import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import decoration from "./images/dots.png";
import NavigationBar from "./navigationBar/navigationBar";
import HomePage from "./homepage/homepage";
import FoodSection from "./foodSection/foodSection";
import ServiceSection from "./ServiceSection/serviceSection";
import MainCourseSection from "./mainCourseSection/mainCourseSection";
import Footer from "./footer/footer";
import Advertisements from "./advertisement/advertisement";

function App() {
  return (
    <div className={classes.App}>
      {/* =============================Navigation Bar========================== */}

      <div className={classes.Decoration}></div>
      <div className={classes.Decoration2}>
        <img src={decoration} alt="" className={classes.imageDeco} />
      </div>
      <NavigationBar />

      <HomePage />

      <FoodSection />

      <ServiceSection />

      <MainCourseSection />

      <Advertisements />

      <Footer />
    </div>
  );
}

export default App;
