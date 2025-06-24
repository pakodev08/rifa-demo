import crypto from 'crypto';
import { Number } from '../mongoDB/Schemas/numbers-generator.js'

const generarNumberos = async (req, res) =>
{
  try {


    const existingNumbers = await Number.find().sort({ number: 1 });

    if (existingNumbers.length > 0) {
      return res.json({
        message: 'Los números ya han sido generados previamente',
        numbers: existingNumbers,
      });
    }
    let numberToGenerate = 100
    let numbersDB = []
    for (let i = 1; i <= numberToGenerate; i++) {
      let numberInfo = {
        id: crypto.randomUUID(),
        number: String(i).padStart(3, "0"),
      }

      numbersDB.push(numberInfo)
    }

    await Number.insertMany(numbersDB)

    res.json({
      message: 'Números generados e insertados correctamente',
      numbersDB

    })

  } catch (error) {
    console.error('Error al generar números:', error);
    res.status(500).json({
      message: 'Error al generar números',
      error: error.message
    });
  }

}
export
{
  generarNumberos
};




// const newNumber = [];
// for (let i = 1; i <= numberToGenerate; i++) {
//   newNumber = new Number({
//     id: crypto.randomUUID(),
//     number: String(i).padStart(4, "0"),
//   });
//   await newNumber.save();
// }
// try {

//   const generateNumber = () => {
//       const newItems = [];
//       for (let i = 1; i <= numberToGenerate; i++) {
//           newItems.push({
//               id: crypto.randomUUID(),
//               value: String(i).padStart(4, "0"),
//           });
//       }
//       return newItems;
//   };

//   const numeros = generateNumber();

//       await Number.insertMany(numeros);
//       res.status(200).json({
//           message: 'Números generados e insertados correctamente',
//           count: numeros.length,
//           numeros
//       });
//   } catch (error) {
//       res.status(500).json({
//           message: 'Error al insertar los números en la base de datos',
//           error: error.message
//       });
//   }




