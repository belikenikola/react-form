import { atom } from 'recoil';

export const stateAtom = atom({
  key: 'stateAtom', // unique ID (with respect to other atoms/selectors)
  default: {
    name: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    seat: '',
    allergies: '',
    food: '',
  }, // default value (aka initial value)
});
