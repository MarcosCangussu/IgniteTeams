import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupsCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo Grupo", "Informe o Nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="Crie uma nova turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button style={{ marginTop: 20 }} title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}