import Link from "next/link";

import api from "../api/server";
import StoreCard from "../components/StoreCard";

const HomePage = async () => {
  const stores = await api.list();

  return (
    <ul>
      {stores.map((store) => (
        <li key={store.id}>
          <Link href={`/${store.id}`}>
            <StoreCard store={store} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
