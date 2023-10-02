import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Layout, Colors, Fonts, customTheme} from '../../constants';

const SideBySideBarGraph = ({pgsData}) => {
  const maxWidth = Math.max(...pgsData.map(el => Math.max(...el.value)));
  return (
    <>
      {pgsData.map(obj => {
        const key = obj.name;
        const leftVal = obj.value[0];
        const rightVal = obj.value[1];
        return (
          <View
            style={{
              width: '100%',
              height: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 3,
            }}>
            <View
              style={{
                width: '40%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              {leftVal > 0 ? (
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.compareBar,
                    paddingRight: 6,
                    fontFamily: Fonts.Bold,
                  }}>
                  {leftVal}
                </Text>
              ) : null}
              {leftVal > 0 ? (
                <View
                  style={{
                    width: `${80 * Math.pow(leftVal / maxWidth, 2)}%`,
                    backgroundColor:
                      leftVal >= rightVal ? Colors.compareBar : Colors.emptyBar,
                    height: 12,
                    maxWidth: '90%',
                  }}
                />
              ) : (
                <View
                  style={{
                    width: '90%',
                    backgroundColor: Colors.emptyBar,
                    height: 12,
                  }}
                />
              )}
            </View>
            <View
              style={{
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: customTheme.colors.light,
                  fontSize: 12,
                  fontFamily: Fonts.Bold,
                }}>
                {key}
              </Text>
            </View>

            <View
              style={{
                width: '40%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              {rightVal > 0 ? (
                <View
                  style={{
                    width: `${80 * Math.pow(rightVal / maxWidth, 2)}%`,
                    backgroundColor:
                      rightVal >= leftVal
                        ? Colors.compareRightBar
                        : Colors.emptyBar,
                    height: 12,
                    maxWidth: '90%',
                  }}
                />
              ) : (
                <View
                  style={{
                    width: '90%',
                    backgroundColor: Colors.emptyBar,
                    height: 12,
                  }}
                />
              )}
              {rightVal > 0 ? (
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.compareRightBar,
                    paddingLeft: 8,
                    fontFamily: Fonts.Bold,
                  }}>
                  {rightVal}
                </Text>
              ) : null}
            </View>
          </View>
        );
      })}
    </>
  );
};

export default SideBySideBarGraph;
