import {Box, Button} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import {RangeSlide, RangeSliderWithText} from "../range/RangeSlide";

interface DropdownProps {}
export function Dropdown(props: DropdownProps) {
    const {} = props;
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <Box position={'relative'}>
            <Button bg={'white'} variant={'outline'} minWidth={'12rem'} onClick={() => setIsOpen((v) => !v)}>{'Price'}</Button>
            <Box bg={'white'} borderWidth={isOpen ? '1px' : '0'} overflow={'hidden'} position={'absolute'} minHeight={isOpen ? '12rem' : '0rem'} maxHeight={isOpen ? '12rem' : '0rem'} transform={'auto'} transition={'all 100ms ease'} width={'100%'} top={'100%'} borderRadius={'0.5rem'} borderStyle={'solid'} borderColor={'rgba(27,27,27,0.2)'}>
                <Box p={'1rem'} display={'flex'} alignItems={'center'} width={'100%'}>
                    <RangeSlide/>
                </Box>
            </Box>
        </Box>
    );
}
const isBrowser = typeof window !== "undefined";

interface StxDropdownProps {}
export function StxDropdown(props: StxDropdownProps) {
    const {} = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [_document, _setDocument] = React.useState<Document | null>(null);
    const menuAnchor = React.useRef<HTMLDivElement>(null);
    let menuPortal = isBrowser ? ReactDOM.createPortal(<div style={{transform: `translate3d(${menuAnchor.current?.getBoundingClientRect().x || 0}px, ${menuAnchor.current?.getBoundingClientRect().y}px, 0)`}}>Hello world</div>, (document.getElementById('portal') as Element), 'menu-portal') : null;
    React.useEffect(() => {
        _setDocument(document);
    }, []);
    React.useEffect(() => {
        if(_document) {
            if (menuAnchor.current) {
                menuPortal = ReactDOM.createPortal(<div
                    style={{transform: `translate3d(${menuAnchor.current.getBoundingClientRect().x}px, ${menuAnchor.current.getBoundingClientRect().y}px, 0)`}}>Hello
                    world</div>, (_document.getElementById('portal') as Element), 'menu-portal');
            }
        }
        }, [_document]);
    return(
        <Box position={'relative'}>
            <Button bg={'white'} variant={'outline'} minWidth={'12rem'} onClick={() => setIsOpen((v) => !v)}>{'Price'}</Button>
            <div ref={menuAnchor}></div>
            {isOpen && menuPortal}
        </Box>
    );
}
