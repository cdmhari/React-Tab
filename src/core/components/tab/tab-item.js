import React from 'react';
import PropTypes from 'prop-types';

class TabItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    handleTabClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.currentTabIndex);
        typeof this.props.onChange === 'function' && this.props.onChange(this.props.currentTabIndex);
    }
    render() {
        const { activeTab, tabName, statusCount } = this.props;
        return (
            <li
                className={`tab-item ${activeTab ? 'active-tab' : ''}`}
                onClick={this.handleTabClick}>
                <a>{tabName}</a>
                <div>{statusCount}</div>
            </li>
        );
    }

}
TabItem.defaultProps = {
    displayName: 'TabHeader'
};
TabItem.propTypes = {
    onClick: PropTypes.func,
    activeTab: PropTypes.bool,
    tabName: PropTypes.string.isRequired,
    statusCount: PropTypes.number,
    displayName: PropTypes.string
};

export default TabItem;