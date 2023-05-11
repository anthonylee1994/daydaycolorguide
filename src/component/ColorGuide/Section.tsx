import React from "react";
import {Flex} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

export const Section = React.memo<Props>(({children}) => {
    return <Flex flexDirection="column">{children}</Flex>;
});
