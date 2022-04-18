import Page from "../components/Page";
import VideoThumbnail, { getImageSizes } from "../components/Video/VideoThumbnail";
import Slider, { SliderProps } from "../components/Slider";
import SliderArrow from "../components/Slider/SliderArrow";
import useIsSmallWindow from "../hooks/useIsSmallWindow";
import { useMemo } from "react";
import banner from "../static/img/logo.png";
import bannerHalf from "../static/img/logo.png";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    get slider() {
        return Object.fromEntries(
            Object.entries(getImageSizes(theme)).map(size => [
                size[0],
                {
                    "& .slick-list, & .slick-track": { height: size[1].height }
                },
            ])
        );
    },
}));

// Object.entries(obj)  // see VideoThumbnail.tsx
// [
//     [key, value],
//     [key, value],
//     [key, value],
//     [key, value],
// ]

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
                        ImgProps={{
                            src: thumbnail,
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
                        ImgProps={{
                            src: thumbnail,
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
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

// return (
//     <Page>
//         <VideoThumbnail
//             ImgProps={{
//                 src: banner,
//             }}
//         />
//     </Page>
// );

// const Home: React.FunctionComponent = (props) => {
//     // return (
//     //     <Page>
//     //         <VideoThumbnail
//     //             ImgProps={{
//     //                 src: banner,
//     //             }}
//     //         />
//     //     </Page>
//     // );

//     var settings: SliderProps = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         arrows: true,
//         prevArrow: <SliderArrow dir="left" />,
//         nextArrow: <SliderArrow dir="right" />,
//     };
//     return (
//         <Slider {...settings}>
//             <div>
//                 <h3>11111111111</h3>
//             </div>
//             <div>
//                 <h3>22222222222</h3>
//             </div>
//             <div>
//                 <h3>33333333333</h3>
//             </div>
//             <div>
//                 <h3>44444444444</h3>
//             </div>
//             <div>
//                 <h3>55555555555</h3>
//             </div>
//             <div>
//                 <h3>66666666666</h3>
//             </div>
//         </Slider>
//     );
// };