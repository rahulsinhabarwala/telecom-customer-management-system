const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter customer name',
  },
  {
    id: 'dob',
    label: 'Date of Birth',
    type: 'date',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email address',
  },
  {
    id: 'aadharNumber',
    label: 'Aadhar Number',
    type: 'text',
    placeholder: '123456789012',
  },
  {
    id: 'mobileNumber',
    label: 'Mobile Number',
    type: 'text',
    placeholder: '9876543210',
  },
  {
    id: 'planId',
    label: 'Plan',
    type: 'planSelection',
  },
];

export { formFields };
