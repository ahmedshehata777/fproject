import React from "react";
import "./card.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function CarD({ card }) {
  return (
    // <Link  style={{ fontWeight: "500",textDecoration: "none",color :"black"  }} to={{pathname: "/hotelDetails" ,state:card}} >
    //   <div className="card-box bg-light" >
    //   <h3 className="card-title m-2 bg-light">{card?.name}</h3>
    //     <Swiper
    //       slidesPerView={1}
    //       spaceBetween={10}
    //       loop={true}
    //       mousewheel={true}
    //       cssMode={true}
    //       pagination={true}
    //       navigation={true}
    //       modules={[Pagination, Navigation]}
    //       className="swiper-container">
    //       {/* {card.image.map((src, i) => ( */}
    //         <SwiperSlide >
    //           <img src={card?.image} className="card-img" />
    //         </SwiperSlide>
    //       {/* ))} */}
    //     </Swiper>
    //     <div className="card-info-flex">

    //       <div className="card-rating">
    //         <StarRateRoundedIcon />
    //       <p style={{ marginLeft : "10px"}}>{card?.rating}</p>
    //       </div>

    //     </div>
    //     <p style={{  margin:"15px", color: "black"}}>
    //       {card.description}
    //     </p>
    //     {/* <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p> */}
    //     <p style={{ marginLeft : "200px", fontSize: "1.3rem", color: "black" }}>
    //       <span style={{ fontWeight: "800" }}>${card?.prices}</span> <span style={{ fontWeight: "800" }} > night</span>
    //     </p>
    //   </div>
    // </Link>
<div style={{ display:"inline-block" }} className="card-box " >
    <Card style={{ width: "20rem" }} className="m-2">
      <Card.Header className="d-flex justify-content-between aling-items-center">
        <Card.Title>{card?.name}</Card.Title>
        {/* <button className="btn btn-success" style={{borderRadius:"50%"}}>{avatar}</button> */}
      </Card.Header>

      <Card.Img variant="top" src={card?.image} />
      <Card.Body>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>

      <Card.Body>
        <StarRateRoundedIcon />
        {card?.RATING_CHOICES}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-start align-items-center">
        <h4 style={{ fontWeight: "700"}}>Price: </h4>{" "}
        <h5 className="ml-1">
          <span className="badge bg-danger rounded-pill"> {card?.prices} $</span>
        </h5>
        <Link
          style={{ fontWeight: "800"}}
          to={{ pathname: "/hotelDetails", state: card }}
        >
          <Button className="btn btn-warning text-white font-weight-bold  px-4 ml-5" style={{ marginLeft:"90px"}}>
            Select
          </Button>
        </Link>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default CarD;
