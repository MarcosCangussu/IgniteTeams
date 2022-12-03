import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION, GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll"; 


export async function GroupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groups = storedGroups.filter((group) => group !== groupDeleted);
    // const groups = ;

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
