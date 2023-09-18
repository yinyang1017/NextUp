import { Text, View, Image, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../../views/GlobalStyles";
export const SectionHeader = ({ title }) => {
    return <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    }}>
        <Text style={{
            fontSize: FontSize.size_3xl,
            color: Color.othersWhite,
            lineHeight: 22,
            textAlign: "left",
            fontFamily: FontFamily.robotoBold,
            fontWeight: "600",


        }}>{title}</Text>
        <View style={[styles.seeAllParent, styles.parentFlexBox]}>
            <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
            <Image
                style={[styles.chevronDownIcon, styles.chevronIconLayout]}
                resizeMode="cover"
                source={require(".../../../assets/chevrondown4.png")}
            />
        </View>
        {/* <Picker
            value={"Player Stats"}
            fieldType="filter"
            placeholder={'Last 5 games'}
            onChange={(e) => console.log(e)}
            style={{
                fontSize: FontSize.bodyMediumSemibold_size,
                color: Color.othersWhite,
                lineHeight: 22,
                textAlign: "left",
                fontFamily: FontFamily.robotoBold,
                fontWeight: "600",
            }}
            customPickerProps={{



            }}

        >
            {
                _.map(items, (item, index) => {
                    return <Picker.Item key={index} value={item} />
                })
            }

        </Picker> */}
    </View>
}
const styles = StyleSheet.create({
    seeAll: {
        color: Color.royalblue,
        textAlign: "left",
        fontSize: FontSize.bodyMediumSemibold_size,
    },
    chevronDownIcon: {
        marginLeft: 2,
    },
    seeAllParent: {
        width: 60,
        height: 16,
    },
    parentFlexBox: {
        height: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    textTypo1: {
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
    },
    chevronIconLayout: {
        height: 14,
        width: 14,
        overflow: "hidden",
    },
})