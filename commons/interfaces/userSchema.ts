export interface keySchema {
    value: string,
    keyType: string
}

export interface userSchema {
    googleId: string,
    userName: string,
    displayPicture: string,
    email: string,
    keys: [keySchema]
}