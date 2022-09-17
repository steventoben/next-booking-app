import {Box, Stack, Text, useCheckboxGroup, useUpdateEffect} from "@chakra-ui/react";
import {Checkbox} from "@chakra-ui/react";
import React from "react";

export type OptionType = {
    value: string | number;
    label: string;
};

interface CheckboxGroupProps {
    options: OptionType[];
    onChange: Function;
}
export function CheckboxGroup(props: CheckboxGroupProps) {
    const {
        options,
        onChange: onChangeCb
    } = props;
    const {value, getCheckboxProps, onChange: onGroupChange, setValue} = useCheckboxGroup({defaultValue: []});
    function handleChange(ev: React.ChangeEvent) {
        //setValue(prevState => [...prevState, ev.target.getAttribute('value')||'ERROR'])
        console.log(value);
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
    },[value]);
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
