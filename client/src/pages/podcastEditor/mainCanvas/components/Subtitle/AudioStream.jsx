import React from 'react';
import { useDispatch } from 'react-redux';
import { startAudio } from '../../../../../store/reducers/audioReducer';
export const AudioStream = (props) => {
    const { src, type = 'audio', setCurrentTime } = props;
    const audioRef = React.useRef(null);
    const dispatch = useDispatch();

    const timeUpdate = (event) => {
        const minutes = Math.floor(event.target.currentTime / 60);
        const seconds = Math.floor(event.target.currentTime - minutes * 60);

        const ms = seconds * 1000;

        console.log(ms);
        const currentTime =
            str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
        setCurrentTime(currentTime);
    };

    setInterval(function () {
        if (audioRef.current && audioRef.current.currentTime) {
            setCurrentTime(Math.floor(audioRef.current.currentTime * 1000));
            // console.log("Audio Ref Time is", audioRef.current.currentTime * 1000);
        } // will get you a lot more updates.
    }, 500);

    const str_pad_left = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };
    let htmlTag = '';

    if (type === 'audio') {
        htmlTag = (
            <audio
                ref={audioRef}
                src={src}
                // autoPlay
                muted="muted"
                // controls
                onEnded={() => {
                    audioRef.current = null;
                    window.parent.postMessage(
                        { message: 'END', type: 'END', hide: 'dbhchat', show: 'dbhchat' },
                        '*'
                    );
                }}
                onLoadedData={() => {
                    console.log('Data loaded');
                    // audioRef.current.play();
                    // dispatch(startAudio())
                    // window.parent.postMessage({ message: 'START', hide: 'dbhchat', show: 'dbhchat' }, '*');
                }}
            />
        );
    }
    const delay = ms => new Promise(res => setTimeout(res, ms));

    return (
        <>
            {htmlTag}
            <button
                className='foo'
                data-testid="uc-accept-all-button"
                id="pup-button"
                onClick={async() => {
                    await delay(2000);
                    dispatch(startAudio())
                    audioRef.current.play();
                    window.parent.postMessage(
                        {
                            message: 'START',
                            type: 'START',
                            hide: 'dbhchat',
                            show: 'dbhchat',
                        },
                        '*'
                    );
                }}
                hidden
            >
                Play
            </button>
        </>
    );
};
