import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

import { educationData } from "../../data";

export default function Education() {
  return (
    <VerticalTimeline className="vertical-timeline--one-column-right education">
      {educationData.map((data) => (
        <VerticalTimelineElement
          key={data.institute}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--cardColor)",
            color: "var(--textColor)",
            boxShadow: "0 3px 0 var(--themeColor), 0 2px 4px rgba(0,0,0, 0.15)",
          }}
          contentArrowStyle={{ borderLeft: "7px solid #232631" }}
          date={data.date}
          iconStyle={{
            background: "var(--cardColor)",
            color: "var(--titleColor)",
            boxShadow: "0 0 0 4px var(--themeColor)",
          }}
          icon={<i className="fa-solid fa-graduation-cap timeline-icon"></i>}
        >
          <h3 className="vertical-timeline-element-title">{data.institute}</h3>
          <h4 className="vertical-timeline-element-subtitle">{data.place}</h4>
          <p>
            {data.degree} --- {data.percentage}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
