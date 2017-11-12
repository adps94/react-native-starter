
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Platform } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon, View } from 'native-base';

import { openDrawer } from '../actions/drawer';
import { popRoute } from '../actions/route';
import I18n from '../../i18n';
import theme from '../themes/base-theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
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
          <Title>{(name) ? this.props.name : I18n.t('BLANKPAGE.TITLE')}</Title>
          <View />
        </Header>

        <Content padder>
          <Text>
            {(!isNaN(index)) ? list[index] : I18n.t('BLANKPAGE.BODY_CONTENT')}
          </Text>
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
