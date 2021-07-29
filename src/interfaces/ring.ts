// eslint-disable-next-line @typescript-eslint/no-unused-vars
import IEletron from './eletron';

export default interface IRing {
  id: number;
  scale: number[];
  eletrons: IEletron[];
  animation?: any;
}
