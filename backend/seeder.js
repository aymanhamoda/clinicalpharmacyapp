import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import drugs from './data/drugs.js'
import Drug from './models/drugModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    const sampleProducts = drugs.map((product) => {
      return { ...product }
    })

    await Drug.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
