import React, { createContext, useState, useContext, ReactNode} from "react";

type ItemsContextType = {
    items: string[];
    addItem: (item: string) => void;
    deleteItem: (index: number) => void;
    editItem: (index: number, newItem: string) => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const ItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<string[]>([]);
    const addItem = (item: string) => {
        setItems([...items, item]);
    };
    const deleteItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };
    const editItem = (index: number, newItem: string) => {
        setItems(items.map((item, i) => (i === index ? newItem : item)));
    };

    return (
        <ItemsContext.Provider value={{ items, addItem, deleteItem, editItem }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useItems = (): ItemsContextType => {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error('useItems must be used within an ItemsProvider');
    }
    return context;
};