export type ISubscription = {
  creator: string;
  supporter: string;
  pureProxy: string;
  expiresOn: number;
  subscribedTime: number;
};

export type IUser = {
  address: string;
  network: string;
  pubKey: string;
};
