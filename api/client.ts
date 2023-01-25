import {Schedule, Store} from "../types";

function getTimeFromUTC(time: number, timezone: string = "UTC") {
  const date = new Date(Date.UTC(1970, 1, 1, time, 0, 0, 0));

  return date.toLocaleTimeString("en-US", {timeZone: timezone});
}

const api = {
  visitors: {
    fetch: async (_id: Store["id"]) => Math.ceil(Math.random() * 100),
  },
  rating: {
    fetch: async (_id: Store["id"]): Promise<number> =>
      new Promise((resolve) => setTimeout(() => resolve(Math.ceil(Math.random() * 5)), 1000)),
    update: async (_id: Store["id"], value: number) => value,
  },
  schedule: {
    fetch: async (_id: Store["id"], timezone: string = "UTC"): Promise<Schedule[]> => {
      return [
        {
          date: "Monday - Friday",
          start: getTimeFromUTC(9, timezone),
          end: getTimeFromUTC(18, timezone),
        },
        {
          date: "Saturday - Sunday",
          start: getTimeFromUTC(9, timezone),
          end: getTimeFromUTC(12, timezone),
        },
      ];
    },
  },
};

export default api;
