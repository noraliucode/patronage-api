export type ISubscription = {
  creator: string;
  supporter: string;
  pureProxy: string;
  expiresOn: number;
  subscribedTime: number;
  network: string;
};

export type IUser = {
  address: string;
  network: string;
  pubKey: string;
};

export type ICreator = {
  _id: {
    $oid: string;
  };
  identity: {
    email: string;
    twitter: string;
    display: string;
    web: string;
  };
  additionalInfo: {
    imgUrl: string;
    rate: {
      $numberDouble: string;
    };
    isSensitive: boolean;
    isUsd: boolean;
  };
  address: string;
  isOnchained: boolean;
  network: string;
};
