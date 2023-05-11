import React from "react";
import {Table, TableContainer, Tbody, Tr} from "@chakra-ui/react";
import {天干, 星} from "../../types";
import {Title} from "./Title.tsx";
import {Record} from "./Record.tsx";

const data: Record<天干, [星, 星, 星, 星, 星?]> = {
    甲: ["廉貞", "破軍", "武曲", "太陽"],
    乙: ["天機", "天梁", "紫微", "太陰"],
    丙: ["天同", "天機", "文昌", "廉貞"],
    丁: ["太陰", "天同", "天機", "巨門"],
    戊: ["貪狼", "太陰", "右弼", "天機"],
    己: ["武曲", "貪狼", "天梁", "文曲", "破軍"],
    庚: ["太陽", "武曲", "天相", "天同"],
    辛: ["巨門", "太陽", "文曲", "文昌", "七殺"],
    壬: ["天梁", "紫微", "左輔", "武曲"],
    癸: ["破軍", "巨門", "太陰", "貪狼"],
};

interface Props {
    day: 天干;
}

export const StarFlowTable = React.memo<Props>(({day}) => {
    const [祿, 權, 科, ...忌] = data[day];

    return (
        <TableContainer bgColor="rgb(255 255 255 / 50%)" borderRadius={20} m={4} boxShadow="md">
            <Table>
                <Tbody>
                    <Tr>
                        <Title color="yellow">祿</Title>
                        <Title color="red">權</Title>
                        <Title color="green">科</Title>
                        <Title color="blue">忌</Title>
                    </Tr>
                    <Tr>
                        <Record color="yellow" w={90}>{祿}</Record>
                        <Record color="red">{權}</Record>
                        <Record color="green">{科}</Record>
                        <Record color="blue" w={90}>{忌.join(", ")}</Record>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
});
