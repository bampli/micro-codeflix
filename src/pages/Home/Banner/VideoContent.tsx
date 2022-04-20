import { ReactNode } from "react";
import Title from "../../../components/Video/Title";
import { Video } from "../../../util/model";
import BannerCategory from "./BannerCategory";
import VideoActions from "./VideoActions";

interface VideoContentProps {
    video: Video
};

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
    const { video } = props;
    return (
        <div>
            <BannerCategory>
                {video.categories.map((c) => c.name).join(" | ")}
            </BannerCategory>
            <Title>{video.title}</Title>
            <VideoActions />
        </div>
    );
};

export default VideoContent;
