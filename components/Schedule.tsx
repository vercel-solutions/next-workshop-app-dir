import type {Schedule} from "../types";

type Props = {
  schedule: Schedule[];
};

const Schedule: React.FC<Props> = ({schedule}) => {
  return (
    <ul>
      {schedule.map(({date, start, end}) => (
        <li key={date}>
          {date}: {start} - {end}
        </li>
      ))}
    </ul>
  );
};

export default Schedule;
