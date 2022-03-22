import mongoose from 'mongoose'

const medicaionErrorSchema = mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Team',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Patient',
    },
    admission: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Admission',
    },
    followup: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Followup',
    },
    date: {
      type: Date,
    },
    medication: {
      type: String,
    },
    medicationErrorClass: {
      type: String,
    },
    medicationErrorNote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const MedicationError = mongoose.model('MedicationError', medicaionErrorSchema)

export default MedicationError
