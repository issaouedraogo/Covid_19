import React, { useState } from 'react'
import {View, Modal} from 'react-native'



export default function ReportUpdate(){
    const [vis, setvis] = useState(false);

    return(
        <Modal visible={false} animated={vis}>
            <View>
                <Text>list goes there</Text>
            </View>
        </Modal>
        
    );


}