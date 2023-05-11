import React from "react";
import {Flex} from "@chakra-ui/react";
import {天干} from "../../types";
import {ColorTag} from "./ColorTag.tsx";
import {Section} from "./Section.tsx";
import {Item} from "./Item.tsx";

const data: Record<天干, React.ReactNode> = {
    甲: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="blue" text="淺藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 可以平衡
            </Item>
            <Item>
                穿 <ColorTag colorScheme="yellow" text="全黃" /> 脾氣好
            </Item>
            <Item>
                穿 <ColorTag color={["red.700", "gray.700"]} bg={["red.100", "white"]} text={["紅", "白"]} /> 有貴人
            </Item>
            <Item>
                不可穿 <ColorTag colorScheme="red" text="全紅" />, 惹是生非
            </Item>
        </Section>
    ),
    乙: (
        <Section>
            <Item>
                穿 <ColorTag color={["blue.700", "gray.700"]} bg={["blue.100", "white"]} text={["藍", "白"]} /> 或{" "}
                <ColorTag color={["green.700", "gray.700"]} bg={["green.100", "white"]} text={["綠", "白"]} /> 都可以
            </Item>
            <Item>
                穿 <ColorTag colorScheme={["blue", "green"]} text={["藍", "綠"]} /> 可以有平衡作用
            </Item>
            <Item>
                穿 <ColorTag colorScheme="purple" text="全紫色" /> 或 <ColorTag colorScheme="yellow" text="全黃色" /> 或 <ColorTag colorScheme={["purple", "yellow"]} text={["紫色", "黃色"]} /> 或{" "}
                <ColorTag color={["white", "purple.700", "yellow.700"]} bg={["gray.900", "purple.100", "yellow.100"]} text={["黑色", "紫色", "黃色"]} /> 有貴人幫
            </Item>
            <Item>
                不過穿
                <ColorTag color={["yellow.700", "gray.700"]} bg={["yellow.100", "white"]} text={["黃色", "白色"]} /> 或{" "}
                <ColorTag color={["white", "white"]} bg={["gray.900", "gray.700"]} text={["黑色", "深色"]} /> 都「不可以」, 會容易情緒化
            </Item>
        </Section>
    ),
    丙: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="red" text="全紅色" /> 頂住。如果表面不能穿 <ColorTag colorScheme="red" text="全紅色" />, 最少打底用
            </Item>
            <Item>
                穿
                <ColorTag color={["gray.700", "blue.700"]} bg={["white", "blue.100"]} text={["白色", "淺藍"]} /> 或{" "}
                <ColorTag color={["gray.700", "green.700"]} bg={["white", "green.100"]} text={["白色", "綠色"]} />
                有貴人
            </Item>
            <Item>
                忌穿
                <ColorTag colorScheme={["blue", "yellow"]} text={["藍色", "黃色"]} /> 或 <ColorTag colorScheme={["green", "yellow"]} text={["綠色", "黃色"]} />
            </Item>
            <Item bold>此日最怕「悲觀情緒」來侵犯, 情緒壞, 運氣跟住變壞</Item>
        </Section>
    ),
    丁: (
        <Section>
            <Item>
                穿 <ColorTag color={["yellow.700", "gray.700"]} bg={["yellow.100", "white"]} text={["黃色", "白色"]} /> 會細心
            </Item>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 有平衡作用
            </Item>
            <Item>
                穿 <ColorTag colorScheme="yellow" text="光亮顏色" />, 有助溝通, 減少誤會
            </Item>
            <Item>
                穿 <ColorTag color={["gray.700", "blue.700"]} bg={["white", "blue.100"]} text={["白色", "淺藍"]} /> 或{" "}
                <ColorTag color={["gray.700", "green.700"]} bg={["white", "green.100"]} text={["白色", "綠色"]} />
                有貴人
            </Item>
            <Item>
                忌穿 <ColorTag color="white" bg="orange.700" text="啡色" /> 或 <ColorTag color="white" bg="gray.700" text="深色" />, 絕對「溝通不良」
            </Item>
        </Section>
    ),
    戊: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 可平衡心情
            </Item>
            <Item>
                穿
                <ColorTag color={["white", "yellow.700"]} bg={["gray.900", "yellow.100"]} text={["黑色", "黃色"]} /> 有貴人
            </Item>
            <Item>
                忌穿
                <ColorTag color={["blue.700", "gray.700"]} bg={["blue.100", "white"]} text={["藍色", "白色"]} /> 或
                <ColorTag color={["green.700", "gray.700"]} bg={["green.100", "white"]} text={["綠色", "白色"]} />, 會因「鑽牛角尖」而壞事
            </Item>
            <Item>
                不要穿
                <ColorTag colorScheme={["red", "blue"]} text={["紅色", "藍色"]} /> 或 <ColorTag colorScheme={["red", "green"]} text={["紅色", "綠色"]} />, 要甚麼沒甚麼
            </Item>
        </Section>
    ),
    己: (
        <Section>
            <Item>
                穿 <ColorTag color={["red.700", "gray.700"]} bg={["red.100", "white"]} text={["紅色", "白色"]} /> 好
            </Item>
            <Item>
                穿 <ColorTag colorScheme="yellow" text="全黃色" /> 有貴人
            </Item>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 心理平衡
            </Item>
            <Item>
                忌穿 <ColorTag color={["white", "yellow.700"]} bg={["gray.900", "yellow.100"]} text={["黑色", "黃色"]} />, 會說話得罪人而不自知,
                <ColorTag color="white" bg="orange.700" text="全啡色" /> 亦不可, 衝動/任性
            </Item>
            <Item bold>今天遇「問題」, 最好到廟拜拜神、亦可去敎堂祈祈禱等, 能解厄運</Item>
        </Section>
    ),
    庚: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="red" text="全红色" /> 好, 穿 <ColorTag colorScheme="yellow" text="全黃色" /> 脾氣好
            </Item>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 可以平衡心情
            </Item>
            <Item>
                穿 <ColorTag color={["red.700", "gray.700"]} bg={["red.100", "white"]} text={["紅色", "白色"]} /> 有貴人
            </Item>
            <Item>
                忌穿 <ColorTag color="white" bg="orange.700" text="全啡色" />, 協調不了任何事, 左右為難
            </Item>
            <Item bold>今日一定要「守信用」</Item>
        </Section>
    ),
    辛: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 好, 平衡心理
            </Item>
            <Item>
                穿
                <ColorTag color={["white", "yellow.700"]} bg={["gray.900", "yellow.100"]} text={["黑色", "黃色"]} /> 有貴人
            </Item>
            <Item>
                忌穿 <ColorTag color={["gray.700", "blue.700"]} bg={["white", "blue.100"]} text={["黃色", "藍色"]} /> 太急, 文書容易處理出問題
            </Item>
            <Item>
                <ColorTag color="white" bg="orange.700" text="啡色" /> 亦不能著, 溝通不良
            </Item>
        </Section>
    ),
    壬: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="yellow" text="全黃色" /> 最好
            </Item>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 可以平衡心理
            </Item>
            <Item>
                <ColorTag color={["red.700", "gray.700"]} bg={["red.100", "white"]} text={["紅色", "白色"]} />
                不能穿, 會破財
            </Item>
            <Item bold>是日為捐錢日</Item>
        </Section>
    ),
    癸: (
        <Section>
            <Item>
                穿 <ColorTag colorScheme="blue" text="全藍" /> 或 <ColorTag colorScheme="green" text="綠色" /> 好，心態平衡
            </Item>
            <Item>
                穿
                <ColorTag color={["yellow.700", "gray.700"]} bg={["yellow.100", "white"]} text={["黃色", "白色"]} /> 有貴人
            </Item>
            <Item>
                忌穿
                <ColorTag colorScheme={["blue", "red"]} text={["藍色", "紅色"]} /> 或 <ColorTag colorScheme={["green", "red"]} text={["綠色", "紅色"]} />, 會做成不知進退
            </Item>
            <Item bold>是日要學識「不強求」, 因為今天要什麼沒什麼</Item>
        </Section>
    ),
};

interface Props {
    day: 天干;
}

export const ColorGuide = React.memo<Props>(({day}) => {
    return (
        <Flex flexDirection="column" bgColor="rgb(255 255 255 / 50%)" borderRadius={20} m={4} boxShadow="md">
            <Flex bgColor="purple.500" borderTopRadius={20} justifyContent="center" color="white" fontWeight="bold" py={1.5}>
                顏色風水
            </Flex>
            <Flex px={4} py={2}>
                {data[day]}
            </Flex>
        </Flex>
    );
});
