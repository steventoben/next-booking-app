import React, {ReactNode} from "react";

interface GalleryProps {
    children: ReactNode;
}
export function Gallery(props: GalleryProps) {
    const {
        children
    } = props;

    //const [activeIndex, setActiveIndex] = React.useState();

    const {activeIndex, stepForward, stepBackward} = useIndexStepper(5);

    return(
        <div>
            Template
        </div>
    );
}
function useIndexStepper(maxIndex: number, defaultIndex: number = 0) {
    const [activeIndex, setActiveIndex] = React.useState<number>(defaultIndex);

/*    const checkIndex = () => {
        if(activeIndex === maxIndex) {

        }
    }*/

    function stepForward() {
        setActiveIndex((prevState: number) => {
            if(prevState===maxIndex) {
                return 0;
            }
            return prevState+1;
        });
    }
    function stepBackward() {
        setActiveIndex((prevState: number) => {
            if(prevState===0) {
                return maxIndex;
            }
            return prevState-1;
        });
    }

    /*React.useEffect(() => {
        if(activeIndex) {

        }
    }, [activeIndex]);*/

    return {
        activeIndex,
        stepForward,
        stepBackward
    }

}
