import {
    Box, Flex,
    RangeSlider,
    RangeSliderFilledTrack, RangeSliderMark, RangeSliderThumb, RangeSliderTrack,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack, Text,
    Tooltip, useUpdateEffect
} from "@chakra-ui/react";
import React from "react";
import {IFilters, useFilters} from "../filters/FiltersProvider";

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
interface Props {

}
export function RangeSliderWithText() {
    const {setPriceFilter, setFiltersState, priceFilter} = useFilters();
    const [sliderValues, setSliderValues] = React.useState(priceFilter || [0, 1000]);
    const [sliderValueMin, setSliderValueMin] = React.useState(0);
    const [sliderValueMax, setSliderValueMax] = React.useState(100);
    const [showTooltip, setShowTooltip] = React.useState(false);
    useUpdateEffect(() => {
        setPriceFilter(sliderValues);
        setFiltersState((prevState: IFilters) => ({...prevState, price: {...prevState.price, value: {_from: sliderValues[0], _to: sliderValues[1]}}}));
    }, [sliderValues]);
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
            defaultValue={sliderValues || [0, 1000]}
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
    const {setLocationFilter, locationFilter, setFiltersState} = useFilters();
    const [sliderValue, setSliderValue] = React.useState(locationFilter || 10)
    const [showTooltip, setShowTooltip] = React.useState(false)
    useUpdateEffect(()=>{
        setLocationFilter(sliderValue);
        setFiltersState((prevState: IFilters) => ({...prevState, location: {...prevState.location, value: {...prevState.location.value, distance: sliderValue}}}))
    },[sliderValue]);
    return (
        <Slider
            id='slider'
            defaultValue={sliderValue}
            min={0}
            max={50}
            colorScheme='teal'
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {/*<SliderMarkMemo value={10} mt='1' ml='-2.5' fontSize='sm'>
                10 miles
            </SliderMarkMemo>*/}
            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                50 miles
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
                label={`${sliderValue} miles`}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
    )
}
const SliderMarkMemo = React.memo(SliderMark);
