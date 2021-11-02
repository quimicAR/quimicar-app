import {IAtom} from '../../interfaces';
import {AxiosResponse} from 'axios';
import api from '..';

export const getAllElements = async (): Promise<AxiosResponse<IAtom[]>> =>
  await api.get('/elements');
