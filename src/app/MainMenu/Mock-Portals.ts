import {Portal} from './Portal';
import {PortalList} from './PortalList';

export const PORTALLISTS: PortalList[] =
[
    {
      data: [
              {
                id: 1,
                header: 'Courses',
                description: 'Search for a course!',
                logo: '',
                state: '/course'
              },
              {
                id: 1,
                header: 'Enrollment',
                description: 'Any available seats?',
                logo: '',
                state: '/enrollment'
              },
              {
                id: 1,
                header: 'Classrooms',
                description: 'Looking for a study place!',
                logo: '',
                state: '/classroom'
              }
            ],
      length: 3
    },
    {
      data: [
              {
                id: 1,
                header: 'Term',
                description: 'Current Term Info!',
                logo: '',
                state: '/term'
              },
              {
                id: 1,
                header: 'Finals',
                description: 'When and Where?',
                logo: '',
                state: '/finals'
              },
              {
                id: 1,
                header: 'Login',
                description: 'With CAS authentication',
                logo: '',
                state: '/login'
              }
            ],
      length: 3
    }

]
