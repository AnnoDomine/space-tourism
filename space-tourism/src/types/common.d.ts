declare namespace NCommon {
    type TBreakpoints = "desktop" | "tablet" | "mobile";

    type TGenericObject<KeyType = string, ValueType = string> = {
        [key: KeyType]: ValueType;
    };
}
