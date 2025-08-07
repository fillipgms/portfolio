"use client";
import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

export interface Configurations {
    textSpeed: number;
    autoAdvance: boolean;
    volume: number;
    skipUnread: boolean;
    language: string;
}

interface ConfigurationContextType {
    textSpeed: number;
    setTextSpeed: Dispatch<SetStateAction<number>>;
    autoAdvance: boolean;
    setAutoAdvance: Dispatch<SetStateAction<boolean>>;
    volume: number;
    setVolume: Dispatch<SetStateAction<number>>;
    skipUnread: boolean;
    setSkipUnread: Dispatch<SetStateAction<boolean>>;
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}

const defaultConfigs: Configurations = {
    textSpeed: 50,
    autoAdvance: false,
    volume: 0.8,
    skipUnread: false,
    language: "en",
};

const ConfigurationContext = createContext<ConfigurationContextType>({
    textSpeed: defaultConfigs.textSpeed,
    setTextSpeed: () => {},
    autoAdvance: defaultConfigs.autoAdvance,
    setAutoAdvance: () => {},
    volume: defaultConfigs.volume,
    setVolume: () => {},
    skipUnread: defaultConfigs.skipUnread,
    setSkipUnread: () => {},
    language: defaultConfigs.language,
    setLanguage: () => {},
});

export function ConfigurationContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [textSpeed, setTextSpeed] = useState<number>(
        defaultConfigs.textSpeed,
    );
    const [autoAdvance, setAutoAdvance] = useState<boolean>(
        defaultConfigs.autoAdvance,
    );
    const [volume, setVolume] = useState<number>(defaultConfigs.volume);
    const [skipUnread, setSkipUnread] = useState<boolean>(
        defaultConfigs.skipUnread,
    );
    const [language, setLanguage] = useState<string>(defaultConfigs.language);

    return (
        <ConfigurationContext.Provider
            value={{
                textSpeed,
                setTextSpeed,
                autoAdvance,
                setAutoAdvance,
                volume,
                setVolume,
                skipUnread,
                setSkipUnread,
                language,
                setLanguage,
            }}
        >
            {children}
        </ConfigurationContext.Provider>
    );
}

export function useConfigs() {
    return useContext(ConfigurationContext);
}
