import { EntryModel } from '../models/Entries';
import { connect } from 'mongoose';

connect('mongodb://localhost:27017/diary')

const colors = ["#e6c2b8", "#88b9cc", "#c4afca", "#9ed38e"];

async function populateEntries( count: Number ) {
    console.info('Initiating db script on ', new Date());
    for( let i=0; i< count; i++) {
        const obj = {
            head: i + "This is heading " + i + " <3",
            body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."+
                    "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"+
                    "content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"+
                    "and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,"+
                    "sometimes on purpose (injected humour and the like).",
            key: "6153501034ca498ed4482944",
            style: {
                head: colors[Math.random()*10 ],
                body: colors[Math.random()*10 ]
            }
        }
        const doc = new EntryModel( {...obj} );
        const newDoc = await doc.save();
        console.log("document saved with id" ,doc._id)
    }
}

populateEntries(50).then((d) => {
    console.info("Documents saved");
    process.exit(0);
})