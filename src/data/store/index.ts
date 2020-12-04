import { writable } from 'svelte/store';

import type {
  Invalidator,
  Subscriber,
  Unsubscriber,
  Updater,
  Set,
} from '../types';

export default class Store<T> {
  private initialState: T;

  protected subscribe: (
    run: Subscriber<T>,
    invalidate?: Invalidator<T>
  ) => Unsubscriber;

  protected set: Set<T>;

  protected update: (updater: Updater<T>) => void;

  constructor(initialState: T) {
    this.initialState = initialState;

    const { subscribe, set, update } = writable<T>(initialState);

    this.subscribe = subscribe;
    this.set = set;
    this.update = update;
  }

  public execute(callbackFunction: (value: T) => void): Unsubscriber {
    return this.subscribe(callbackFunction);
  }

  public reset(): void {
    this.set(this.initialState);
  }
}
