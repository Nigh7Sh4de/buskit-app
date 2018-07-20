import {
  StyleSheet,
  Dimensions,
} from 'react-native'

const Colors = {
  primary: '#209a71',
  secondary: '#ff2a00',
  pink: '#c17278',
  purple: '#986787',
  twitch: '#6441a4',
  light: '#f2f2f2',
  dark: '#494343',
  white: '#ffffff',
}

const borderRadius = 5

const { width, height } = Dimensions.get('window')

export const app = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    paddingBottom: 10000,
  },
})

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
    borderRadius,
    paddingLeft: 10,
    paddingRight: 10,
  }
})

export const streams = StyleSheet.create({
  empty: {
    color: Colors.dark,
    fontWeight: '600',
    fontSize: 24,
  },
  title: {
    marginLeft: 5,
    color: Colors.dark,
    fontWeight: '200',
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: height,
  },
  section: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginTop: 2,
    marginBottom: 20,
    borderRadius,
    padding: 10,
  },
  thumb: {
    width: 200,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  thumbInner: {
    flex: 1,
  },
  thumbImage: {
    width: 200,
    height: 200,
  },
  thumbText: {
    color: Colors.dark,
    fontWeight: '600',
    fontSize: 20,
  },
})

export const login = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
  },
  welcomeText: {
    fontSize: 56,
    paddingBottom: 18,
  },
  button: {
    backgroundColor: Colors.twitch,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 10,
  },
})

export const profile = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 100,
    height,
  },
  section: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginTop: 2,
    marginBottom: 20,
    borderRadius,
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 50,
  },
  infoInner: {
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
    borderRadius,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
  },
  title: {
    marginBottom: 10,
    color: Colors.dark,
    fontWeight: '400',
    fontSize: 36,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
  },
  thumbImage: {
    width: 250,
    height: 250,
  },
  tagList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    fontWeight: '600',
    fontSize: 14,
    marginRight: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: Colors.purple,
    color: Colors.white,
    borderRadius,
  },
})