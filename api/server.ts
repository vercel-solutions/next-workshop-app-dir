import {Store} from "../types";

export const MY_SUPER_SECRET_KEY = "my-super-secret-key";

const MOCK = [
  {
    id: "acme-broadway",
    title: "ACME Broadway",
    description: "The most centric ACME store in NY",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    location: {
      address: "CMA, broadway 2371",
      city: "New York",
    },
  },
  {
    id: "acme-fifth",
    title: "ACME fifth avenue",
    description: "The most centric ACME store in NY",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    location: {
      address: "Av. Patricio Peralta Ramos 4900",
      city: "New York",
    },
  },
  {
    id: "acme-central-park",
    title: "ACME Central Park",
    description: "The most centric ACME store in NY",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    location: {
      address: "Leandro N. Alem 3980",
      city: "New York",
    },
  },
];

const api = {
  getSuperSecretKey: () => MY_SUPER_SECRET_KEY,
  list: async (): Promise<Store[]> => MOCK,
  fetch: async (id: string): Promise<Store> => {
    const store = MOCK.find((store) => store.id === id);

    if (!store) {
      throw new Error("Store not found");
    }

    return store;
  },
  near: async (city: string): Promise<Store> => {
    return MOCK.find((store) => store.location.city === city) || MOCK[0];
  },
};

export default api;
