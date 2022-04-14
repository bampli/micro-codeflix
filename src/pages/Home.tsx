import Page from "../components/Page";
import VideoThumbnail from "../components/Video/VideoThumbnail";
import Slider, { Settings } from "react-slick";
import SlideArrowBase from "../components/Slider/SliderArrowBase";

const Home: React.FunctionComponent = (props) => {
    // return (
    //     <Page>
    //         <VideoThumbnail
    //             ImgProps={{
    //                 src: banner,
    //             }}
    //         />
    //     </Page>
    // );

    var settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SlideArrowBase dir="left" />,
        nextArrow: <SlideArrowBase dir="right" />,
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
};

export default Home;