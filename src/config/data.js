const globalData = {
  companyName: 'Youline',
  supportPhone: '+8801700000000',
  timeZone: 'UTC-6',
  reactionConfig: [
    { type: 1, title: 'smile', schema: 'reactionSmileCount' },
    { type: 2, title: 'love', schema: 'reactionloveCount' },
    { type: 3, title: 'haha', schema: 'reactionHahaCount' },
    { type: 4, title: 'insightful', schema: 'reactionInsightfulCount' },
    { type: 5, title: 'angry', schema: 'reactionAngryCount' },
  ],
  reportConfig: [
    {
      id: 1,
      title: 'Sexual content',
    },
    {
      id: 2,
      title: 'Violent or repulsive content',
    },
    {
      id: 3,
      title: 'Harassment or bullying',
    },
    {
      id: 4,
      title: 'Harmfull or dangerous acts',
    },
    {
      id: 5,
      title: 'Child abuse',
    },
    {
      id: 6,
      title: 'Infringes my rights',
    },
    {
      id: 7,
      title: 'Promotes terrorism',
    },
    {
      id: 8,
      title: 'Spam or misleading',
    },
  ],
}

// Teachers Data:
const TeachersData = [
  {
    teacher_name: 'John Smith',
    mobile: '555-555-5555',
    email: 'john.smith@example.com',
    password: 'Password@1234',
    dob: '1980-01-01',
    department: 'Mathematics',
    qualifications: [
      "Bachelor's Degree in Mathematics",
      "Master's Degree in Mathematics",
    ],
    address: {
      street: '123 Main St.',
      city: 'New York',
      state: 'NY',
      zipcode: '10001',
    },
  },
  {
    teacher_name: 'Jane Doe',
    mobile: '555-555-5556',
    email: 'jane.doe@example.com',
    password: 'Password@1234',
    dob: '1985-02-01',
    department: 'Science',
    qualifications: ["Bachelor's Degree in Biology", 'Ph.D. in Biology'],
    address: {
      street: '456 Elm St.',
      city: 'Boston',
      state: 'MA',
      zipcode: '02115',
    },
  },
  {
    teacher_name: 'David Lee',
    mobile: '555-555-5557',
    email: 'david.lee@example.com',
    password: 'Password@1234',
    dob: '1982-03-01',
    department: 'Social Studies',
    qualifications: ["Bachelor's Degree in History"],
    address: {
      street: '789 Oak St.',
      city: 'Chicago',
      state: 'IL',
      zipcode: '60601',
    },
  },
  {
    teacher_name: 'Maria Rodriguez',
    mobile: '555-555-5558',
    email: 'maria.rodriguez@example.com',
    password: 'Password@1234',
    dob: '1978-04-01',
    department: 'Languages',
    qualifications: [
      "Bachelor's Degree in Spanish",
      "Master's Degree in Spanish",
    ],
    address: {
      street: '321 Pine St.',
      city: 'Miami',
      state: 'FL',
      zipcode: '33131',
    },
  },
  {
    teacher_name: 'Chris Johnson',
    mobile: '555-555-5559',
    email: 'chris.johnson@example.com',
    password: 'Password@1234',
    dob: '1987-05-01',
    department: 'Physical Education',
    qualifications: ["Bachelor's Degree in Physical Education"],
    address: {
      street: '654 Cedar St.',
      city: 'Los Angeles',
      state: 'CA',
      zipcode: '90001',
    },
  },
  {
    teacher_name: 'Samantha Lee',
    mobile: '555-555-5560',
    email: 'samantha.lee@example.com',
    password: 'Password@1234',
    dob: '1984-06-01',
    department: 'Mathematics',
    qualifications: [
      "Bachelor's Degree in Mathematics",
      "Master's Degree in Mathematics",
      'Ph.D. in Mathematics',
    ],
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
]

const UsersData = [
  {
    name: 'John Smith',
    username: 'jsmith',
    password: 'Password@1234',
    email: 'jsmith@example.com',
    mobile: '555-555-5555',
    about: 'I am a software engineer.',
    dob: '1990-01-01',
    gender: 'male',
  },
  {
    name: 'Jane Doe',
    username: 'jdoe',
    password: 'Password@1234',
    email: 'jdoe@example.com',
    mobile: '555-555-5556',
    about: 'I am a marketing specialist.',
    dob: '1992-02-01',
    gender: 'female',
  },
  {
    name: 'David Lee',
    username: 'dlee',
    password: 'Password@1234',
    email: 'dlee@example.com',
    mobile: '555-555-5557',
    about: 'I am a business analyst.',
    dob: '1988-03-01',
    gender: 'male',
  },
  {
    name: 'Maria Rodriguez',
    username: 'mrodriguez',
    password: 'Password@1234',
    email: 'mrodriguez@example.com',
    mobile: '555-555-5558',
    about: 'I am a graphic designer.',
    dob: '1995-04-01',
    gender: 'female',
  },
  {
    name: 'Chris Johnson',
    username: 'cjohnson',
    password: 'Password@1234',
    email: 'cjohnson@example.com',
    mobile: '555-555-5559',
    about: 'I am a fitness trainer.',
    dob: '1993-05-01',
    gender: 'male',
  },
  {
    name: 'Samantha Lee',
    username: 'slee',
    password: 'Password@1234',
    email: 'slee@example.com',
    mobile: '555-555-5560',
    about: 'I am a writer.',
    dob: '1991-06-01',
    gender: 'female',
  },
  {
    name: 'Michael Kim',
    username: 'mkim',
    password: 'Password@1234',
    email: 'mkim@example.com',
    mobile: '555-555-5561',
    about: 'I am a software developer.',
    dob: '1989-07-01',
    gender: 'male',
  },
  {
    name: 'Amanda Nguyen',
    username: 'anguyen',
    password: 'Password@1234',
    email: 'anguyen@example.com',
    mobile: '555-555-5562',
    about: 'I am a human resources specialist.',
    dob: '1994-08-01',
    gender: 'female',
  },
  {
    name: 'Mark Brown',
    username: 'mbrown',
    password: 'Password@1234',
    email: 'mbrown@example.com',
    mobile: '555-555-5563',
    about: 'I am a sales representative.',
    dob: '1996-09-01',
    gender: 'male',
  },
  {
    name: 'Laura Martinez',
    username: 'lmartinez',
    password: 'Password@1234',
    email: 'lmartinez@example.com',
    mobile: '555-555-5564',
    about: 'I am a customer service representative.',
    dob: '1997-10-01',
    gender: 'female',
  },
]

const StudentData = [
  {
    student_name: 'John Smith',
    roll_number: '2023001',
    mobile: '555-555-5555',
    email: 'jsmith@example.com',
    password: 'Password@1234',
    dob: '2005-06-12',
    gender: 'Male',
    blood_group: 'A+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Jane Doe',
    roll_number: '2023002',
    mobile: '555-555-5556',
    email: 'jdoe@example.com',
    password: 'Password@1234',
    dob: '2005-07-15',
    gender: 'Female',
    blood_group: 'B+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Bob Johnson',
    roll_number: '2023003',
    mobile: '555-555-5557',
    email: 'bjohnson@example.com',
    password: 'Password@1234',
    dob: '2006-02-10',
    gender: 'Male',
    blood_group: 'AB+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Alice Smith',
    roll_number: '2023004',
    mobile: '555-555-5558',
    email: 'asmith@example.com',
    password: 'Password@1234',
    dob: '2004-12-20',
    gender: 'Female',
    blood_group: 'O+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'David Jones',
    roll_number: '2023005',
    mobile: '555-555-5559',
    email: 'djones@example.com',
    password: 'Password@1234',
    dob: '2005-10-30',
    gender: 'Male',
    blood_group: 'A-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Emily Davis',
    roll_number: '2023006',
    mobile: '555-555-5560',
    email: 'edavis@example.com',
    password: 'Password@1234',
    dob: '2006-03-25',
    gender: 'Female',
    blood_group: 'B-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Alex Rodriguez',
    roll_number: '2023007',
    mobile: '555-555-5561',
    email: 'arodriguez@example.com',
    password: 'Password@1234',
    dob: '2004-11-05',
    gender: 'Male',
    blood_group: 'AB-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Samantha Lee',
    roll_number: '2023008',
    mobile: '555-555-5562',
    email: 'slee@example.com',
    password: 'Password@1234',
    dob: '2005-09-15',
    gender: 'Female',
    blood_group: 'O-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'George Wilson',
    roll_number: '2023009',
    mobile: '555-555-5563',
    email: 'gwilson@example.com',
    password: 'Password@1234',
    dob: '2006-01-01',
    gender: 'Male',
    blood_group: 'A+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
]

const ParentData = [
  {
    parent_name: 'John Smith Sr.',
    mobile: '555-555-5555',
    email: 'jsmithsr@example.com',
    password: 'Password@1234',
    relation: 'Father',
  },
  {
    parent_name: 'Jane Doe Sr.',
    mobile: '555-555-5556',
    email: 'jdoesr@example.com',
    password: 'Password@1234',
    relation: 'Mother',
  },
  {
    parent_name: 'Alex Johnson',
    mobile: '555-555-5557',
    email: 'ajohnson@example.com',
    password: 'Password@1234',
    relation: 'Guardian',
  },
  {
    parent_name: 'Maria Garcia',
    mobile: '555-555-5558',
    email: 'mgarcia@example.com',
    password: 'Password@1234',
    relation: 'Mother',
  },
  {
    parent_name: 'David Lee',
    mobile: '555-555-5559',
    email: 'dlee@example.com',
    password: 'Password@1234',
    relation: 'Father',
  },
  {
    parent_name: 'Sophia Chen',
    mobile: '555-555-5560',
    email: 'schen@example.com',
    password: 'Password@1234',
    relation: 'Guardian',
  },
  {
    parent_name: 'William Davis',
    mobile: '555-555-5561',
    email: 'wdavis@example.com',
    password: 'Password@1234',
    relation: 'Father',
  },
  {
    parent_name: 'Emily Brown',
    mobile: '555-555-5562',
    email: 'ebrown@example.com',
    password: 'Password@1234',
    relation: 'Mother',
  },
  {
    parent_name: 'Daniel Kim',
    mobile: '555-555-5563',
    email: 'dkim@example.com',
    password: 'Password@1234',
    relation: 'Father',
  },
  {
    parent_name: 'Isabella Martinez',
    mobile: '555-555-5564',
    email: 'imartinez@example.com',
    password: 'Password@1234',
    relation: 'Mother',
  },
]

const SubjectData = [
  {
    subject_name: 'Mathematics',
    syllabus: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'],
  },
  {
    subject_name: 'English',
    syllabus: ['Grammar', 'Literature', 'Writing'],
  },
  {
    subject_name: 'Science',
    syllabus: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    subject_name: 'Social Studies',
    syllabus: ['History', 'Geography', 'Civics'],
  },
  {
    subject_name: 'Computer Science',
    syllabus: ['Programming', 'Data Structures', 'Algorithms'],
  },
  {
    subject_name: 'Art',
    syllabus: ['Drawing', 'Painting', 'Sculpture'],
  },
  {
    subject_name: 'Music',
    syllabus: ['Theory', 'Composition', 'Performance'],
  },
  {
    subject_name: 'Physical Education',
    syllabus: ['Sports', 'Fitness', 'Health'],
  },
  {
    subject_name: 'Languages',
    syllabus: ['French', 'Spanish', 'German'],
  },
  {
    subject_name: 'Economics',
    syllabus: ['Microeconomics', 'Macroeconomics', 'International Trade'],
  },
]

const ClassData = [
  {
    class_name: 1,
    number_of_students: 20,
    schedule: [
      {
        day: '2023-02-14',
        start_time: '08:30',
        end_time: '10:00',
      },
      {
        day: '2023-02-16',
        start_time: '09:00',
        end_time: '11:00',
      },
    ],
  },
  {
    class_name: 2,
    number_of_students: 18,
    schedule: [
      {
        day: '2023-02-13',
        start_time: '10:00',
        end_time: '11:30',
      },
      {
        day: '2023-02-15',
        start_time: '11:00',
        end_time: '13:00',
      },
    ],
  },
  {
    class_name: 3,
    number_of_students: 25,
    schedule: [
      {
        day: '2023-02-14',
        start_time: '11:00',
        end_time: '12:30',
      },
      {
        day: '2023-02-16',
        start_time: '10:30',
        end_time: '12:00',
      },
    ],
  },
  {
    class_name: 4,
    number_of_students: 22,
    schedule: [
      {
        day: '2023-02-12',
        start_time: '09:30',
        end_time: '11:00',
      },
      {
        day: '2023-02-14',
        start_time: '10:00',
        end_time: '12:00',
      },
    ],
  },
  {
    class_name: 5,
    number_of_students: 19,
    schedule: [
      {
        day: '2023-02-13',
        start_time: '13:00',
        end_time: '14:30',
      },
      {
        day: '2023-02-15',
        start_time: '14:00',
        end_time: '16:00',
      },
    ],
  },
  {
    class_name: 6,
    number_of_students: 21,
    schedule: [
      {
        day: '2023-02-12',
        start_time: '13:30',
        end_time: '15:00',
      },
      {
        day: '2023-02-14',
        start_time: '14:00',
        end_time: '16:00',
      },
    ],
  },
  {
    class_name: 7,
    number_of_students: 23,
    schedule: [
      {
        day: '2023-02-13',
        start_time: '09:30',
        end_time: '11:00',
      },
      {
        day: '2023-02-15',
        start_time: '10:00',
        end_time: '12:00',
      },
    ],
  },
]

const AttendanceData = [
  {
    date: '2023-02-12',
    class: '',
    attendance: [
      {
        student: '',
        status: 'present',
      },
      {
        student: '',
        status: 'absent',
      },
    ],
  },
  {
    date: '2023-02-11',
    class: '',
    attendance: [
      {
        student: '',
        status: 'present',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
  {
    date: '2023-02-10',
    class: '',
    attendance: [
      {
        student: '',
        status: 'absent',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
  {
    date: '2023-02-09',
    class: '',
    attendance: [
      {
        student: '',
        status: 'absent',
      },
      {
        student: '',
        status: 'absent',
      },
    ],
  },
  {
    date: '2023-02-08',
    class: '',
    attendance: [
      {
        student: '',
        status: 'present',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
  {
    date: '2023-02-07',
    class: '',
    attendance: [
      {
        student: '',
        status: 'absent',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
]

const EventData = [
  {
    event_name: 'Annual Sports Day',
    date: '2023-02-28',
    startsAt: '09:00:00',
    endsAt: '15:00:00',
    venue: 'School Playground',
    description: 'A day full of exciting sports events for all students.',
  },
  {
    event_name: 'Parent-Teacher Meeting',
    date: '2023-03-10',
    startsAt: '16:00:00',
    endsAt: '19:00:00',
    venue: 'School Auditorium',
    description:
      "Opportunity for parents to meet their child's teachers and discuss academic progress.",
  },
  {
    event_name: 'Science Fair',
    date: '2023-04-15',
    startsAt: '10:00:00',
    endsAt: '14:00:00',
    venue: 'School Science Lab',
    description:
      'Students showcase their innovative and creative science projects.',
  },
  {
    event_name: 'Annual Day Celebration',
    date: '2023-05-20',
    startsAt: '17:00:00',
    endsAt: '21:00:00',
    venue: 'School Auditorium',
    description:
      'A cultural extravaganza showcasing the talents of our students.',
  },
  {
    event_name: 'Field Trip',
    date: '2023-06-05',
    startsAt: '08:00:00',
    endsAt: '16:00:00',
    venue: 'City Zoo',
    description:
      'An educational and fun-filled trip to the zoo for our students.',
  },
  {
    event_name: "Teacher's Day",
    date: '2023-09-05',
    startsAt: '10:00:00',
    endsAt: '11:30:00',
    venue: 'School Auditorium',
    description:
      'A special event to express gratitude and appreciation towards our teachers.',
  },
  {
    event_name: 'Independence Day Celebration',
    date: '2023-08-15',
    startsAt: '09:00:00',
    endsAt: '10:30:00',
    venue: 'School Ground',
    description: "A patriotic event to celebrate India's Independence Day.",
  },
  {
    event_name: 'Christmas Celebration',
    date: '2023-12-25',
    startsAt: '11:00:00',
    endsAt: '13:00:00',
    venue: 'School Auditorium',
    description:
      'A festive event to celebrate Christmas and spread joy and happiness.',
  },
  {
    event_name: 'Inter-School Debate Competition',
    date: '2023-07-10',
    startsAt: '10:00:00',
    endsAt: '14:00:00',
    venue: 'School Auditorium',
    description:
      'Students participate in a debating competition with other schools.',
  },
]

const MarksData = [
  {
    date: '2023-02-10',
    subject: '61a12a34b567890cde123456',
    marks_records: [
      {
        student: '12a34b567890cde123456789',
        marks_obtained: 80,
      },
      {
        student: '23b45c678901def234567890',
        marks_obtained: 90,
      },
      {
        student: '34c56d78901efa3456789012',
        marks_obtained: 75,
      },
    ],
  },
  {
    date: '2023-02-11',
    subject: '12a34b567890cde123456789',
    marks_records: [
      {
        student: '23b45c678901def234567890',
        marks_obtained: 65,
      },
      {
        student: '34c56d78901efa3456789012',
        marks_obtained: 70,
      },
      {
        student: '45d67e8901fab45678901234',
        marks_obtained: 85,
      },
    ],
  },
  {
    date: '2023-02-12',
    subject: '23b45c678901def234567890',
    marks_records: [
      {
        student: '34c56d78901efa3456789012',
        marks_obtained: 92,
      },
      {
        student: '45d67e8901fab45678901234',
        marks_obtained: 88,
      },
      {
        student: '56e78f9012abc56789012345',
        marks_obtained: 78,
      },
    ],
  },
  {
    date: '2023-02-13',
    subject: '34c56d78901efa3456789012',
    marks_records: [
      {
        student: '45d67e8901fab45678901234',
        marks_obtained: 65,
      },
      {
        student: '56e78f9012abc56789012345',
        marks_obtained: 75,
      },
      {
        student: '67f89a012bcd67890123456',
        marks_obtained: 85,
      },
    ],
  },
  {
    date: '2023-02-14',
    subject: '45d67e8901fab45678901234',
    marks_records: [
      {
        student: '56e78f9012abc56789012345',
        marks_obtained: 82,
      },
      {
        student: '67f89a012bcd67890123456',
        marks_obtained: 90,
      },
      {
        student: '78a01b234c56789012345678',
        marks_obtained: 72,
      },
    ],
  },
]

const FeesData = [
  {
    student: '60dbf9d57f750bb9ac8c6b91',
    date: '2023-02-12T00:00:00.000Z',
    amount_paid: 1500,
    payment_mode: 'Cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b92',
    date: '2023-02-10T00:00:00.000Z',
    amount_paid: 2000,
    payment_mode: 'Online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b93',
    date: '2023-02-08T00:00:00.000Z',
    amount_paid: 1000,
    payment_mode: 'Cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b94',
    date: '2023-02-06T00:00:00.000Z',
    amount_paid: 500,
    payment_mode: 'Online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b95',
    date: '2023-02-04T00:00:00.000Z',
    amount_paid: 2500,
    payment_mode: 'Cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b96',
    date: '2023-02-02T00:00:00.000Z',
    amount_paid: 3000,
    payment_mode: 'Online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b97',
    date: '2023-01-31T00:00:00.000Z',
    amount_paid: 1500,
    payment_mode: 'Cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b98',
    date: '2023-01-29T00:00:00.000Z',
    amount_paid: 1000,
    payment_mode: 'Online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b99',
    date: '2023-01-27T00:00:00.000Z',
    amount_paid: 500,
    payment_mode: 'Cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b9a',
    date: '2023-01-25T00:00:00.000Z',
    amount_paid: 2000,
    payment_mode: 'Online',
  },
]

module.exports = {
  globalData,
  UsersData,
  TeachersData,
  StudentData,
  ParentData,
  SubjectData,
  ClassData,
  AttendanceData,
  EventData,
  FeesData,
  MarksData,
  NotificationData,
}