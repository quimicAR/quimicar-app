import {IElement} from '../../interfaces';
import {AxiosResponse} from 'axios';
import api from '..';

export const getAllElements = async (): Promise<AxiosResponse<IElement[]>> =>
  await api.get('/elements');
