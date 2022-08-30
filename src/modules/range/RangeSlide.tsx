import {
    Box, Flex,
    RangeSlider,
    RangeSliderFilledTrack, RangeSliderMark, RangeSliderThumb, RangeSliderTrack,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack, Text,
    Tooltip
} from "@chakra-ui/react";
import React from "react";

interface RangeSlideProps {}
export function RangeSlide(props: RangeSlideProps) {
    const {} = props;
    const [sliderValues, setSliderValues] = React.useState([5, 100]);
    const [sliderValueMin, setSliderValueMin] = React.useState(5);
    const [sliderValueMax, setSliderValueMax] = React.useState(100);
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <RangeSlider
            id='slider'
            aria-label={['min', 'max']}
            defaultValue={[5, 100]}
            min={0}
            max={100}
            colorScheme='teal'
            onChange={(v) => setSliderValues(v)}
            onChangeEnd={(value) => console.log(value)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <RangeSliderMark value={0} mt='0.5rem' ml='-0.25rem' fontSize='sm'>
                $0
            </RangeSliderMark>
            <RangeSliderMark value={100} mt='0.5rem' ml='-1rem' fontSize='sm'>
                $10k
            </RangeSliderMark>
            {/*<RangeSliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                75%
            </RangeSliderMark>*/}
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${sliderValues[0]}%`}
            >
                <RangeSliderThumb index={0} />
            </Tooltip>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${sliderValues[1]}%`}
            >
                <RangeSliderThumb index={1} />
            </Tooltip>
        </RangeSlider>
    )
}
export function RangeSliderWithText() {
    const [sliderValues, setSliderValues] = React.useState([0, 1000]);
    const [sliderValueMin, setSliderValueMin] = React.useState(0);
    const [sliderValueMax, setSliderValueMax] = React.useState(100);
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <>
            <Flex pb={'1rem'} justifyContent={'center'}>
                <Text fontSize={'1.25rem'} fontWeight={600}>
                    ${sliderValues[0]} - ${sliderValues[1] === 1000 ? `${sliderValues[1]}+` : sliderValues[1]}
                </Text>
            </Flex>
        <RangeSlider
            id='slider'
            aria-label={['min', 'max']}
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            colorScheme='teal'
            onChange={(v) => setSliderValues(v)}
            onChangeEnd={(value) => console.log(value)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <RangeSliderMark value={0} mt='0.5rem' ml='-0.25rem' fontSize='sm'>
                <Text fontSize={'1rem'} fontWeight={500}>$0</Text>
            </RangeSliderMark>
            <RangeSliderMark value={1000} mt='0.5rem' ml='-1rem' fontSize='sm'>
                <Text fontSize={'1rem'} fontWeight={500}>$1k+</Text>
            </RangeSliderMark>
            {/*<RangeSliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                75%
            </RangeSliderMark>*/}
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`$${sliderValues[0]}`}
            >
                <RangeSliderThumb index={0} />
            </Tooltip>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`$${sliderValues[1]}`}
            >
                <RangeSliderThumb index={1} />
            </Tooltip>
        </RangeSlider>
        </>
    );
}

interface SlideProps {}
export function Slide(props: SlideProps) {
    const {} = props;
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <Slider
            id='slider'
            defaultValue={5}
            min={0}
            max={100}
            colorScheme='teal'
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                25%
            </SliderMark>
            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                50%
            </SliderMark>
            <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                75%
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${sliderValue}%`}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
    )
}