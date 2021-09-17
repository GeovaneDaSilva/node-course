import mongoose, { Collection, connect } from "mongoose";


export const MongooseHelper = {
    url: null as string,
    collection: Collection,
    async connect(url: string): Promise<void> {
        mongoose.connect(url, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true}, (err)=> {
            if (err) {
                return console.log(err)
            }
        })
    }
}