import type {GetStaticProps, NextPage} from "next";
import type {Store} from "../types";

import Link from "next/link";

import api from "../api";
import StoreCard from "../components/StoreCard";

type Props = {
  stores: Store[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stores: Store[] = await api.store.list();

  return {
    props: {stores},
  };
};

const HomePage: NextPage<Props> = ({stores}) => {
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
