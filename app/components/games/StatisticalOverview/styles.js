const { StyleSheet } = require('react-native');
const { FontFamily, FontSize } = require('../../../views/GlobalStyles');
const { MyColors } = require('../../../constants/colors');
const { wp, hp } = require('../../../utils/responsive');

const styles = StyleSheet.create({
  title: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '600',
    color: MyColors.light,
    fontSize: FontSize.size_3xl,
  },
  scoreCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: MyColors.lightDark,
    borderRadius: wp(2),
    paddingHorizontal: wp(6),
    paddingVertical: hp(1.2),
    justifyContent: 'space-around',
    marginTop: hp(2),
  },
  scoreItemContainer: { alignItems: 'center' },
  scoreItemScoreText: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '700',
    color: MyColors.light,
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
  },
  scoreItemSubTitle: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '700',
    color: MyColors.light + '50',
    marginTop: hp(0.5),
  },
  totalGamesContainer: {
    position: 'absolute',
    top: wp(14.5),
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  totalGamesCount: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '300',
    fontSize: FontSize.size_6xl,
    color: MyColors.light,
  },
  totalGamesText: {
    width: wp(10),
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoRegular,
    color: MyColors.light,
    fontWeight: '700',
    textAlign: 'center',
  },
  chartSvg: { alignSelf: 'center' },
  extraStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(8),
  },
  statsItemContainer: { alignItems: 'center' },
  statsItemTitle: {
    color: MyColors.compareRankColor,
    fontWeight: '700',
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  statsItemValue: {
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.robotoRegular,
    color: MyColors.light,
    fontWeight: '300',
  },
  agendaItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agedaItemIndicator: color => ({
    width: wp(7),
    height: 2,
    backgroundColor: color,
    marginRight: wp(2),
  }),
  agendaItemTitle: color => ({
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '700',
    fontSize: FontSize.bodyLargeBold_size,
    color: color,
  }),
});

export default styles;
