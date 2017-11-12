import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon, View } from 'native-base';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import { openDrawer } from '../actions/drawer';
import { popRoute } from '../actions/route';
import I18n from '../../i18n';
import theme from '../themes/base-theme';

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight - theme.toolbarHeight - 49,
  },
});

class BlankPage extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    // openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container} theme={theme}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} />
          </Button>
          <Title>{(name) ? this.props.name : I18n.t('SCROLLABLE_TABS.TITLE')}</Title>
          <View />
        </Header>

        <Content>
          <ScrollableTabView
            tabBarTextStyle={{
              color: theme.brandInverse,
              fontSize: 12,
              fontFamily: theme.fontFamily,
            }}
            tabBarPosition="top"
            tabBarBackgroundColor={theme.brandPrimary}
            renderTabBar={() => <DefaultTabBar
              underlineStyle={{ backgroundColor: theme.brandInverse }}
              style={{ elevation: 2 }}
            />}
          >
            <View style={styles.page} tabLabel={I18n.t('SCROLLABLE_TABS.TABS')[0]}>
              <Text>{I18n.t('SCROLLABLE_TABS.TABS')[0]}</Text>
            </View>
            <View style={styles.page} tabLabel={I18n.t('SCROLLABLE_TABS.TABS')[1]}>
              <Text>{I18n.t('SCROLLABLE_TABS.TABS')[1]}</Text>
            </View>

          </ScrollableTabView>
        </Content>
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
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(BlankPage);
