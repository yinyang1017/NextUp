
import { ActionSheet } from "react-native-ui-lib";
export default function UpdloadTypeDialog({ isVisible, onClose, handlePick, handleScan }) {

    // const { makeUploadApiRequest } = useDocumentUpload()
    return <ActionSheet
        title={'Choose an option'}
        cancelButtonIndex={3}
        useNativeIOS
        destructiveButtonIndex={3}
        visible={isVisible}
        onDismiss={onClose}
        options={[
            { label: 'Scan the Document', onPress: () => handleScan() },
            { label: 'Upload the Document', onPress: () => handlePick() },
            { label: 'Cancel', onPress: () => console.log('cancel') }
        ]}
    />

}