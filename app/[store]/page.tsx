import serverApi from "../../api/server";
import clientApi from "../../api/client";
import StoreCard from "../../components/StoreCard";

interface Props {
  params: {
    store: string;
  };
}

const StorePage = async ({params: {store: id}}: Props) => {
  const store = await serverApi.fetch(id);
  const visitors = await clientApi.visitors();

  return (
    <div>
      <StoreCard store={store} />
      <p>Visitors: {visitors}</p>
    </div>
  );
};

export default StorePage;
