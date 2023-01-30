import type {GetStaticProps, NextPage} from "next";
import type {Store} from "../types";

import Link from "next/link";

import api from "../api";
import StoreCard from "../components/StoreCard";
import Stack from "../components/Stack";

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
    <Stack>
      {stores.map((store) => (
        <Link key={store.id} href={`/${store.id}`}>
          <StoreCard store={store} />
        </Link>
      ))}
    </Stack>
  );
};

export default HomePage;
