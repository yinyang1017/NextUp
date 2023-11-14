import { customTheme } from '../../../../constants';
import { hp, wp } from '../../../../utils/responsive';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  title: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontWeight: '700',
    color: customTheme.colors.light,
    fontSize: customTheme.fontSizes.size_20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  headerSeeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSeeAllText: {
    color: customTheme.colors.light + '70',
    textDecorationLine: 'underline',
  },
  dropdownImage: { height: wp(4), width: wp(4), marginLeft: wp(1) },

  // TableHeader
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(2),
  },
  headerText: index => ({
    color: customTheme.colors.light,
    fontFamily: customTheme.fontFamily.robotoRegular,
    textAlign: 'center',
    paddingHorizontal: wp(1),
  }),

  // TableBody
  tableBody: { gap: hp(1) },
  tableBodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableBodyCellValue: {
    fontWeight: '700',
    fontFamily: customTheme.fontFamily.robotoRegular,
    textAlign: 'center',
    paddingHorizontal: wp(1),
    color: customTheme.colors.light,
    fontSize: customTheme.fontSizes.size_13,
  },
  tableBodyCellFlag: {
    height: wp(5),
    width: wp(5),
    marginHorizontal: wp(1),
  },
  tableBodyNameCell: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    paddingRight: '6%',
  },
});

export default styles;
