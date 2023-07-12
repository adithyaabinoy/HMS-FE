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
    path: `/medical-history':${'user-id'}`,
  },
  {
    id: 4,
    title: 'Doctor List',
    path: '/doctors',
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
    title: 'Reservations',
    path: '/myreservations',
  },
  {
    id: 3,
    title: 'Check Appointments',
    path: `appointments':${'doctor-id'}`,
  },
  {
    id: 4,
    title: 'Appointments List',
    path: '/appointments-list',
  },
  {
    id: 5,
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