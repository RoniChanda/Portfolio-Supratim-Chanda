import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { coursesData } from "../../data";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

export default function Courses() {
  return (
    <VerticalTimeline
      layout="1-column-right"
      className="courses"
      lineColor="var(--themeColor)"
    >
      {coursesData.map((data) => (
        <VerticalTimelineElement
          style={{ margin: "0 0 2rem 0" }}
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "var(--cardColor)",
            color: "var(--textColor)",
            boxShadow: "0 3px 0 var(--themeColor), 0 2px 4px rgba(0,0,0, 0.15)",
          }}
          contentArrowStyle={{ borderLeft: "7px solid #232631" }}
          icon={<i className="fa-solid fa-book-open-reader timeline-icon"></i>}
          iconStyle={{
            backgroundColor: "var(--cardColor)",
            color: "var(--titleColor)",
            boxShadow: "0 0 0 5px var(--themeColor)",
          }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontSize: "1.3rem" }}
          >
            {data.course}
          </h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
