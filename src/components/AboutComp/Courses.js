import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

import { coursesData } from "../../data";

export default function Courses() {
  return (
    <VerticalTimeline className="vertical-timeline--one-column-right courses">
      {coursesData.map((data) => (
        <VerticalTimelineElement
          key={data.id}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--cardColor)",
            color: "var(--textColor)",
            boxShadow: "0 3px 0 var(--themeColor), 0 2px 4px rgba(0,0,0, 0.15)",
          }}
          contentArrowStyle={{ borderLeft: "7px solid #232631" }}
          iconStyle={{
            background: "var(--cardColor)",
            color: "var(--titleColor)",
            boxShadow: "0 0 0 4px var(--themeColor)",
          }}
          icon={<i className="fa-solid fa-book-open-reader timeline-icon"></i>}
        >
          <h3 className="vertical-timeline-element-subtitle">{data.course}</h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
