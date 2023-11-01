import {useState} from "react";

const Rating = ({
  value: initialValue,
  onChange,
}: {
  value: number;
  onChange?: (value: number) => void;
}) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);

  return (
    <span
      className="text-white cursor-pointer leading-none text-3xl"
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
    </span>
  );
};

export default Rating;
