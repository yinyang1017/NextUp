import { ScrollViewContainer } from "../../../components/common/SrollViewContainer";
import { Text } from "react-native-ui-lib";
import TeamTable from "../../../components/common/TeamTable";
import { CustomTable } from "../../../components/common/CustomTable";
export default function Games() {
    return (
        <ScrollViewContainer>

            <CustomTable title="Team History" />
            <CustomTable title="2021-22 Pacific Standings" />
        </ScrollViewContainer>
    )
}