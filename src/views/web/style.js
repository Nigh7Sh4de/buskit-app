import {
  StyleSheet,
} from 'react-native'

const Colors = {
  primary: '#209A71',
}

export const nav = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  button: {
    justifyContent: 'center',
    textTransform: 'uppercase',
    marginLeft: 10,
    marginRight: 10,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
  },
  pending: {
    width: 32,
    height: 32,
  },
  search: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
  },
  searchBox: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
})