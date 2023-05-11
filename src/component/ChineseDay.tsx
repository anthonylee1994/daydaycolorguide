import {Flex, Text} from "@chakra-ui/react";
import React from "react";
import {天干} from "../types.ts";
import {BaziUtil} from "../util/BaziUtil.ts";

interface Props {
    day: 天干;
}

export const ChineseDay = React.memo<Props>(({day}) => {
    return (
        <Flex boxShadow="md" mx={4} borderBottomRadius={20} pt={2} pb={3} bgColor="rgb(255 255 255 / 50%)" justifyContent="center" alignItems="flex-end">
            <Text fontWeight='bold' color={BaziUtil.color(day)} fontSize="4xl">
                {day}
            </Text>
            <Text fontSize="xl" color='purple.700'>日</Text>
        </Flex>
    );
});
