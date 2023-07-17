const patientId = localStorage.getItem('patientId');
const adminDataSet = [
  {
    id: 1,
    title: 'Profile',
    path: '/profile',
  },
  {
    id: 2,
    title: 'Add Doctors',
    path: '/add-doctor',
   
  },
  {
    id: 3,
    title: 'Create Report',
    path: '/report',
  },
  {
    id: 4,
    title: 'Search Medical History',
    path: '/medical-history',
  },
  {
    id: 5,
    title: 'Doctor List',
    path: '/doctors',
  },
  {
    id: 6,
    title: 'Appointment List',
    path: '/appointments-list',
  },
];

const userDataSet = [
  {
    id: 1,
    title: 'Profile',
    path: '/profile',
  },
  {
    id: 2,
    title: 'Book Appointments',
    path: '/appointments',
  },
  {
    id: 3,
    title: 'Medical History',
    path: `/medical-history/${patientId}`,
  },
  {
    id: 4,
    title: 'Doctor List',
    path: '/doctors',
  },
  {
    id: 5,
    title: 'Check Appointment',
    path: `/appointment/${patientId}`,
  },
];

const doctorDataSet = [
  {
    id: 1,
    title: 'Profile',
    path: '/profile',
  },
  {
    id: 2,
    title: 'Check Appointments',
    path: `appointment/${patientId}`,
  },
  {
    id: 3,
    title: 'Doctor List',
    path: '/doctors',
  },
]

const SidebarData = (role) => {
  if (role === 'Admin') {
    return adminDataSet;
  } else if (role === 'Doctor') {
    return doctorDataSet;
  }else return userDataSet
}
   

export default SidebarData;