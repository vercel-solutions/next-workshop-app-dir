import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {Store} from "../types";

import {useEffect, useState} from "react";

import serverApi from "../api/server";
import clientApi from "../api/client";
import StoreCard from "../components/StoreCard";

type Props = {
  store: Store;
};

export const getStaticProps: GetStaticProps<Props, {store: string}> = async ({params}) => {
  const store = await serverApi.fetch(params?.store!);

  return {
    props: {store},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const StorePage: NextPage<Props> = ({store}) => {
  const [visitors, setVisitors] = useState<number>(0);

  useEffect(() => {
    clientApi.visitors().then(setVisitors);
  }, []);

  return (
    <div>
      <StoreCard store={store} />
      <p>Visitors: {visitors}</p>
    </div>
  );
};

export default StorePage;
