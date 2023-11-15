"use client";

import type {Store} from "../../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import StoreCard from "../../../components/StoreCard";
import api from "../../../api";
import Rating from "../../../components/Rating";

const StoreRatingPage = ({params}: {params: {store: string}}) => {
  const [store, setStore] = useState<Store | null>(null);
  const [visitors, setVisitors] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  async function handleRatingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const ratingValue = new FormData(event.currentTarget).get("rating");
    const rating: number = await api.store.rating.update(params.store, Number(ratingValue));

    setRating(rating);
    alert("Thank you for your feedback!");
  }

  useEffect(() => {
    api.store.fetch(params.store).then(setStore);
    api.store.visitors.fetch(params.store).then(setVisitors);
    api.store.rating.fetch(params.store).then(setRating);
  }, [params.store]);

  return (
    <div className="flex flex-col gap-6">
      {store ? <StoreCard store={store} /> : null}
      <span className="font-bold text-white">Visitors: {visitors}</span>
      <form onSubmit={handleRatingSubmit}>
        <Rating name="rating" value={rating} />
      </form>
      <nav className="border-primary-700 border-t pt-6 flex gap-6">
        <Link className="underline underline-offset-2" href={`/${params.store}`}>
          ☀ schedule
        </Link>
        <Link className="underline underline-offset-2" href={`/${params.store}/rating`}>
          ★ rating
        </Link>
      </nav>
    </div>
  );
};

export default StoreRatingPage;
