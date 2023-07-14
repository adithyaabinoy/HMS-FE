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
    path: `/medical-history'/${'id'}`,
  },
  {
    id: 4,
    title: 'Doctor List',
    path: '/doctors',
  },
  {
    id: 5,
    title: 'Check Appointment',
    path: `/appointment/${'id'}`,
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
    path: `appointments':${'doctor-id'}`,
  },
  {
    id: 3,
    title: 'Appointments List',
    path: '/appointments-list',
  },
  {
    id: 4,
    title: 'Doctor List',
    path: '/doctors',
  },
]

const SidebarData = (role) => {
  if (role === 'Admin') {
    return adminDataSet;
  } else if (role === 'Docter') {
    return doctorDataSet;
  }else return userDataSet
}
   

export default SidebarData;