"use client";

import type {Schedule as ISchedule, Store} from "../../types";

import {useEffect, useState} from "react";
import Link from "next/link";

import api from "../../api";
import StoreCard from "../../components/StoreCard";

const StoreSchedulePage = ({params}: {params: {store: string}}) => {
  const [store, setStore] = useState<Store | null>(null);
  const [visitors, setVisitors] = useState<number>(0);
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    api.store.fetch(params.store).then(setStore);
    api.store.visitors.fetch(params.store).then(setVisitors);
    api.store.schedule.fetch(params.store, timezone).then(setSchedule);
  }, [params.store]);

  return (
    <div className="flex flex-col gap-6">
      {store ? <StoreCard store={store} /> : null}
      <span className="font-bold text-white">Visitors: {visitors}</span>
      <div className="flex flex-col">
        {schedule.map(({date, start, end}, index) => (
          <div key={index} className="flex flex-row gap-2">
            <span className="font-bold">{date}</span>:
            <span className="text-white/70">
              {start} - {end}
            </span>
          </div>
        ))}
      </div>
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

export default StoreSchedulePage;
