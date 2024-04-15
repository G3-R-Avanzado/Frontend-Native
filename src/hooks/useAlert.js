import { useState } from "react";
import { View } from "react-native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export const useAlert = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [titulo, setMessageTitle] = useState('');
    const [cuerpo, setMessageBody] = useState('');
    const [type, setType] = useState(ALERT_TYPE.SUCCESS);
    const [typeError, setTypeError] = useState(ALERT_TYPE.WARNING);

    const cambiarMensaje =(titulo,mensaje)=>{
        setMessageTitle(titulo)
        setMessageBody(mensaje)
    }
    const showAlert = ({ messageTitle, messageBody }) => {
        Dialog.show({
            type:type,
            title: messageTitle,
            textBody: messageBody,
            button: 'ok',
        })
    };

    const showError = ({ messageTitle, messageBody }) => {
        Dialog.show({
            autoClose:2000,
            type:typeError,
            title: messageTitle,
            textBody: messageBody,
            button: 'ok',
        })
    };


    return {
        showAlert,
        
        isVisible,
        showError
    };
};

export default useAlert;