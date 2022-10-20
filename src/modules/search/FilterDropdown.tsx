import {Box, Button} from "@chakra-ui/react";
import React, {ReactNode} from "react";

interface FilterDropdownProps {
    label: ReactNode;
    menuContent: ReactNode;
    isMenuOpen?: boolean;
    setIsMenuOpen?: Function;
}
export function FilterDropdown(props: FilterDropdownProps) {
    const {
        label,
        menuContent
    } = props;
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const [offsetX, setOffsetX] = React.useState(0);
    React.useLayoutEffect(() => {
        const triggerRect = triggerRef.current?.getBoundingClientRect();
        const width = triggerRect?.width || 0;
        const menuWidth = menuRef.current?.getBoundingClientRect().width || 0;
        setOffsetX(((menuWidth/2) - (width/2)) - menuWidth/2);
    }, []);
    return(
        <Box position={'relative'}>
            <Button variant={'outline'} fontSize={'1rem'} size={'lg'} ref={triggerRef} onClick={() => setIsOpen((v: boolean) => !v)}>{label}</Button>
            <Box borderRadius={'0.25rem'} border={'1px solid rgba(21,21,21,0.1)'} zIndex={'10001'} ref={menuRef} display={isOpen ? 'block' : 'none'} top={'calc(100% + 0.5rem)'} left={`calc(0% + ${offsetX}px)`} bg={'white'} position={'absolute'}>
                {menuContent}
            </Box>
        </Box>
    );
}

function FilterMenu() {

}
