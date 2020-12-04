import Store from '../store';

export type CurrentModal = 'information' | 'register' | '';

const initialState: CurrentModal = '';

class Modal extends Store<CurrentModal> {
  constructor() {
    super(initialState);
  }

  public changeCurrentModal(currentModal: CurrentModal): void {
    this.set(currentModal);
  }
}

export default new Modal();
