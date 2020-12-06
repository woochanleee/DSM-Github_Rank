import { deflate } from 'zlib';

export default interface RankService {
  getRank(): Promise<void>;
}
