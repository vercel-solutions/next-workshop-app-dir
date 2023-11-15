"use client";

import {useEffect, useState} from "react";
import Link from "next/link";

import {Store} from "../types";
import StoreCard from "../components/StoreCard";
import api from "../api";

const HomePage = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    api.store.list().then(setStores);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {stores.map((store) => (
        <Link key={store.id} href={`/${store.id}`}>
          <StoreCard store={store} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
