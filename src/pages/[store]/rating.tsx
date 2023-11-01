import type {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import type {Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import api from "../../api";
import StoreCard from "../../components/StoreCard";
import Rating from "../../components/Rating";

export const getStaticProps: GetStaticProps<
  {
    store: Store;
  },
  {store: string}
> = async ({params}) => {
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

const StoreRatingPage = ({store}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    <div className="flex flex-col">
      <StoreCard store={store} />
      <span className="font-bold text-white">Visitors: {visitors}</span>;
      <Rating value={rating} onChange={handleRatingChange} />
      <nav className="border-t-1 border-primary-500 pt-6 flex gap-6">
        <Link href={`/${store.id}`}>☀ schedule</Link>
        <Link href={`/${store.id}/rating`}>★ rating</Link>
      </nav>
    </div>
  );
};

export default StoreRatingPage;
