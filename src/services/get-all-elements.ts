// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IAtom} from '../interfaces';

export const getAllElements = async (): Promise<IAtom[]> => {
  const resp = await fetch('https://quimicar-api.herokuapp.com/elements/');
  const data = await resp.json();
  return data;
};
