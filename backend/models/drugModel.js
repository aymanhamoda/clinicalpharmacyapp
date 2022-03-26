import mongoose from 'mongoose'
const labelSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
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
      ref: 'MedicationErrorType',
    },
    errTempNote: {
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
      required: true,
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
