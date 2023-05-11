import React from "react";
import {Flex, Image, Text} from "@chakra-ui/react";
import Logo from "../asset/logo.svg";

export const AppBar = React.memo(() => {
    return (
        <Flex position="relative" justifyContent="space-evenly" alignItems="center" w="100%" p={2} pb={3} color="white">
            <Image src={Logo} alt="logo" boxSize="50px" position="absolute" left={5} />
            <Flex flexDirection="column" alignItems='center'>
                <Text fontSize="3xl" color="purple.500" fontFamily="caveat, cursive">
                    DayDayColourGuide
                </Text>
                <Text fontSize="md" color="purple.500">
                    每日嘅顏色風水指南
                </Text>
            </Flex>
        </Flex>
    );
});
