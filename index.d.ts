
  import React from "react";

  type DateType = Date | string | number;
  type ValueInfo = {
     date: DateType;
  };
  export type CalendarHeatmapProps = {
    values: ValueInfo[];
    numDays?: number;
    endDate?: DateType;
    gutterSize?: number;
    horizontal?: boolean;
    showMonthLabels?: boolean;
    monthLabelsColor?: string;
    showOutOfRangeDays?: boolean;
    showOutOfRangeDays?: boolean;
    tooltipDataAttrs?: Function | Record<string, any>;
    titleForValue?: Function;
    classForValue?: Function;
    onPress?: Function;
    colorArray?: string[];
  };

  declare const CalendarHeatmap: React.Component<CalendarHeatmapProps>;
  export default CalendarHeatmap;
