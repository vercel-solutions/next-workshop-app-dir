import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import api from "../../api";
import StoreCard from "../../components/StoreCard";
import Rating from "../../components/Rating";
import Visitors from "../../components/Visitors";
import Stack from "../../components/Stack";

type Props = {
  store: Store;
};

export const getStaticProps: GetStaticProps<Props, {store: string}> = async ({params}) => {
  const store = await api.store.fetch(params?.store!);

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

const StoreRatingPage: NextPage<Props> = ({store}) => {
  const [visitors, setVisitors] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  async function handleRatingChange(value: number) {
    const rating: number = await api.store.rating.update(store.id, value);

    setRating(rating);
    alert("Thank you for your feedback!");
  }

  useEffect(() => {
    api.store.visitors.fetch(store.id).then(setVisitors);
    api.store.rating.fetch(store.id).then(setRating);
  }, [store.id]);

  return (
    <Stack>
      <StoreCard store={store} />
      <Visitors>{visitors}</Visitors>
      <Rating value={rating} onChange={handleRatingChange} />
      <nav
        style={{borderTop: "1px solid var(--dark-500)", paddingTop: 24, display: "flex", gap: 24}}
      >
        <Link href={`/${store.id}`}>☀ schedule</Link>
        <Link href={`/${store.id}/rating`}>★ rating</Link>
      </nav>
    </Stack>
  );
};

export default StoreRatingPage;
