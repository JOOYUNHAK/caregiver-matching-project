/* 일당 필터 */

import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Icon from "../../Icon";
import Modal from 'react-native-modal';
import { useState } from "react";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import PayFilterModalHeader from "./PayFilter/PayFilterModalHeader";
import PayFilterModalMiddle from "./PayFilter/PayFilterModalMiddle";
import PayFilterModalBottom from "./PayFilter/PayFilterModalBottom";

export default function PayFilter() {
    const { payFilter } = useSelector(state => ({
        payFilter: state.profile.filters.payFilter
    }))

    const [isVisible, setIsVisible] = useState(false);
    const setVisible = (bool) => {
        setIsVisible(bool);
    };

    return (
        <>
            <TouchableHighlight
                style={{
                    marginLeft: 15,
                }}
                underlayColor='none'
                onPress={() => setIsVisible(true)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{
                        fontSize: 13,
                        color: '#7a7a7a',
                    }}>
                        {payFilter}
                    </Text>
                    <Icon props={['material', 'expand-more', 20, '#7a7a7a']} />
                </View>
            </TouchableHighlight>

            <Modal
                isVisible={isVisible}
                onBackdropPress={() => setIsVisible(false)}
                onBackButtonPress = {() => setIsVisible(false)}
                style={styles.modal}
                backdropTransitionOutTiming={0}
                swipeDirection='down'
                onSwipeComplete={() => setIsVisible(false)}
            >
                <View style = {styles.modalContent}>
                    <PayFilterModalHeader />
                    <PayFilterModalMiddle setVisible={setVisible}/>
                    <PayFilterModalBottom setVisible={setVisible}/>
                </View>

            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },

    modalContent: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'auto',
        width: wp('100%'),
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }
})


