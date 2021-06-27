import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'

import { styles } from './styles'

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  modalType?: string;
}

export function ModalView({
  children, 
  closeModal,
  modalType,
  ...rest}: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={modalType === "logout" ? styles.containerLogout : styles.container}>
            <Background>
              {!modalType && <View style={styles.bar} />}
                {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>
  )
}
