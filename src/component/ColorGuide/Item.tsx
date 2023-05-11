import React from "react";
import {Flex} from "@chakra-ui/react";

interface Props {
    bold?: boolean;
    children: React.ReactNode;
}

export const Item = React.memo<Props>(({bold, children}) => {
    return <Flex mb={3} alignItems="center" flexWrap='wrap' wordBreak="break-all" fontWeight={bold ? "bold" : undefined}>{children}</Flex>;
});
