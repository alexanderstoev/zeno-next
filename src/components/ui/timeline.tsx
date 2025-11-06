import { IconPoint } from "@tabler/icons-react";

export type TimelineEvent = {
  user: string;
  date: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: any | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entityId?: any | null;
};
export type TimelineProps = {
  events: TimelineEvent[];
};
export const Timeline = ({ events }: TimelineProps) => {
  return (
    <ul className="timeline timeline-vertical">
      {events.map((event) => (
        <li key={crypto.randomUUID()} className="grid-cols-[1.5fr_auto_3fr]">
          <hr />
          <div className="timeline-start text-right">
            <p className="text-base">{event.user}</p>
            <p className="text-base-content/60">{event.date}</p>
          </div>
          <div className="timeline-middle text-primary">
            <IconPoint />
          </div>
          <div className="timeline-end timeline-box bg-base-200">
            <p className="text-base">{event.title}</p>
            <p className="text-base-content/60">{event.description}</p>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};
