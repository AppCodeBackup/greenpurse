import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../style';

export default function (theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',
      backgroundColor: '#1279a6',
      marginLeft: -5,
      marginRight: -5,

    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: '300',
      color: appStyle.monthTextColor,
      margin: 10,
    },
    arrow: {
      padding: 10,
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: appStyle.arrowColor,
        },
        android: {
          tintColor: appStyle.arrowColor,
        },
      }),
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: appStyle.textSectionTitleColor,
    },
  });
}
