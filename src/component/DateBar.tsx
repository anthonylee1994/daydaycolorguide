import React from "react";
import {Flex, IconButton, Input} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import moment from "moment";

interface Props {
    date: Date;
    setDate: (date: Date) => void;
}

export const DateBar = React.memo<Props>(({date, setDate}) => {
    const onPreviousDay = () => {
        setDate(moment(date).subtract(1, "day").toDate());
    };

    const onNextDay = () => {
        setDate(moment(date).add(1, "day").toDate());
    };

    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setDate(moment().toDate());
        } else {
            setDate(moment(e.target.value).toDate());
        }
    };

    return (
        <Flex px={4}>
            <Flex w="full" boxShadow="md" borderRadius={20} bgColor="white">
                <IconButton onClick={onPreviousDay} colorScheme="purple" borderTopLeftRadius={20} borderBottomLeftRadius={0} borderEndRadius={0} aria-label="Back" icon={<ArrowBackIcon />} />
                <Input onChange={onDateChange} value={moment(date).format("YYYY-MM-DD")} textAlign="center" type="date" border="none" borderRadius={0} />
                <IconButton onClick={onNextDay} colorScheme="purple" borderStartRadius={0} borderTopRightRadius={20} borderBottomRightRadius={0} aria-label="Foreward" icon={<ArrowForwardIcon />} />
            </Flex>
        </Flex>
    );
});
