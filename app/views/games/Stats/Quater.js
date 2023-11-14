import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import PlayerTable from '../../../components/games/StatsCollection/Main/PlayerTable';
import { customTheme } from '../../../constants';
import { hp, wp } from '../../../utils/responsive';
import FuelBar from '../../../components/games/StatsCollection/Main/FuelBar';
import Court from '../../../components/games/StatsCollection/Main/Court';
import Button from '../../../components/games/StatsCollection/Main/Button';
import HalfView from '../../../components/games/StatsCollection/Main/HalfView';
export default function Quater({}) {
  const navigation = useNavigation();
  return (
    <ViewContainer hideStatusBar isView={false}>
      <StatsHeader />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '30%' }}>
          <View
            style={{
              alignItems: 'center',

              marginBottom: wp(5),
            }}>
            <Text
              style={{
                textAlignVertical: 'center',
                color: customTheme.colors.white_08,
                height: wp(10),
              }}>
              Active Player
            </Text>
            <PlayerTable />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <HalfView>
              <Button
                label="Sub player"
                backgroundColor={customTheme.colors.yellow20}
                color={customTheme.colors.dark}
              />
            </HalfView>
            <HalfView>
              <Button
                label="Lineup"
                size="xSmall"
                backgroundColor={customTheme.colors.myTeamPlayerListLabel}
                borderRadius={5}
              />
            </HalfView>
          </View>
        </View>
        <View style={{ width: '70%' }}>
          <FuelBar time="08:52:22" />
          <View style={{ flexDirection: 'row' }}>
            <Court />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <View style={{ gap: wp(2) }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.blue30}
                      color={customTheme.colors.light}
                      label={'Def.Reb'}
                    />
                  </HalfView>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.blue30}
                      color={customTheme.colors.light}
                      label={'Off.Reb'}
                    />
                  </HalfView>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.blue30}
                      color={customTheme.colors.light}
                      label={'Turnover'}
                    />
                  </HalfView>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.blue30}
                      color={customTheme.colors.light}
                      label={'Steal'}
                    />
                  </HalfView>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.blue30}
                      color={customTheme.colors.light}
                      label={'Assist'}
                    />
                  </HalfView>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.blue30}
                      color={customTheme.colors.light}
                      label={'Block'}
                    />
                  </HalfView>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.green30}
                      color={customTheme.colors.light}
                      label={'Free Throw'}
                    />
                  </HalfView>
                  <HalfView>
                    <Button
                      backgroundColor={customTheme.colors.red20}
                      color={customTheme.colors.light}
                      label={'Foul'}
                    />
                  </HalfView>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <HalfView>
                  <Button
                    label={'End Game'}
                    color={customTheme.colors.light}
                    backgroundColor={customTheme.colors.myTeamPlayerListLabel}
                  />
                </HalfView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ViewContainer>
  );
}
