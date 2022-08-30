import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Head, Html, NextScript, Main} from "next/document";

class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html lang={'en'}>
                <Head />
                <body>
                    <ColorModeScript initialColorMode={'light'}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default Document;
