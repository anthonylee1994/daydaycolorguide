import {天干} from "../types.ts";

const color = (day: 天干) => {
    switch (day) {
        case "甲":
        case "乙":
            return "green.500";
        case "丙":
        case "丁":
            return "red.500";
        case "戊":
        case "己":
            return "orange.500";
        case "庚":
        case "辛":
            return "yellow.500";
        case "壬":
        case "癸":
            return "blue.500";
    }
};

export const BaziUtil = Object.freeze({
    color,
});
