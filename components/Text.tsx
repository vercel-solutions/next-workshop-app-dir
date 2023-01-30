type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: React.CSSProperties["fontSize"];
  weight?: React.CSSProperties["fontWeight"];
  color?: React.CSSProperties["color"];
  align?: React.CSSProperties["textAlign"];
};

const Text: React.FC<Props> = ({
  size = 16,
  color = "text",
  weight = "normal",
  align = "start",
  style = {},
  children,
  ...props
}) => {
  return (
    <p
      style={{
        fontSize: size,
        textAlign: align,
        color: `var(--${color})`,
        fontWeight: weight,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
