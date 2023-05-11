import React from "react";
import {Td} from "@chakra-ui/react";

interface Props {
    color: string;
    children: React.ReactNode;
}

export const Title = React.memo<Props>(({ color, children }) => {
    return (
        <Td py={2} fontWeight="bold" textAlign="center" border="none" bgColor={`${color}.500`} color="white">
            {children}
        </Td>
    );
});
