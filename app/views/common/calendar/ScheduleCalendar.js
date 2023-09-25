import { ScrollView } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { customTheme } from "../../../constants";
import { ScreenHeader } from "../../../components/common/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import CalendarStrip from 'react-native-calendar-strip';
import { useState } from "react";
import styles from "../../../constants/styles";
import moment from "moment";
import { EventCarousel } from "../../../components/players/Dashboard/EventsCarousel";
import { MyChallenges } from "../../../components/players/Dashboard/Challenges";
export default function ScheduleCalendar() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState('');
    const markedDatesArray = [
        {
            date: moment(),
            dots: [
                {
                    color: customTheme.colors.secondary,

                }
            ]
        }
    ]
    return (
        < >
            <ScrollView
                showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={true}

            >
                <ScreenHeader
                    title={"Calendar"}

                />
                <CalendarStrip
                    scrollable
                    markedDates={markedDatesArray}
                    scrollToOnSetSelectedDate
                    selectedDate={new Date()}
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    headerText={" "}
                    daySelectionAnimation={{
                        type: 'border',
                        duration: 200,
                        borderWidth: 10,
                        borderColor: customTheme.colors.tertiary
                    }}

                    style={{ height: 80 }}
                    calendarColor={customTheme.colors.tertiary}
                    calendarHeaderStyle={{ color: 'white' }}
                    dateNumberStyle={{ color: 'white' }}
                    dateNameStyle={{ color: 'white' }}
                    iconContainer={{ opacity: 0 }}
                    iconLeft={null}
                    iconRight={null}
                    highlightDateContainerStyle={{
                        backgroundColor: customTheme.colors.blue20
                    }}
                    highlightDateNameStyle={{ color: 'white' }}
                    highlightDateNumberStyle={{ color: 'white' }}
                    dayContainerStyle={{
                        borderRadius: 10,
                        borderColor: customTheme.colors.tertiary,
                        borderWidth: 2,
                        backgroundColor: customTheme.colors.background,

                    }}

                />
                <View style={{
                    paddingHorizontal: customTheme.spacings.spacing_20
                }}>
                    <EventCarousel title="Upcoming Games" />
                    <MyChallenges />
                </View>



            </ScrollView>
        </>
    )
}