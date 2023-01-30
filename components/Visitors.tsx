import Text from "./Text";

type Props = {
  children: React.ReactNode;
};

const Visitors: React.FC<Props> = ({children}) => {
  return (
    <Text color="light" weight="bold">
      Visitors: {children}
    </Text>
  );
};

export default Visitors;
