import { User } from '@/models/user/User'
import BaseApiService from './BaseApiService'

export class UserApi extends BaseApiService {
  constructor() {
    // super('User/')
    super('')
  }

  // * GET
  public async get() {
    this.method = 'GET'
    this.resetHeaders()

    // TODO: Actually call API and return a user
    // const request = this.request<void>()
    // return await this.fetch<User>(``, request)

    // * No API yet, just returning a test JSON
    const fakeUser: User = {
      Profile: {
        info: {
          uid: 'e0a2b6fe-3ebb-4630-af1e-233680ac56e8',
          first_name: 'Paul',
          last_name: 'Lee',
          pic: 'https://source.unsplash.com/random/?person',
        },
        elements: [
          {
            element_type: 'Traits',
            detail_level1: [
              {
                cat_id: 10,
                cat: 'Able to act in the face of uncertainty',
                detail_level2: [
                  { cat_id: 30, cat: 'Not Afraid to Fail' },
                  { cat_id: 40, cat: 'Quick to Act' },
                ],
              },
            ],
          },
          {
            element_type: 'Events',
            detail_level1: [
              {
                cat_id: 110,
                cat: 'Hearing a story',
                detail_level2: [{ cat_id: 470, cat: 'The Power of the Media' }],
              },
            ],
          },
          {
            element_type: 'Benefits',
            detail_level1: [
              {
                cat_id: 350,
                cat: 'Having your contributions be recognized',
                detail_level2: undefined,
              },
              {
                cat_id: 210,
                cat: 'Gaining a renewed sense of purpose',
                detail_level2: [{ cat_id: 870, cat: 'Enhanced Self Esteem' }],
              },
            ],
          },
          {
            element_type: 'Behavior',
            detail_level1: [
              {
                cat_id: 270,
                cat: 'Action and outcomes, not talk, process or structure',
                detail_level2: [
                  { cat_id: 1160, cat: 'Talk is Cheap' },
                  { cat_id: 1190, cat: 'Free to Act' },
                ],
              },
            ],
          },
        ],
      },
      Connections: undefined,
    }
    return fakeUser
  }
}
