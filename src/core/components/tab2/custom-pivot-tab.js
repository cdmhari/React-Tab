import React from 'react';
import PropTypes from 'prop-types';

class CustomTabHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
    }
    handleTabChange() {
        this.props.onClick(this.props.currentTabIndex);
        this.props.onChange(this.props.currentTabIndex);
    }
    render() {
        return (
            <li
                className={`tab-item ${this.props.activeTab ? 'active-tab' : ''}`}
                onClick={this.handleTabChange}>
                {this.props.children}
            </li>
        );
    }
}
CustomTabHeader.propTypes = {
    displayName: PropTypes.string
};

CustomTabHeader.defaultProps = {
    displayName: 'CustomTabHeader'
};

class TabNav extends React.Component {
    render() {
        return <React.Fragment></React.Fragment>;
    }
};

class CustomPivotTab extends React.Component {
    constructor(props) {
        super(props);
        /* Index maintained in the root component and the same is passed down to Tab Nav as props */
        this.state = {
            activeTabIndex: this.props.activeTabIndex
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

    /* clone the given component, to pass additional props */
    renderTabHeaders() {
        return this.props.children.map((child, index) => {
            const tabNavProps = {
                key: index,
                currentTabIndex: index,
                activeTab: index === this.state.activeTabIndex,
                onClick: this.handleTabClick,
                onChange: child.props.children[0].props.onChange
            };
            return React.cloneElement(child.props.children[0], tabNavProps);
        });
    }

    renderTabContent() {
        return this.props.children.map((child, index) => {
            if (index === this.state.activeTabIndex) {
                return child.props.children[1];
            }
        })
    }

    render() {
        return (
            <div className="tabs">
                <ul className="tab-items-wrap">
                    {this.renderTabHeaders()}
                </ul>
                <div className="tab-content-wrap">
                    {this.renderTabContent()}
                </div>
            </div>
        );
    }

};

CustomPivotTab.propTypes = {
    activeTabIndex: PropTypes.number
};

CustomPivotTab.defaultProps = {
    activeTabIndex: 0
};

export {
    CustomPivotTab,
    TabNav,
    CustomTabHeader
}