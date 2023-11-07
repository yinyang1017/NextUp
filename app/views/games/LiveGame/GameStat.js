import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, ProgressBar, Text, View } from 'react-native-ui-lib';
import { Colors, Fonts } from '../../../constants';
import { FontSize } from '../../GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { wp } from '../../../utils/responsive';
import PieChart from '../../../components/games/LiveGame/PieChart';
function GameTable() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(34, 37, 46, 1)',
        width: '100%',
        // height: wp(30),
        borderRadius: 14,
        marginTop: wp(4),
        paddingVertical: wp(0.5),
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        //   height: wp(10),
          marginTop: wp(1),
        }}>
        <View
          style={{
            width: '25%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.Regular,
              fontSize: 12,
              lineHeight: 16,
              fontWeight: '400',
              marginLeft: wp(3),
            }}
          />
        </View>

        <View
          style={{
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            borderBottomColor: '#6B6E74',
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderWidth: 1,
            paddingBottom: 10,
            paddingTop: 5,
            marginRight: wp(10),
          }}>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            Q1
          </Text>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            Q2
          </Text>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            Q3
          </Text>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            Q4
          </Text>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            Total
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',

        //   height: wp(2),
          marginTop: wp(2),
        }}>
        <View
          style={{
            width: '25%',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
              borderRadius: 12,
              marginLeft: wp(6),
            }}
            source={require('../../../assets/chicago-bulls-logo3.png')}
          />
        </View>
        <View
          style={{
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',

            paddingBottom: 10,
            paddingTop: 5,
            marginRight: wp(10),
          }}>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            0
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            0
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            0
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            0
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            0
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp(1),
          marginBottom: wp(2),
        }}>
        <View
          style={{
            width: '25%',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
              borderRadius: 12,
              marginLeft: wp(6),
            }}
            source={require('../../../assets/chicago-bulls-logo3.png')}
          />
        </View>

        <View
          style={{
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',

            paddingBottom: 10,
            paddingTop: 5,
            marginRight: wp(10),
          }}>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            -
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            -
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            -
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            -
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontFamily: Fonts.SemiBold,
              fontSize: 12,
              lineHeight: 14,
              fontWeight: '600',
              width: '15%',
            }}>
            -
          </Text>
        </View>
      </View>
    </View>
  );
}
function GameDetails({}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.light,
              fontSize: 12,
              fontWeight: '400',
            }}>
            2 points
          </Text>

          <View
            style={{
              marginTop: wp(3),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#CE1141',
                fontSize: 14,
                fontWeight: '400',
                marginRight: wp(2),
              }}>
              23
            </Text>
            <PieChart
              innerRadius={20}
              outerRadius={21}
              score1={13}
              score2={32}
              color1={'#FDB927'}
              color2={'#CE1141'}
            />

            <Text
              style={{
                color: '#FDB927',
                fontSize: 14,
                fontWeight: '400',
                marginLeft: wp(2),
              }}>
              23
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.light,
              fontSize: 12,
              fontWeight: '400',
            }}>
            3 points
          </Text>

          <View
            style={{
              marginTop: wp(3),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#CE1141',
                fontSize: 14,
                fontWeight: '400',
                marginRight: wp(2),
              }}>
              23
            </Text>
            <PieChart
              innerRadius={20}
              outerRadius={21}
              score1={13}
              score2={32}
              color1={'#FDB927'}
              color2={'#CE1141'}
            />

            <Text
              style={{
                color: '#FDB927',
                fontSize: 14,
                fontWeight: '400',
                marginLeft: wp(2),
              }}>
              23
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.light,
              fontSize: 12,
              fontWeight: '400',
            }}>
            Free throws
          </Text>

          <View
            style={{
              marginTop: wp(3),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#CE1141',
                fontSize: 14,
                fontWeight: '400',
                marginRight: wp(2),
              }}>
              232
            </Text>
            <PieChart
              innerRadius={20}
              outerRadius={21}
              score1={13}
              score2={32}
              color1={'#FDB927'}
              color2={'#CE1141'}
            />

            <Text
              style={{
                color: '#FDB927',
                fontSize: 14,
                fontWeight: '400',
                marginLeft: wp(2),
              }}>
              12
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: wp(3) }}>
        <Text style={styles.subtitle}>Rebounds</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: wp(2),
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[styles.progressInfo, styles.progressInfoBtn]}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: Colors.light,
              }}>
              Foul
            </Text>
          </TouchableOpacity>

          <Text style={styles.scoreText}>123</Text>

          <ProgressBar
            style={styles.progress}
            fullWidth
            progressColor={Colors.light}
            progress={32}
          />

          <ProgressBar
            style={[styles.progress, styles.reverse]}
            fullWidth
            progressColor={Colors.light}
            progress={32}
          />

          <Text style={styles.scoreText}>123</Text>

          <TouchableOpacity
            style={[styles.progressInfo, styles.progressInfoBtn]}>
            <Text style={styles.infoText}>Foul</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Turnovers</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: wp(2),
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={styles.progressInfo}>
            <Text style={styles.scoreText}>0</Text>
          </View>

          <Text style={styles.scoreText}>123</Text>

          <ProgressBar
            style={styles.progress}
            fullWidth
            progressColor={Colors.light}
            progress={32}
          />
          <ProgressBar
            style={[styles.progress, styles.reverse]}
            fullWidth
            progressColor={Colors.light}
            progress={32}
          />

          <Text style={styles.scoreText}>123</Text>

          <View style={styles.progressInfo}>
            <Text style={styles.scoreText}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function GameStat({title}) {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <GameTable />
      <GameDetails />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: Colors.light,
    fontSize: FontSize.size_3xl,
    fontWeight: '600',
  },
  progress: {
    width: wp(30),
    backgroundColor: Colors.foulBarColor,
  },
  reverse: { transform: [{ rotateY: '180deg' }] },
  progressInfo: { width: wp(7), alignItems: 'center' },
  progressInfoBtn: {
    backgroundColor: '#FF2D2D',
    padding: 5,
    borderRadius: 5,
  },
  scoreText: {
    color: Colors.light,
    fontSize: 12,
    fontWeight: '400',
  },
  infoText: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.light,
  },
  subtitle: {
    color: '#BDBEC0',
    alignSelf: 'center',
    fontSize: 11,
    fontWeight: '500',
  },
  container: {
    backgroundColor: Colors.playerCategoryBg,
    justifyContent: 'space-around',
    borderRadius: 14,
    marginTop: wp(4),
    paddingVertical: wp(4),
    paddingHorizontal: wp(2),
  },
});
