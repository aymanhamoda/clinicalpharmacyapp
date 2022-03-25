import mongoose from 'mongoose'

const errTypeSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const ErrType = mongoose.model('ErrType', errTypeSchema)

export default ErrType
