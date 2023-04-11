import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { educationData } from "../../data";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

export default function Education() {
  return (
    <VerticalTimeline layout="1-column-right" lineColor="var(--themeColor)">
      {educationData.map((data) => (
        <VerticalTimelineElement
          style={{ margin: "0 0 2rem 0" }}
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "var(--cardColor)",
            color: "var(--textColor)",
            boxShadow: "0 3px 0 var(--themeColor), 0 2px 4px rgba(0,0,0, 0.15)",
            wordSpacing: "2px",
          }}
          contentArrowStyle={{ borderLeft: "7px solid #232631" }}
          date={data.date}
          dateClassName="timeline-date"
          icon={<i className="fa-solid fa-graduation-cap timeline-icon"></i>}
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
            {data.institute}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontSize: "1.2rem" }}
          >
            {data.place}
          </h4>
          <p style={{ fontSize: "1.2rem" }}>
            {data.degree} --- {data.percentage}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
