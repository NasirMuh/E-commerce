// import * as fs from 'fs';
// // export default function handler(req, res) {

// //   if (req.method === 'POST') {
// //     res.status(200).json({ name: 'Mr. Nasir' })

// //      let data = fs.readdir('contactdata');
// //           console.log(data);
// //           fs.promises.writeFile(`/contactdata${data.length+1}.json`, JSON.stringify(req.body))
// //     // res.status(200).json("After Status"+ JSON.stringify(data))

// //   }
// //   else {
// //     res.status(200).json({ name: 'Mr. Nasir' })
// //   }

// // }


export default async function handler(req, res) {

  if (req.method === 'POST') {
    //  let data = await fs.promises.readdir('/contactdata');
     let data = await fs.promises.readdir('contactdata');

     console.log(data);
    fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body))
    res.status(200).json("Post Method")
  }
  else {
    res.status(200).json({ name: 'Mr. Nasir' })
  }

}
