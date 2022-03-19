import mongoose from 'mongoose'

const admissionSchema = mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Team',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Patient',
    },
    admissionDate: {
      type: Date,
    },
    admissionDetails: {
      type: String,
    },
    dischargeDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Admission = mongoose.model('Admission', admissionSchema)

export default Admission
