import Page from "../components/Page";
import VideoList from "../components/Video/VideoList";

type Props = {}

const VideosByCategory = (props: Props) => {
    return <Page>
        <VideoList videos={[]} />
    </Page>;
};

export default VideosByCategory;