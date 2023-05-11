import React from "react";
import {Td} from "@chakra-ui/react";

interface Props {
    color: string;
    w?: number;
    children: React.ReactNode;
}

export const Record = React.memo<Props>(({ color, w, children }) => {
    return (
        <Td fontWeight="bold" px={0} w={w} textAlign="center" border="none" bgColor={`${color}.200`} color={`${color}.800`}>
            {children}
        </Td>
    );
});
