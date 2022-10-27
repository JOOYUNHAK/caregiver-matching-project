/* 상대방이 프로필을 확인했는지 여부 */

import { StyleSheet, Text } from "react-native"
import Icon from "../../../Icon"

export default function ProfileCheck() {
    return (
        <>
            <Icon props={['entypo', 'dot-single', 10, '#949494']} />
            <Text style={styles.profileCheck}>
                프로필 확인하지 않음
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    profileCheck: {
        color: '#949494',
        fontSize: 12,
    }
})