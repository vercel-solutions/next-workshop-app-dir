import type {Store} from "../types";

const StoreCard = ({store}: {store: Store}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="font-bold">{store.title}</p>
      <p>{store.description}</p>
      <p>※ {store.address}</p>
    </div>
  );
};

export default StoreCard;
