import { reefState,StatusDataObject} from '@reef-chain/util-lib';
import { useEffect, useState } from 'react';
import { TokenTransfer } from '../state';
import { useObservableState } from './useObservableState';

const { FeedbackStatusCode } = reefState;

type UseTxHistory = [TokenTransfer[], boolean];
export const useTxHistory = (): UseTxHistory => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // @ts-ignore
  const txHistoryStatus:StatusDataObject<TokenTransfer[]> = useObservableState(reefState.selectedTransactionHistory_status$);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!txHistoryStatus || txHistoryStatus?.hasStatus(FeedbackStatusCode.LOADING));
    if (txHistoryStatus) {
      // @ts-ignore
      setHistory(txHistoryStatus.data);
    }
  }, [txHistoryStatus]);

  return [history, loading];
};
