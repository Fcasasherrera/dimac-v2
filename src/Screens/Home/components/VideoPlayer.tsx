import React from 'react';
import VideoPlayer from 'react-native-video-controls';

type FrameProps = {
    videoUrl?: string;
    closeModal: any;
};

export const FrameModal: React.FC<FrameProps> = ({
    videoUrl,
    closeModal,
}) => {
    return (
        <VideoPlayer
            source={{ uri: videoUrl }}
            onBack={closeModal}
        />
    );
}


