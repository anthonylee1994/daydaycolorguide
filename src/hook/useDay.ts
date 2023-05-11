import {天干} from "../types.ts";
import moment from "moment";
import * as lunar from "@tony801015/chinese-lunar";

export const useDay = (date: Date): 天干 => {
    const m = moment(date);
    return lunar(...m.format("YYYY-MM-DD").split("-")).chineseDay.split("")[0] as 天干;
};
