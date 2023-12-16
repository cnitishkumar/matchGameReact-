import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const tabClass = isActiveTab ? 'tab-button active-tab-btn' : 'tab-button'
  const onClickTabItem = () => {
    onClickTab(tabId)
  }
  return (
    <li className="list-item">
      <button type="button" className={tabClass} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
