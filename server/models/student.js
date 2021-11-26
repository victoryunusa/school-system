import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    registrationNumber: String,
    fisrtName: String,
    lastName: String,
    grade: String,
    age: Number,
    section: {
        type: String,
        default: 'A'
    },
    subjects: [String]
});

const student = mongoose.model('student', studentSchema);

export default student;