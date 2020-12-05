export type Subscriber<T> = (value: T) => void;
export type Unsubscriber = () => void;
export type Updater<T> = (value: T) => T;
export type Invalidator<T> = (value?: T) => void;

export type Set<T> = (value: T) => void;

export interface ApiState<T> {
  isLoading: boolean;
  status: number;
  message: string;
  data: T;
}

export interface MutableValue<T> {
  isLoading?: boolean;
  status?: number;
  message?: string;
  data?: T;
}
