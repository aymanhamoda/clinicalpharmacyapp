import mongoose from 'mongoose'
const errSchema = mongoose.Schema(
  {
    errType: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'ErrType',
    },
    errDrug: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Drug',
    },
    errNote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
const reviewModelSchema = mongoose.Schema(
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
    reviewDate: {
      type: Date,
    },
    clinicalNote: {
      type: String,
    },
    error: [errSchema],
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewModelSchema)

export default Review
