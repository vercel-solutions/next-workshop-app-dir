import {useState} from "react";

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

const Rating: React.FC<Props> = ({value: initialValue, onChange}) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);

  return (
    <div style={{fontSize: "2rem"}} onMouseLeave={() => setHoverValue(null)}>
      {"★"
        .repeat(hoverValue || initialValue)
        .padEnd(5, "☆")
        .split("")
        .map((star, index) => (
          <span
            key={index}
            style={{cursor: "pointer"}}
            onClick={() => onChange?.(index + 1)}
            onMouseMove={() => setHoverValue(index + 1)}
          >
            {star}
          </span>
        ))}
    </div>
  );
};

export default Rating;
