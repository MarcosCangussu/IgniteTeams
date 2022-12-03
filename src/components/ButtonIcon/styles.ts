import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;

// flex: 1;
//   background-color: ${({ theme }) => theme.COLORS.GRAY_600};
//   padding: 24px;