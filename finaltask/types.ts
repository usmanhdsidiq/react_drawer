import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    Details: { items: string[],
        handleDeleteItem: (index: number) => void,
        handleEditItem: (index: number) => void,
     };
};

export type DrawerParamList = {
    Tabs: undefined;
    Home: undefined;
    Details: undefined;
};

export type TabsParamList = {
    Home: undefined;
    Details: undefined;
};

export type LoginScreenNavigationProp = StackScreenProps<RootStackParamList, 'Login'>;
export type DetailScreenNavigationProp = StackScreenProps<RootStackParamList, 'Details'>;
export type DrawerScreenNavigationProp = DrawerScreenProps<DrawerParamList, 'Tabs'>;
export type TabScreenNavigationProp = BottomTabScreenProps<TabsParamList, 'Home'>;