import React, { Component } from 'react';
import { Button, Icon, Footer, FooterTab } from 'native-base';
import { Text, Platform } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../i18n';
import theme from '../../themes/base-theme';
import { changeTab } from '../../actions/tab';

class RNFooter extends Component {
  static propTypes = {
    changeTab: React.PropTypes.func,
    tab: React.PropTypes.shape({
      tabState: React.PropTypes.string,
    }),
  };

  changeTab(action) {
    // If same tab is selected return
    if (action === this.props.tab.tabState) {
      return;
    }
    this.props.changeTab(action);
  }

  renderFooter() {
    const footerTabs = I18n.t('FOOTER.TABS');
    return footerTabs.map((tabItem) => {
      return (
        <Button
          key={tabItem.action}
          active={this.props.tab.tabState === tabItem.action}
          onPress={() => this.changeTab(tabItem.action)}
        >
          <Icon name={tabItem.icon} />
        </Button>
      );
    });
  }

  render() {
    return (
      <Footer>
        <FooterTab style={{ height: theme.footerHeight }}>
          {this.renderFooter()}
        </FooterTab>
      </Footer>
    );
  }
}

const bindActions = (dispatch) => {
  return {
    changeTab: tab => dispatch(changeTab(tab)),
  };
};

const mapStateToProps = (state) => {
  return {
    tab: state.tab,
  };
};
export default connect(mapStateToProps, bindActions)(RNFooter);
