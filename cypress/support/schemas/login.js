import Spok from "cy-spok";

export const schemaPostLogin = Spok({
    body: {
        token:Spok.string,
        userDetails: {
            userId: Spok.number,
            username: Spok.string,
            userTypeId: Spok.number
    }
}
})