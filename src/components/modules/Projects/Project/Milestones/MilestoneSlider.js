import React from "react";
import { withTheme } from "styled-components";
import { TaskContent, TaskContentWrapper } from "./StyledMilestoneSlider";
import Slider from "react-slick";
import "../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../node_modules/slick-carousel/slick/slick-theme.css";

function MileStoneSlider({tasks,slidesToShow,isCyclic,isAutoplay}) {
    // check if there is any tasks
    if (!Array.isArray(tasks) || tasks.length <= 0) {
        return null;
      }
      // To display next/prev arrows for cyclic functionality
    function CustomArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
    // settings for react-slider carousal 
      const settings = {
        dots: true,
        infinite: isCyclic,
        speed: 500,
        slidesToShow:slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: isAutoplay,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
        // breakpoints to make react slider responsive
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <TaskContentWrapper>
            <Slider {...settings}>
              {tasks.map((task,i) => (
                <TaskContent 
                    key={i} 
                    primary={task.isReached}>
                  <div>
                    {task.title}
                  </div>
                  <p
                    style={{
                    marginTop: ".9rem",
                    // marginLeft: ".2rem",
                    }}
                  >
                    {task.isReached ? "reached" : "hit"} by: <br />
                    {task.completionDate}
                  </p>
                </TaskContent>
              ))}
            </Slider>
        </TaskContentWrapper> 
    );
};
export default withTheme(MileStoneSlider)
