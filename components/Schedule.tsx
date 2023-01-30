import type {Schedule} from "../types";

import Stack from "./Stack";
import Text from "./Text";

type Props = {
  schedule: Schedule[];
};

const Schedule: React.FC<Props> = ({schedule}) => {
  return (
    <Stack gap={4}>
      {schedule.map(({date, start, end}) => (
        <Stack key={date} direction="row" gap={4}>
          <Text color="light" weight="bold">
            {date}
          </Text>
          :
          <Text color="text-500">
            {start} - {end}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default Schedule;
