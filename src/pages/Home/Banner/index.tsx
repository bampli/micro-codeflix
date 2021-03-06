import VideoThumbnail from "../../../components/Video/VideoThumbnail";
import Slider, { SliderProps } from "../../../components/Slider";
import SliderArrow from "../../../components/Slider/SliderArrow";
import useIsSmallWindow from "../../../hooks/useIsSmallWindow";
import { useMemo, useState } from "react";
import banner from "../../../static/img/logo.png";
import bannerHalf from "../../../static/img/logo.png";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import BannerRating from "./BannerRating";
import VideoContent from "./VideoContent";
import VideoActionsMobile from "./VideoActions/VideoActionsMobile";
import SliderStepper from "./SliderStepper";

const useStyles = makeStyles((theme: Theme) => ({
    rootImage: {
        position: "relative",
        marginRight: "4px",
        "&:focus": {
            outlineColor: theme.palette.text.primary,
        },
    },
    image: {
        [theme.breakpoints.down(400)]: {
            width: "300px",
            height: "169px",
        },

        [theme.breakpoints.up(400)]: {      // up from ~(800 x 1184)
            width: "350px",
            height: "197px",
        },

        [theme.breakpoints.up(700)]: {      // up from ~(1920 x 1080)
            width: "650px",
            height: "366px",
        },

        [theme.breakpoints.up(1200)]: {      // up from ~(1920 x 1080)
            width: "1150px",
            height: "647px",
        },

        [theme.breakpoints.up("xl")]: {      // up from ~(1920 x 1080)
            width: "393px",
            height: "223px",
        },
    },

    get slider() {
        return Object.fromEntries(
            Object.entries(this.image).map(size => [
                size[0],
                {
                    "& .slick-list, & .slick-track": { height: size[1].height }
                },
            ])
        );
    },
}));

const Banner: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const classSlider = classes.slider;
    const isSmallWindow = useIsSmallWindow();
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderProps: SliderProps = useMemo(
        () => ({
            className: classSlider,
            centerMode: true,
            dots: false,
            infinite: true,
            speed: 500,     // ms
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: true,
            arrows: !isSmallWindow,
            prevArrow: <SliderArrow dir="left" />,
            nextArrow: <SliderArrow dir="right" />,
            beforeChange: (oldIndex, nextIndex) => {
                setActiveIndex(nextIndex);
            }
        }), [isSmallWindow, classSlider]
    );
    const thumbnail = isSmallWindow ? bannerHalf : banner;
    return (
        <div>
            <Slider {...sliderProps}>
                {Array.from(new Array(6).keys())   // create empty array with 6 elements
                    .map(() => thumbnail)
                    .map((v, index) => {
                        const show = activeIndex === index;
                        return (
                            <VideoThumbnail
                                key={v}
                                classes={{ root: classes.rootImage, image: classes.image }}
                                ImgProps={{
                                    src: thumbnail,
                                }}
                            >
                                {show && <VideoContent video={{
                                    id: "000", title: "epitafios",
                                    categories: [{
                                        id: "111", name: "Documentario", is_active: true
                                    }]
                                }} />}

                                {show && <BannerRating rating="14" />}
                            </VideoThumbnail>
                        )
                    })
                }
            </Slider>
            {!isSmallWindow && <SliderStepper maxSteps={6} activeStep={activeIndex} />}
            <VideoActionsMobile />
        </div>
    );
}

export default Banner;

// it's still possible to getImageSizes from VideoThumbnail
// import { getImageSizes } from "../components/Video/VideoThumbnail";
//
// get slider() {
//     return Object.fromEntries(
//         Object.entries(getImageSizes(theme)).map(size => [
//             size[0],
//             {
//                 "& .slick-list, & .slick-track": { height: size[1].height }
//             },
//         ])
//     );
// },

// Object.entries(obj)  // see VideoThumbnail.tsx
// [
//     [key, value],
//     [key, value],
//     [key, value],
//     [key, value],
// ]