
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Platform, View } from 'react-native';
import { Container, Header, Title, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../actions/drawer';
import { popRoute } from '../actions/route';
import I18n from '../../i18n';
import theme from '../themes/base-theme';
import Footer from './common/footer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
    flex: 1,
  },
});

class FooterExample extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    // name: React.PropTypes.string,
    tab: React.PropTypes.shape({
      tabState: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute();
  }

  renderSelectedTab() {
    switch (this.props.tab.tabState) {
      case 'tab1':
        return (
          <View>
            <Text>{I18n.t('FOOTER.TABS')[0].text}</Text>
          </View>
        );
      case 'tab2':
        return (
          <View>
            <Text>{I18n.t('FOOTER.TABS')[1].text}</Text>
          </View>
        );
      case 'tab3':
        return (
          <View>
            <Text>{I18n.t('FOOTER.TABS')[2].text}</Text>
          </View>
        );
      default:
        return (
          <View>
            <Text>{I18n.t('FOOTER.DEFAULT')}</Text>
          </View>
        );
    }
  }
  render() {
    // const { props: { name } } = this;

    return (
      <Container style={styles.container} theme={theme}>
        <Header>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : I18n.t('HOME.TITLE')}</Title>

          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="add-shopping-cart" />
          </Button>

        </Header>
        <View style={{ flex: 1 }}>
          {this.renderSelectedTab()}
        </View>
        <View>
          <Footer />
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    // name: state.user.name,
    // index: state.list.selectedIndex,
    // list: state.list.list,
    tab: state.tab,
  };
}

export default connect(mapStateToProps, bindAction)(FooterExample);
