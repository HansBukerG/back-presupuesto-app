import Budget from "./Budget";
import Item from "./Item";
import User from "./User";


describe('Should Sync() all Models in DB', () =>{
    test('Should Sync() all Models in dataBase', async()=>{
        try {
            // await Category.sync()
            await User.sync();
            await Budget.sync();
            await Item.sync();

            console.log('All the schemas have been Syncronized into the database')
        } catch (error) {
            console.log('Error in task: ', error)
            fail('Something has failed')
        } finally {
            // await client.close()
        }
    })
})