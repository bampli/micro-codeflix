import Page from "../components/Page";
import VideoThumbnail from "../components/Video/VideoThumbnail";

const Home: React.FunctionComponent = (props) => {
    return (
        <Page>
            <VideoThumbnail
                ImgProps={{
                    src: banner,
                }}
            />
        </Page>
    );
};

export default Home;