//= Functions
// Others
import { useState } from "react";

//= Structures & Data
// Others
import { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "className"> & {
    src: string;
    className?: string;
};

export default function ImageOnClickFullscreen({ src, className, ...otherImgProps }: Props) {
    const [onFullscreen, setOnFullscreen] = useState<boolean>(false);

    return (
        <>
            <img src={src} className={className} onClick={() => setOnFullscreen(true)} {...otherImgProps}/>
            {
                onFullscreen
                &&
                <div className="w-screen h-screen fixed inset-0 flex justify-center items-center bg-slate-950/75 p-4 z-[9999]" onClick={() => setOnFullscreen(false)}>
                    <img src={src} className="h-full w-full object-scale-down"/>
                </div>
            }
        </>
    );
}
