import React, { FC, useCallback } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, Header, Screen, TextField } from "../../components"
import { color, spacing } from "../../theme"
import { NavigatorParamList } from "../../navigators"

export const ProfileScreen: FC<NativeStackScreenProps<NavigatorParamList, "profile">> = ({
  navigation,
}) => {
  return (
    <View style={FULL}>
      <Screen style={CONTAINER} backgroundColor={color.palette.white2}>
        <Header
          titleStyle={HEADER_TITLE}
          style={HEADER_STYLE}
          headerText="PROFILE"
          leftIcon={null}
        />
        <View style={FORM_CONTENT}>
          <TextField
            labelStyle={LABEL_STYLE}
            inputStyle={INPUT_STYLE}
            label="Name shown on your shared cards"
          />
          <TextField labelStyle={LABEL_STYLE} inputStyle={INPUT_STYLE} label="Email" />

          <View style={BUTTON_WRAP}>
            <Button style={BUTTON} preset="greyOutline" text="LOG OUT" />
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
const HEADER_STYLE: ViewStyle = {
  justifyContent: "flex-start",
}
const HEADER_TITLE: TextStyle = {
  fontSize: 15,
  color: color.palette.greyishBrown,
  letterSpacing: 0.75,
  opacity: 90,
  textAlign: "left",
}
const FORM_CONTENT: ViewStyle = {
  paddingHorizontal: 18,
  marginTop: spacing[3],
  flex: 1,
  width: "100%",
}
const LABEL_STYLE: TextStyle = {
  fontSize: 14,
  color: color.palette.greyishBrown,
  letterSpacing: 0,
}
const INPUT_STYLE: TextStyle = {
  backgroundColor: color.palette.white3,
}
const BUTTON_WRAP: ViewStyle = {
  alignItems: "center",
}
const BUTTON: ViewStyle = {
  width: 150,
  marginTop: 26,
}
