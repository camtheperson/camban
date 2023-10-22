"use client"

import React, {useState, ReactNode} from "react";
import Image from 'next/image';

interface VideoCoverProps {
    backgroundImage: string;
    children?: ReactNode;
    playButtonText?: string;
    videoId: string;
}

const VideoCover: React.FC<VideoCoverProps> = (props) => {
    const {backgroundImage, children, playButtonText, videoId} = props;

    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const onClick = () => {
        setIsVideoVisible(true);
    }

    if (!isVideoVisible) {
        return (
            <div className="relative flex flex-wrap content-between p-8 w-full h-[278px] sm:w-[521px] xl:w-[701px] xl:h-[395px] bg-cover" style={{ backgroundImage: `url(${backgroundImage})`}}>
                {children}

                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <button className="transition ease-in-out hover:scale-110" onClick={onClick}>
                        <Image
                            alt="Play video"
                            className="w-14 h-14 xl:w-24 xl:h-24"
                            src="/play-icon.svg"
                            height={92}
                            priority
                            width={92}
                        />
                    </button>
                </div>

                {playButtonText && 
                    <p className="w-full text-center">{playButtonText}</p>
                }
            </div>
        )
    } else {
        return (
            <iframe className="w-full h-[278px] sm:w-[521px] xl:w-[701px] xl:h-[395px]" width="701" height="395" src={`https://www.youtube.com/embed/_${videoId}?autoplay=1&rel=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        )
    }
}

export default VideoCover;