/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import {Text} from 'react-native';
import _ from 'lodash';
import {Text, StyleSheet, View} from 'react-native';
import {Picker} from 'react-native-ui-lib';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryPie,
} from 'victory-native';
import {Colors, Fonts, Layout} from '../../../constants';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '../../../views/GlobalStyles';
let wide = Layout.width;
function RecordPan({homeRecord, awayRecord}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#23262F',
        width: '90%',
        alignSelf: 'center',
        // marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 15,
          borderRightColor: Colors.grey,
          borderRightWidth: 1,
        }}>
        {homeRecord != '' && homeRecord != null ? (
          <Text
            style={{
              color: Colors.light,
              fontSize: 24,
              lineHeight: 24,
              fontWeight: '400',
              fontFamily: Fonts.Regular,
            }}>
            {homeRecord}
          </Text>
        ) : (
          <Text
            style={{
              color: Colors.light,
              fontSize: 24,
              lineHeight: 24,
              fontWeight: '400',
              fontFamily: Fonts.Regular,
            }}>
            0 - 0
          </Text>
        )}
        <Text
          style={{
            color: Colors.grey,
            marginTop: 5,
            fontSize: 14,
            lineHeight: 14,
            fontWeight: '400',
            fontFamily: Fonts.Regular,
          }}>
          Home Record
        </Text>
      </View>

      <View style={{flex: 1, alignItems: 'center', paddingVertical: 15}}>
        {awayRecord != '' && awayRecord != null ? (
          <Text
            style={{
              color: Colors.light,
              fontSize: 24,
              lineHeight: 24,
              fontWeight: '400',
              fontFamily: Fonts.Regular,
            }}>
            {awayRecord}
          </Text>
        ) : (
          <Text
            style={{
              color: Colors.light,
              fontSize: 24,
              lineHeight: 24,
              fontWeight: '400',
              fontFamily: Fonts.Regular,
            }}>
            0 - 0
          </Text>
        )}
        <Text
          style={{
            color: Colors.grey,
            marginTop: 5,
            fontSize: 14,
            lineHeight: 14,
            fontWeight: '400',
            fontFamily: Fonts.Regular,
          }}>
          Away Record
        </Text>
      </View>
    </View>
  );
}

function PieChart({wins, looses, lastRecord = 'N/A'}) {
  const startAngle = (90 * Math.abs(wins - looses)) / (looses + wins);
  console.log(startAngle);
  return (
    <View
      style={{
        width: '90%',
        height: wide * 0.75,
        marginTop: wide * 0.01,
        marginHorizontal: wide * 0.05,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <>
        <View
          style={{
            position: 'absolute',
            top: 80,
            alignItems: 'center',
            justifyContent: 'center',
            width: wide * 0.18,
            height: wide * 0.15,
          }}>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.Light,
              fontSize: 24,
              lineHeight: 24,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {wins + looses}
          </Text>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.Bold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Total Games
          </Text>
        </View>

        <View style={{height: '70%', bottom: 30}}>
          <VictoryChart width={300} height={280}>
            <VictoryPie
              colorScale={['#CE1141', '#246BFD']}
              standalone={false}
              width={180}
              startAngle={startAngle}
              endAngle={startAngle + 360}
              height={180}
              innerRadius={60}
              data={[looses, wins]}
              style={{
                labels: {display: 'none'},
              }}
            />
            <VictoryAxis
              style={{
                axis: {stroke: 'transparent'},
                ticks: {stroke: 'transparent'},
                tickLabels: {fill: 'transparent'},
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: {stroke: 'transparent'},
                ticks: {stroke: 'transparent'},
                tickLabels: {fill: 'transparent'},
              }}
            />
          </VictoryChart>
        </View>
      </>

      <View
        style={{
          justifyContent: 'space-between',
          width: '100%',
          height: '25%',
          flexDirection: 'row',
          // backgroundColor: 'blue',
          bottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row', //backgroundColor: 'green',
            width: '55%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '60%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.compareRankColor,
                fontSize: 12,
                lineHeight: 16,
                fontWeight: '500',
                fontFamily: Fonts.Medium,
              }}>
              W/L Streak{' '}
            </Text>
            <Text
              style={{
                color: Colors.light,
                fontSize: 16,
                lineHeight: 18,
                fontFamily: Fonts.Bold,
              }}>
              {wins - looses}
            </Text>
          </View>
          <View
            style={{
              height: '60%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.compareRankColor,
                fontSize: 12,
                lineHeight: 16,
                fontWeight: '500',
                fontFamily: Fonts.Medium,
              }}>
              Last 10
            </Text>
            <Text
              style={{
                color: Colors.light,
                fontSize: 16,
                lineHeight: 18,
                fontWeight: '600',
                fontFamily: Fonts.SemiBold,
              }}>
              {lastRecord}
            </Text>
          </View>
        </View>
        <View style={{width: '40%', justifyContent: 'center'}}>
          <>
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <>
                <View
                  style={{
                    width: 28,
                    height: 2,
                    backgroundColor: '#246BFD',
                  }}
                />
                <Text
                  style={{
                    color: '#246BFD',
                    fontSize: 16,
                    lineHeight: 16,
                    fontWeight: '700',
                    fontFamily: Fonts.Bold,
                    marginHorizontal: 10,
                  }}>
                  {wins} Wins
                </Text>
              </>
            </View>
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <>
                <View
                  style={{
                    width: 28,
                    height: 2,
                    backgroundColor: '#CE1141',
                  }}
                />
                <Text
                  style={{
                    color: '#CE1141',
                    fontSize: 16,
                    lineHeight: 16,
                    fontWeight: '700',
                    fontFamily: Fonts.Bold,
                    marginHorizontal: 10,
                  }}>
                  {looses} Losses
                </Text>
              </>
            </View>
          </>
        </View>
      </View>
    </View>
  );
}

function StatisticOverview() {
  const homeRecord = '0-0';
  const awayRecord = '0-0';
  const items = [
    {
      label: '2020-21',
      id: '12',
      value: '2020-21',
    },
    {
      label: '2020-20',
      id: '13',
      value: '2020-20',
    },
  ];
  const [date, setDate] = React.useState(undefined);
  const getWidth = width => {
    return 100 * 0.5;
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: FontSize.size_3xl,
            color: Color.othersWhite,
            lineHeight: 22,
            textAlign: 'left',
            fontFamily: FontFamily.robotoBold,
            fontWeight: '600',
          }}>
          Statistical Overview
        </Text>
        <Picker
          value={date}
          fieldType="filter"
          placeholder={'Select Date'}
          onChange={e => setDate(e)}
          style={{
            fontSize: FontSize.bodyMediumSemibold_size,
            color: Color.othersWhite,
            lineHeight: 22,
            textAlign: 'left',
            fontFamily: FontFamily.robotoBold,
            fontWeight: '600',
          }}
          customPickerProps={{}}>
          {_.map(items, item => {
            return (
              <Picker.Item
                key={item.id}
                value={item.value}
                label={item.label}
              />
            );
          })}
        </Picker>
      </View>
      <RecordPan homeRecord={homeRecord} awayRecord={awayRecord} />
      <PieChart wins={4} looses={2} />
      {/* <View style={styles.data}>
        {_.map([...new Array(5)], (item, index) => {
          return (
            <View key={index} style={[styles.group]}>
              <Text style={[styles.label]}>
                PTS -{item} {index + 1}
              </Text>
              <View
                style={{
                  marginLeft: Padding.p_xl,
                }}>
                <Text
                  style={{
                    color: Color.othersWhite,
                  }}>
                  <View
                    style={{
                      width: 100 * 0.5,
                      backgroundColor: Color.goldenrod_100,
                      height: 8,
                    }}
                  />{' '}
                  <Text>{getWidth(index + 1)}</Text>
                </Text>
                <Text
                  style={{
                    color: Color.darkgray_100,
                  }}>
                  <View
                    style={{
                      width: 200,
                      backgroundColor: Color.darkgray_100,
                      height: 8,
                    }}
                  />{' '}
                  <Text>{getWidth(index + 1)}</Text>
                </Text>
              </View>

              <View style={[styles.groupItem, styles.groupPosition1]} />
            </View>
          );
        })}
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginHorizontal: 8,
            }}>
            <View
              style={{
                width: 25,
                backgroundColor: Color.darkgray_300,
                height: 8,
              }}
            />

            <Text
              style={{
                color: Color.othersWhite,
                marginLeft: Padding.p_12xs,
                fontFamily: FontFamily.robotoBold,
                fontWeight: 600,
              }}>
              {' '}
              Overall Game
            </Text>
          </Text>
          <Text>
            <View
              style={{
                width: 25,
                backgroundColor: Color.goldenrod_100,
                height: 8,
              }}
            />

            <Text
              style={{
                color: Color.goldenrod_100,
                marginLeft: Padding.p_12xs,
              }}>
              {' '}
              Last Game
            </Text>
          </Text>
        </View>
      </View> */}
    </View>
  );
}

export default StatisticOverview;
