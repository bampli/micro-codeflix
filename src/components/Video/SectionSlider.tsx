import {
    makeStyles,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import { Video } from "../../util/model";
import VideoThumbnail from "./VideoThumbnail";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";
import { useMemo } from "react";
import Slider, { SliderProps } from "../Slider";
import SliderArrow from "../Slider/SliderArrow";

import banner from "../../static/img/logo.png";
//import bannerHalf from "../../static/img/logo.png";
import bannerThumb from "../../static/img/logo.png";
import Title from "../../components/Title";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0, 3),
        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            margin: theme.spacing(0, 1),
        }
    },
    videoThumbnailRoot: {
        marginRight: "4px",
    },
    "&:focus": {
        outlineColor: theme.palette.text.primary,
    },
}));

interface SectionSliderProps {
    title: string;
    videos: Video[];
};

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
    const { title } = props;
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const sliderProps: SliderProps = useMemo(
        () => ({
            //className: classSlider,
            dots: false,
            infinite: false,
            speed: 500,     // ms
            slidesToScroll: 3,
            variableWidth: true,
            arrows: !isSmallWindow,
            prevArrow: <SliderArrow dir="left" />,
            nextArrow: <SliderArrow dir="right" />,
        }), [isSmallWindow]
    );

    const theme = useTheme();
    const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));

    const thumbnail = isDown1200 ? bannerThumb : banner;

    return (
        <div>
            <Title>{title}</Title>
            <div className={classes.root}>
                <Slider {...sliderProps}>
                    {Array.from(new Array(6).keys())   // create empty array with 6 elements
                        .map(() => thumbnail)
                        .map((v, index) => {
                            return (
                                <VideoThumbnail
                                    key={v}
                                    classes={{ root: classes.videoThumbnailRoot }}
                                    ImgProps={{
                                        src: thumbnail,
                                    }}
                                />
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SectionSlider;