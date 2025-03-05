import type {Store} from "../types";

function StoreCard({store}: {store: Store}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <h2 className="text-xl font-bold">{store.title}</h2>
      <p className="text-primary-400 text-sm text-white/50">{store.description}</p>
      <p className="text-sm text-white/70">※ {store.address}</p>
    </div>
  );
}

export default StoreCard;
