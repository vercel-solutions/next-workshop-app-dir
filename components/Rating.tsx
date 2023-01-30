import {useState} from "react";

import Text from "./Text";

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

const Rating: React.FC<Props> = ({value: initialValue, onChange}) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);

  return (
    <Text
      color="white"
      size={32}
      style={{lineHeight: 1, cursor: "pointer"}}
      onMouseLeave={() => setHoverValue(null)}
    >
      {"★"
        .repeat(hoverValue || initialValue)
        .padEnd(5, "☆")
        .split("")
        .map((star, index) => (
          <span
            key={index}
            onClick={() => onChange?.(index + 1)}
            onMouseMove={() => setHoverValue(index + 1)}
          >
            {star}
          </span>
        ))}
    </Text>
  );
};

export default Rating;
