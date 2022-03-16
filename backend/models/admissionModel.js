import mongoose from 'mongoose'

const admissionSchema = mongoose.Schema(
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
    admissionDate: {
      type: Date,
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
