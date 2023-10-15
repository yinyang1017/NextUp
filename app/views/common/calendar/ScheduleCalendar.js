
import { Text, View } from "react-native-ui-lib";
import { customTheme } from "../../../constants";
import { ScreenHeader } from "../../../components/common/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import CalendarStrip from 'react-native-calendar-strip';
import { useMemo, useState } from "react";
import moment from "moment";
import { EventCarousel } from "../../../components/coach/Dashboard/EventsCarousel";
import { MyChallenges } from "../../../components/coach/Dashboard/Challenges";
import { ViewContainer } from "../../../components/common/ViewConatiner";
import { CardSectionTitle } from "../../../components/common/cards/CardSectionTitile";
import { PracticeCard } from "../../../components/common/cards/PracticeCard";
import { ChallengeCard } from "../../../components/common/cards/ChallengeCard";
import { ScrollView } from "react-native-gesture-handler";
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
export default function ScheduleCalendar() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState('');
    const [calendarDate, setCalendarDate] = useState(moment());
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
    const selectedDate = useMemo(() => {
        return ({
            year: moment(calendarDate).year(),
            month: months[moment(calendarDate).month()],
            day: moment(calendarDate).date(),
        });
    }, [calendarDate])
    const handleCalendarClick = (date) => {
        console.log(date);
        setCalendarDate(date)
    }

    return (
        <>

            <ScrollView  >
                <ViewContainer>
                    <Text header-bold>Calendar</Text>
                    <View row spread centerV>
                        <View marginT-24 marginB-8>
                            <Text small-x >{selectedDate?.year}</Text>
                            <Text header-bold>{selectedDate?.month}</Text>

                        </View>
                        <View>
                            <Text centerH><View
                                width={customTheme.spacings.spacing_8}
                                height={customTheme.spacings.spacing_8}
                                style={{
                                    borderRadius: customTheme.spacings.spacing_16,
                                }}
                                backgroundColor={customTheme.colors.blue20} /> <Text small-600> Game</Text></Text>
                            <Text centerH><View
                                width={customTheme.spacings.spacing_8}
                                height={customTheme.spacings.spacing_8}
                                style={{
                                    borderRadius: customTheme.spacings.spacing_16,
                                }}
                                backgroundColor={customTheme.colors.yellow20} /> <Text small-600> My Practice</Text></Text>
                        </View>
                    </View>

                </ViewContainer>
                <CalendarStrip
                    scrollable
                    scrollToOnSetSelectedDate
                    selectedDate={calendarDate}
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    headerText={" "}
                    onDateSelected={(date) => {
                        handleCalendarClick(date)
                    }}
                    daySelectionAnimation={{
                        type: 'border',
                        duration: 200,
                        borderWidth: 10,
                        borderColor: customTheme.colors.primary
                    }}

                    style={{ height: 80 }}
                    calendarColor={customTheme.colors.primary}
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


                <ViewContainer>
                    <EventCarousel title="Upcoming Games" />
                    <CardSectionTitle title={'My Challenges'} onPress={() => navigation.navigate('MyChallenges')} />
                    <ChallengeCard
                        title={'August 21, 2022'}
                        subTitle={'3-4:00 PM'}

                    />
                    {/* <CardSectionTitle title={'My Challenges'} onPress={() => navigation.navigate('MyChallenges')} /> */}
                    <ChallengeCard
                        title={'August 21, 2022'}
                        subTitle={'3-4:00 PM'}
                    />
                    {/* 
                       Challenges
                    */}
                    <CardSectionTitle title={'My Practice'} onPress={() => navigation.navigate('MyChallenges')} />
                    <PracticeCard
                        title={'August 21, 2022'}
                        subTitle={'3-4:00 PM'}
                    />
                    {/* End */}

                </ViewContainer>
            </ScrollView >
        </>

    )
}