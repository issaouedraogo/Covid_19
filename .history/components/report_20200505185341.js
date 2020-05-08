import React, { useState } from 'react'
import {View, Modal} from 'react-native'



export default function ReportUpdate(){
    const [vis, setvis] = useState(false);

    console.log(vis);

    return(
        <Modal visible={false} animated={vis}>
            <View>
                <Text>List goes there</Text>
            </View>
        </Modal>
        
    );


}