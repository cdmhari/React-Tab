import React from 'react';
import PropTypes from 'prop-types';
import TabItem from './tab-item'

class PivotTab extends React.Component {
    constructor(props) {
        super(props);
        /* Index maintained in the root component and the same is passed down to Tab Navs as props */
        this.state = {
            activeTabIndex: 0
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex
        });
    }

    /* To prevent unnecessary re-rendering of renderTabs method on clicking the same Tab Nav item again and again */
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeTabIndex !== nextState.activeTabIndex) {
            return true;
        }
        return false;
    }

    renderTabs() {
        return this.props.tabData.map((tabItem, index) => {
            return (<TabItem
                key={index}
                currentTabIndex={index}
                onClick={this.handleTabClick}
                activeTab={index === this.state.activeTabIndex}
                tabName={tabItem.tabName}
                statusCount={tabItem.statusCount} />);
        });
    }

    /* We clone the given component, to pass additional props */
    renderTabContent() {
        const contentElement = this.props.tabData[this.state.activeTabIndex].tabContent;
        return React.cloneElement(contentElement, {
            className: `is-active-tab-content`
        });
    }

    render() {
        return (
            <div className="tabs">
                <ul className="tab-items-wrap">
                    {this.renderTabs()}
                </ul>
                <div className="tab-content-wrap">
                    {this.renderTabContent()}
                </div>
            </div>
        );
    }

};

PivotTab.propTypes = {
    activeTabIndex: PropTypes.number
};

PivotTab.defaultProps = {
    activeTabIndex: 0
};

export default PivotTab;
