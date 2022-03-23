import mongoose from 'mongoose'

const teamMemberSchema = mongoose.Schema(
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
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const TeamMember = mongoose.model('TeamMember', teamMemberSchema)

export default TeamMember
