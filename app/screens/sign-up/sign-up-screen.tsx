import React, { FC, useCallback } from "react"
import { View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, GradientBackground, Header, Screen, TextField } from "../../components"
import { color, spacing } from "../../theme"
import { NavigatorParamList } from "../../navigators"

export const SignUpScreen: FC<NativeStackScreenProps<NavigatorParamList, "signup">> = ({
  navigation,
}) => {
  const onHeaderLeftPress = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <View style={FULL}>
      <GradientBackground colors={[color.secondary, color.primary, color.primary]} />

      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        <Header headerText="Sign up with Email" onLeftPress={onHeaderLeftPress} />
        <View style={FORM_CONTENT}>
          <TextField label="Your name" />
          <TextField label="Email" />
          <TextField label="Password (min 6 characters)" />

          <View style={BUTTON_WRAP}>
            <Button style={BUTTON} preset="green" text="SIGN UP" />
          </View>
        </View>
      </Screen>
    </View>
  )
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  alignItems: "center",
}
const FORM_CONTENT: ViewStyle = {
  paddingHorizontal: 38,
  marginTop: spacing[4],
  flex: 1,
  width: "100%",
}
const BUTTON_WRAP: ViewStyle = {
  alignItems: "center",
}
const BUTTON: ViewStyle = {
  width: 150,
  marginTop: 26,
}
