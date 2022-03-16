import mongoose from 'mongoose'
const errorNoteSchema = mongoose.Schema(
  {
    medication: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const followupSchema = mongoose.Schema(
  {
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
    date: {
      type: Date,
    },
    clinicalNote: {
      type: String,
    },
    errorNotes: [errorNoteSchema],
  },
  {
    timestamps: true,
  }
)

const Followup = mongoose.model('Followup', followupSchema)

export default Followup
