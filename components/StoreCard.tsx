import type {Store} from "../types";

import Stack from "./Stack";
import Text from "./Text";

interface Props {
  store: Store;
}

const StoreCard: React.FC<Props> = ({store}) => {
  return (
    <Stack gap={6}>
      <Text color="light" size={20} weight="bold">
        {store.title}
      </Text>
      <Text size={14}>{store.description}</Text>
      <Text color="text-500" size={14}>
        ※ {store.address}
      </Text>
    </Stack>
  );
};

export default StoreCard;
