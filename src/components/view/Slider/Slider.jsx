import React, {Component} from "react";
import Slider from "react-slick";
import ViewProjects from "../../layout/Main/ViewProjects/ViewProjects";
import About from "../../layout/About/About";
import Timeline from "../../layout/Timeline/Timeline";

export default class Carusel extends Component {
    render() {
        var settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
        };
        const {timelineArr} = this.props;
        return (
            <div>
                <Slider {...settings}>
                    <ViewProjects/>
                    <About/>
                    <Timeline timelineArr={timelineArr}/>
                </Slider>
            </div>
        );
    }
}