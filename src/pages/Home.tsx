import Page from "../components/Page";
import VideoThumbnail from "../components/Video/VideoThumbnail";
//import { getImageSizes } from "../components/Video/VideoThumbnail";
import Slider, { SliderProps } from "../components/Slider";
import SliderArrow from "../components/Slider/SliderArrow";
import useIsSmallWindow from "../hooks/useIsSmallWindow";
import { useMemo } from "react";
import banner from "../static/img/logo.png";
import bannerHalf from "../static/img/logo.png";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

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

const Home: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const sliderProps: SliderProps = useMemo(
        () => ({
            className: classes.slider,
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
        }), [isSmallWindow, classes.slider]
    );
    const thumbnail = isSmallWindow ? bannerHalf : banner;
    return (
        <Page>
            <Slider {...sliderProps}>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail,
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail,
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail,
                        }}
                    />
                </div>
            </Slider>
        </Page>
    );
}

export default Home;

// it's still possible to getImageSizes from VideoThumbnail
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