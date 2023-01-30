type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  direction?: React.CSSProperties["flexDirection"];
  gap?: React.CSSProperties["gap"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  padding?: React.CSSProperties["padding"];
  children: React.ReactNode;
};

const Stack: React.FC<Props> = ({
  gap = 24,
  direction = "column",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  padding = 0,
  style = {},
  children,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap,
        padding,
        alignItems,
        justifyContent,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Stack;
