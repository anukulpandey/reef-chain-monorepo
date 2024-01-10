// @ts-nocheck
import { useRef ,useState} from "react"
import { CSSTransition } from 'react-transition-group';

import Icon from "./../../atoms/Icon"
import {  faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';

import AccountComponent from "./Account"
import Tabs from "../../atoms/Tabs"
import Dropdown from "../../atoms/Dropdown/Dropdown"
import DropdownItem from "../../atoms/Dropdown/DropdownItem"
import Button from "../../atoms/Button";
import { localizedStrings as strings } from "../../../l10n/l10n";

export type Account = {
  name?: string,
  address: string,
  evmAddress?: string,
  source?: string,
  isEvmClaimed?:boolean,
}

export type Network = 'mainnet' | 'testnet'
export type Language = 'en' | 'hi'

export interface Props {
  isOpen: boolean,
  accounts?: Account[],
  selectedAccount?: Account | null | undefined,
  selectedNetwork?: Network,
  availableNetworks?:Network[],
  onClose?: (...args: any[]) => any,
  onSelect?: (...args: any[]) => any,
  onNetworkSelect?: (network: Network) => any,
  onLanguageSelect?: (language: Language) => any,
  className?: string
}

const AccountSelector = ({
  isOpen,
  accounts,
  selectedAccount,
  availableNetworks,
  selectedNetwork,
  onClose,
  onSelect,
  onNetworkSelect,
  onLanguageSelect,
  className
}: Props): JSX.Element => {
  const wrapper = useRef(null)

  const isSelected = (account: Account): boolean => {
    return !!selectedAccount?.address
      && account.address === selectedAccount.address
      && account.source === selectedAccount.source
  }

  const select = (account: Account) => {
    if (onSelect) onSelect(account)
  }

  const opened = () => document.body.style.overflow = "hidden"
  const closed = () => document.body.style.overflow = ""

  const [isLanguageDropdownOpen, setLanguageDropdown] = useState(false)

  return (
    <div
      className={`
        uik-account-selector
        ${className || ''}
      `}
    >
      <CSSTransition
        in={isOpen}
        className='uik-account-selector__wrapper'
        nodeRef={wrapper}
        timeout={500}
        unmountOnExit
        onEnter={opened}
        onExited={closed}
      >
        <div
          ref={wrapper}
          className='uik-account-selector__wrapper'
        >
          <div className="uik-account-selector__content">
            <div className="uik-account-selector__head">
              <div className="uik-account-selector__title">{strings.select_account}</div>

              {
               !!onLanguageSelect &&
<div className="uik-account-selector__language">
  
              <Button
                text={strings.choose_language}
                size='large'
                onClick={() => setLanguageDropdown(true)}
              /> 
              <div className="uik-account-selector__language_dropdown_av">
  <Dropdown
    isOpen={isLanguageDropdownOpen}
    onClose={() => setLanguageDropdown(false)}
  >
      <DropdownItem
        icon={faGlobe}
        text='English'
        onClick={() => {
          onLanguageSelect('en');
          strings.setLanguage('en');
        }}
      />
      <DropdownItem
        icon={faGlobe}
        text='Hindi'
        onClick={() => {
          onLanguageSelect('hi');
          strings.setLanguage('hi');
      }}
      />
      
  </Dropdown>
              </div>
</div>
}

              {
                !!selectedNetwork && !!onNetworkSelect &&
                <Tabs
                  className="uik-account-selector__network"
                  value={selectedNetwork}
                  options={availableNetworks.map((val)=>{
                    return {value:val,text:strings[val]}
                  })}
                  onChange={onNetworkSelect}
                />
                }
             
              <button
                className="uik-account-selector__close-btn"
                type="button"
                onClick={onClose}
              >
                <Icon
                  className="uik-account-selector__close-btn-icon"
                  icon={faXmark}
                />
              </button>
            </div>

            <div className="uik-account-selector__accounts">
              {
                !!accounts && !!accounts.length &&
                accounts.map((account, index) => (
                  <AccountComponent
                    key={index}
                    className="uik-account-selector__account"
                    name={account.name}
                    address={account.address}
                    evmAddress={account.evmAddress}
                    source={account.source}
                    isEvmClaimed={account.isEvmClaimed}
                    onSelect={() => select(account)}
                    isSelected={isSelected(account)}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default AccountSelector