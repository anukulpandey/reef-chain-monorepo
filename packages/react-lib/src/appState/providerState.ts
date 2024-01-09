import { reefState } from '@reef-chain/util-lib';
import { Provider } from "@reef-defi/evm-provider";
import {Observable} from 'rxjs'

export const ACTIVE_NETWORK_LS_KEY = 'reef-app-active-network';
export const currentProvider$:Observable<Provider|undefined> = reefState.selectedProvider$;

export const currentNetwork$ = reefState.selectedNetwork$;
export const setCurrentNetwork = reefState.setSelectedNetwork;
