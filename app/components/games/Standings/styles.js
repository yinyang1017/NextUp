import { MyColors } from '../../../constants/colors';
import { hp, wp } from '../../../utils/responsive';
import { FontFamily, FontSize } from '../../../views/GlobalStyles';

const { StyleSheet } = require('react-native');

const getCellWidthByIndex = index => {
  if (index === 0) {
    return '5%';
  }
  if (index === 1) {
    return '45%';
  }
  return '10%';
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '700',
    color: MyColors.light,
    fontSize: FontSize.size_xl,
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
    color: MyColors.light + '70',
    textDecorationLine: 'underline',
  },
  dropdownImage: { height: wp(4), width: wp(4), marginLeft: wp(1) },

  // TableHeader
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(1),
    borderBottomColor: '#2B2B3D',
    borderBottomWidth: 1,
    paddingBottom: hp(1),
    paddingHorizontal: wp(1),
  },
  headerText: index => ({
    color: MyColors.light,
    fontFamily: FontFamily.robotoRegular,
    width: getCellWidthByIndex(index),
    textAlign: 'center',
    paddingHorizontal: wp(1),
  }),

  // TableBody
  tableBody: { gap: hp(1) },
  tableBodyRow: index => ({
    backgroundColor:
      index >= 5 ? '#181829' : index >= 3 ? '#441818' : '#14274D',
    borderRadius: wp(2.5),
    paddingVertical: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1),
  }),
  tableBodyCellValue: (color, index) => ({
    fontWeight: '700',
    fontFamily: FontFamily.robotoRegular,
    textAlign: index === 1 ? 'left' : 'center',
    paddingHorizontal: wp(1),
    width: index !== undefined ? getCellWidthByIndex(index) : undefined,
    color: color || MyColors.light,
    fontSize: FontSize.size_sm_3,
  }),
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
