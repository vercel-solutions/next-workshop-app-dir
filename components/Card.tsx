type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({children}: Props) => {
  return (
    <div
      style={{
        backgroundImage: "radial-gradient(at left top,#71717a,50px,#27272a 50%)",
        padding: "2px",
        borderRadius: "0.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--dark)",
          borderRadius: "0.5rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
