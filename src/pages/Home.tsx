// import Page from "../components/Page";
// import VideoThumbnail from "../components/Video/VideoThumbnail";
import Slider, { SliderProps } from "../components/Slider";
import SliderArrow from "../components/Slider/SliderArrow";

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

    var settings: SliderProps = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SliderArrow dir="left" />,
        nextArrow: <SliderArrow dir="right" />,
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>11111111111</h3>
            </div>
            <div>
                <h3>22222222222</h3>
            </div>
            <div>
                <h3>33333333333</h3>
            </div>
            <div>
                <h3>44444444444</h3>
            </div>
            <div>
                <h3>55555555555</h3>
            </div>
            <div>
                <h3>66666666666</h3>
            </div>
        </Slider>
    );
};

export default Home;