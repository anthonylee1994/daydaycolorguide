import React from "react";
import {AppBar} from "./component/AppBar";
import {DateBar} from "./component/DateBar";
import {useDay} from "./hook/useDay.ts";
import {ChineseDay} from "./component/ChineseDay";
import {StarFlowTable} from "./component/StarFlowTable";
import {ColorGuide} from "./component/ColorGuide";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(new Date());
    const day = useDay(date);

    console.log("day", day);

    return (
        <React.Fragment>
            <AppBar />
            <DateBar date={date} setDate={setDate} />
            <ChineseDay day={day} />
            <StarFlowTable day={day} />
            <ColorGuide day={day} />
        </React.Fragment>
    );
});
