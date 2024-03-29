import React, { useContext } from "react";

///React router dom
import {  Routes, Route, Outlet  } from "react-router-dom";

///Css
import "./index.css";
import "./chart.css";
import "./step.css";

///Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";

///Dashboard
import Home from "./components/Dashboard/Home";
import DashboardDark from "./components/Dashboard/DashboardDark";
import GuestList from "./components/Dashboard/GuestList";
import GuestDetails from "./components/Dashboard/GuestDetails";
import ConciergeList from "./components/Dashboard/ConciergeList";
import RoomList from "./components/Dashboard/RoomList";
import Reviews from "./components/Dashboard/Reviews";
import Task from "./components/Dashboard/Task";

///Demo
import Theme1 from "./components/Dashboard/Demo/Theme1";
import Theme2 from "./components/Dashboard/Demo/Theme2";
import Theme3 from "./components/Dashboard/Demo/Theme3";
import Theme4 from "./components/Dashboard/Demo/Theme4";
import Theme5 from "./components/Dashboard/Demo/Theme5";
import Theme6 from "./components/Dashboard/Demo/Theme6";

///App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";

///Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
import Customers from "./components/AppsMenu/Shop/Customers/Customers";

///Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";

///Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

///Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";

//Redux
import Todo from "./pages/Todo";

///Widget
import Widget from "./pages/Widget";


///Pages
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import Setting from "./layouts/Setting";
import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {
  // const { menuToggle } = useContext(ThemeContext);
  const allroutes = [
    ///Dashboard
    { url: "", component: <Home/> },
    { url: "dashboard", component: <Home/> },
    { url: "dashboard-dark", component: <DashboardDark/> },
    { url: "guest-list", component: <GuestList/> },
    { url: "guest-details", component: <GuestDetails/> },
    { url: "concierge-list", component: <ConciergeList/> },
    { url: "room-list", component: <RoomList/> },
    { url: "reviews", component: <Reviews/> },
    { url: "task", component: <Task/>},
	
    ///Demo
    { url: "primary-/", component: <Theme1/> },
    { url: "mini-primary-sidebar", component: <Theme2/> },
    { url: "compact-primary-header", component: <Theme3/> },
    { url: "horizontal-primary-sidebar", component: <Theme4/> },
    { url: "horizontal-modern-sidebar", component: <Theme5/> },
    { url: "modern-sidebar", component: <Theme6/> },
	
	  ///Apps
    { url: "app-profile", component: <AppProfile/> },
    { url: "post-details", component: <PostDetails/> },
    { url: "email-compose", component: <Compose/> },
    { url: "email-inbox", component: <Inbox/> },
    { url: "email-read", component: <Read/> },
    { url: "app-calender", component: <Calendar/> },

    ///Chart
    { url: "chart-sparkline", component: <SparklineChart/> },
    { url: "chart-chartjs", component: <ChartJs/> },
    { url: "chart-apexchart", component: <ApexChart/> },
    { url: "chart-rechart", component: <RechartJs/> },

    ///Bootstrap
    { url: "ui-alert", component: <UiAlert/> },
    { url: "ui-badge", component: <UiBadge/> },
    { url: "ui-button", component: <UiButton/> },
    { url: "ui-modal", component: <UiModal/> },
    { url: "ui-button-group", component: <UiButtonGroup/> },
    { url: "ui-accordion", component: <UiAccordion/> },
    { url: "ui-list-group", component: <UiListGroup/> },
    { url: "ui-card", component: <UiCards/> },
    { url: "ui-carousel", component: <UiCarousel/> },
    { url: "ui-dropdown", component: <UiDropDown/> },
    { url: "ui-popover", component: <UiPopOver/> },
    { url: "ui-progressbar", component: <UiProgressBar/> },
    { url: "ui-tab", component: <UiTab/> },
    { url: "ui-pagination", component: <UiPagination/> },
    { url: "ui-typography", component: <UiTypography/> },
    { url: "ui-grid", component: <UiGrid/> },
	
    ///Plugin
    { url: "uc-select2", component: <Select2 /> },
    { url: "uc-sweetalert", component: <MainSweetAlert/> },
    { url: "uc-toastr", component: <Toastr/> },
    { url: "map-jqvmap", component: <JqvMap/> },
    { url: "uc-lightgallery", component: <Lightgallery/> },
	
    //Widget
    { url:"widget-basic",component:<Widget/>},

    //Shop
    { url: "ecom-product-grid", component: <ProductGrid/> },
    { url: "ecom-product-list", component: <ProductList/> },
    { url: "ecom-product-detail", component: <ProductDetail/> },
    { url: "ecom-product-order", component: <ProductOrder/> },
    { url: "ecom-customers", component: <Customers/> },


  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <>     
       <Routes>
          <Route path='page-lock-screen' element= {<LockScreen />} />
          <Route path='page-error-400' element={<Error400/>} />
          <Route path='page-error-403' element={<Error403/>} />
          <Route path='page-error-404' element={<Error404/>} />
          <Route path='page-error-500' element={<Error500/>} />
          <Route path='page-error-503' element={<Error503/>} />
          <Route  element={<MainLayout />} > 
              {allroutes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`${data.url}`}
                  element={data.component}
                />
              ))}
          </Route>
          </Routes>
        <Setting />
	      <ScrollToTop />
    </>
  );
};

function MainLayout(){
  const { menuToggle, sidebariconHover } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle": ""} ${ menuToggle ? "menu-toggle" : ""}`}>  
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
          <div className="container-fluid">
            <Outlet />                
          </div>
      </div>
      <Footer />
    </div>
  )

};
export default Markup;