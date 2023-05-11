import React from "react";
import {Flex, Tag, ThemeTypings} from "@chakra-ui/react";

interface Props {
    colorScheme?: ThemeTypings["colorSchemes"] | ThemeTypings["colorSchemes"][];
    bg?: string | string[];
    color?: string | string[];
    text: string | string[];
}

export const ColorTag = React.memo<Props>(({colorScheme, bg, color, text}) => {
    if (Array.isArray(colorScheme) || Array.isArray(bg) || Array.isArray(color) || Array.isArray(text)) {
        return (
            <Flex display="inline-flex" alignItems="center" mx={1} my={0.5}>
                {(text as string[])?.map((_, i) => (
                    <Tag
                        key={i}
                        colorScheme={colorScheme?.[i]}
                        bgColor={bg?.[i]}
                        color={color?.[i]}
                        borderEndRadius={i !== text.length - 1 ? 0 : undefined}
                        borderStartRadius={i !== 0 ? 0 : undefined}
                    >
                        {text[i]}
                    </Tag>
                ))}
            </Flex>
        );
    }

    return (
        <Tag colorScheme={colorScheme as string} bgColor={bg} color={color} mx={1}  my={0.5}>
            {text}
        </Tag>
    );
});
