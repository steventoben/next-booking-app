import {
    Box,
    Flex,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useCheckboxGroup, useRadio,
    useRadioGroup,
    useUpdateEffect
} from "@chakra-ui/react";
import {Checkbox} from "@chakra-ui/react";
import React from "react";
import {MdStarRate} from "react-icons/md";
import {Rating} from "../../modules/rating/Rating";

export type OptionType = {
    value: string | number;
    label: string;
};

interface CheckboxGroupProps {
    options: OptionType[];
    onChange: Function;
    activeValues?: Array<string|number>;
}
export function CheckboxGroup(props: CheckboxGroupProps) {
    const {
        options,
        onChange: onChangeCb,
        activeValues = []
    } = props;
    const {value, getCheckboxProps, onChange: onGroupChange, setValue} = useCheckboxGroup({defaultValue: activeValues});
    function handleChange(ev: React.ChangeEvent) {
        //setValue(prevState => [...prevState, ev.target.getAttribute('value')||'ERROR'])
        console.log(value);
        console.log(ev);
        onGroupChange(ev.target.getAttribute('value')||'');
        /*if(onChangeCb) {
            onChangeCb(ev, value);
        }*/
    }
    useUpdateEffect(()=>{
        if(onChangeCb) {
            onChangeCb(null, value);
        }
    },[value]);
    useUpdateEffect(() => {
        if(onChangeCb) {
            console.log(activeValues);
            console.log(value);
            setValue(activeValues);
            onChangeCb(null, activeValues);
        }
    }, [activeValues]);
    return(
        <Stack>
            {options.map((option) => {
                return(
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} key={`option-cb-${option.label}-${option.value}`}>
                        <Checkbox value={option.value} {...getCheckboxProps({value: option.value})} onChange={handleChange}>{option.label}</Checkbox>
                        <Text fontWeight={300} color={'hsla(210, 40%, 17%, 0.9)'} fontSize={'0.75rem'}>({Math.round(Math.random() * 100)})</Text>
                    </Box>
                );
            })}
            {/*<Checkbox value={'0'} {...getCheckboxProps({value: '0'})}>This is value of 0</Checkbox>
            <Checkbox value={'1'} {...getCheckboxProps({value: '1'})}>This is value of 1</Checkbox>
            <Checkbox value={'2'} {...getCheckboxProps({value: '2'})}>This is value of 2</Checkbox>
            <Checkbox value={'3'} {...getCheckboxProps({value: '3'})}>This is value of 3</Checkbox>*/}
        </Stack>
    );
}

export function StarsCheckboxGroup(props: CheckboxGroupProps) {
    const {
        options,
        onChange: onChangeCb
    } = props;
    const {value, getRadioProps, getRootProps, htmlProps, onChange: onGroupChange, setValue} = useRadioGroup({defaultValue: 2, name: 't', isNative: false});// useCheckboxGroup({defaultValue: []});
    const {getCheckboxProps, getInputProps} = useRadio({});

    function handleChange(ev: React.ChangeEvent) {
        //setValue(prevState => [...prevState, ev.target.getAttribute('value')||'ERROR'])
        console.log(value);
        setValue(ev.target.getAttribute('value')||'')
        console.log(ev);
        onGroupChange(ev.target.getAttribute('value')||'');
        if(onChangeCb) {
            onChangeCb(ev, value);
        }
    }
    useUpdateEffect(()=>{
        if(onChangeCb) {
            onChangeCb(null, value);
        }
        console.log(value)
    },[value]);
    return(
        <Stack {...getRootProps()}>
            {[1, 2, 3, 4, 5].map((option) => {
                return(
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} key={`option-rb-${option}-${option}`}>
                        <Radio key={option} isChecked={value==option} value={option} {...getCheckboxProps({})} onChange={handleChange}>
                            <Flex>
                                <Text mr={'0.5rem'} fontWeight={300} color={'hsla(210, 40%, 17%, 0.9)'} fontSize={'0.75rem'}>{option}</Text>
                                <Rating rating={option+1}/>
                            </Flex>
                        </Radio>
                    </Box>
                );
            })}
        </Stack>
    );
}
