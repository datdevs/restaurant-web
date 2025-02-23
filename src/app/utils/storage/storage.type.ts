import { LocaleType } from '../../types';

type StorageObjectMap = {
  lang: LocaleType;
};

export type StorageObjectType = keyof StorageObjectMap;

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
