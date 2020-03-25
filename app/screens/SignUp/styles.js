import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_SIZE_TITLE,
  FONT_SIZE_CAPTION,
  COLOR_GREY_PRIMARY
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  scrollView : {
    backgroundColor: COLOR_WHITE
  },
  title: {
    fontWeight: '600',
    fontSize: FONT_SIZE_TITLE,
    top: 0,
    left: 25
  },
  input: {
    height: scale(40),
    width: scale(260),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    fontSize: FONT_SIZE_CAPTION,
    paddingHorizontal: scale(20),
    left: 25,
  },
  inputPassword: {
    flexDirection: 'row',
    borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 25
    // marginRight: METRICS.smallMargin,
    // marginLeft: METRICS.smallMargin
  },
  inputPass: {
    height: scale(40),
    width: scale(260),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    fontSize: FONT_SIZE_CAPTION,
    paddingHorizontal: scale(20)
  },
  touachableButton: {
    position: 'absolute',
    right: scale(5),
    height: scale(25),
    width: scale(20),
    padding: scale(2)
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  btn: { width: scale(260), height: scale(40), backgroundColor: COLOR_FONT_PRIMARY_MAIN, top: 0, left: 25 },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_CAPTION
  },
  marginOne: { marginBottom: METRICS.fiveMargin },
  margin: { marginBottom: 15 }
});

export default styles;
