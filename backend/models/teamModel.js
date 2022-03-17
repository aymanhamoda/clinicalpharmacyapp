import mongoose from 'mongoose'
const memberSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const teamSchema = mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    members: [memberSchema],
  },
  {
    timestamps: true,
  }
)

const Team = mongoose.model('Team', teamSchema)

export default Team
