type Props = {
  children: React.ReactNode;
};

const Visitors: React.FC<Props> = ({children}) => {
  return <div>Visitors: {children}</div>;
};

export default Visitors;
