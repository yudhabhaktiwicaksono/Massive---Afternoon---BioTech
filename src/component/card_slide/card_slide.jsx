import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./card_slider.css";
import foto2 from"../images/foto2.png"
import Card2 from "./card2";

export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider">
          <Slider {...settings}>
            <div>
              <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
            <div>
            <Card2
              imageUrl={foto2}
              description="Peraturan BPJS baru mengenai rekam
              medis elektronik "
              />
            </div>
          </Slider>
        </div>
      );
    }
  }