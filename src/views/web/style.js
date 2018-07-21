import {
  StyleSheet,
  Dimensions,
} from 'react-native'

const Colors = {
  primary: '#209a71',
  secondary: '#ff2a00',
  pink: '#e14285',
  // pink: '#c17278',
  purple: '#a867a7',
  // purple: '#986787',
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
  buttonText: {
    fontWeight: '600',
    color: Colors.white,
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
    paddingBottom: 100,
    paddingHorizontal: 50,
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
    color: Colors.dark,
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
    paddingVertical: 20,
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
  live: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius,
    alignItems: 'center',
    marginBottom: 20,
  },
  liveText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
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

export const stream = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 100,
    height,
  },
  info: {
    alignSelf: 'center',
    marginLeft: -100,
    marginBottom: 10,
  },
  name: {
    fontSize: 36,
    fontWeight: '200',
    color: Colors.dark,
  },
  nameText: {
    fontWeight: '400',
    color: Colors.pink,
  },
  title: {
    fontSize: 20,
    fontWeight: '200',
    color: Colors.dark,
  },
  tagList: {
    flexDirection: 'row',
    marginVertical: 10,
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
  stream: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonFollow: {
    borderRadius,
    flex: 0.3,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.primary,
  },
  buttonTip: {
    borderRadius,
    flex: 0.3,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.pink,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 20,
  },
})

export const start = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  section: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 20,
    borderRadius,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '200',
    color: Colors.dark,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '200',
    color: Colors.dark,
    marginBottom: 5,
  },
  thumbImage: {
    width: 250,
    height: 250,
  },
  table: {
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
  },
  key: {
    flex: 0.3,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRightWidth: 0.5,
    borderColor: Colors.dark,
  },
  keyText: {
    color: Colors.dark,
    fontWeight: '200',
    fontSize: 16,
  },
  value: {
    flex: 0.7,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10,
  },
  valueText: {
    color: Colors.dark,
    fontWeight: '400',
  },
  tag: {
    fontWeight: '600',
    fontSize: 14,
    marginRight: 4,
    paddingHorizontal: 6,
    marginVertical: 2,
    paddingVertical: 3,
    backgroundColor: Colors.purple,
    color: Colors.white,
    borderRadius,
  },
  input: {
    borderRadius,
    borderWidth: 2,
    borderColor: Colors.purple,
    paddingVertical: 3,
    flex: 1,
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 60,
    backgroundColor: Colors.secondary,
    borderRadius,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
})