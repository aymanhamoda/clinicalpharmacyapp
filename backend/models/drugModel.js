import mongoose from 'mongoose'
const labelSchema = mongoose.Schema(
  {
    label: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
const errTempSchema = mongoose.Schema(
  {
    errType: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'ErrType',
    },
    label: {
      type: String,
    },
    isAdult: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)
const drugSchema = mongoose.Schema(
  {
    label: {
      type: String,
    },
    tradeLabels: [labelSchema],
    errTemps: [errTempSchema],
  },
  {
    timestamps: true,
  }
)

const Drug = mongoose.model('Drug', drugSchema)

export default Drug
